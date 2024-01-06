import { Box } from "@mui/material";
import {
  CardHeader,
  CardIconContainer,
  CardSubtitle,
  CardWrapper,
  MainCard,
  OverViewWrapper,
  OverviewContainer,
  ViewsCount,
} from "./OverviewSectionStyle";
import cardDeatils from "../../utils/dashboardcard/dashboardCard";
import OverviewChart from "../../components/templates/charts/OverviewChart";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allRenvenueData } from "../../redux/slices/revenueSlice";

const OverviewSection = () => {
 const [data, setData] = useState({
  playlistCount:0,
  subscriberCount:0,
  totalRevenue:0
 })
  const dispatch = useDispatch();
  useEffect(()=>{
    const callApiToAllRevenue =async ()=> {
      try {
        const response =await dispatch(allRenvenueData())
        setData((prev) => ({
          ...prev,
          playlistCount:response.payload.data.playlistsCount,
        }));
      } catch (error) {
        
      }
    }
    callApiToAllRevenue()
  },[])

  return (
    <OverViewWrapper>
      <OverviewContainer>
        {cardDeatils.map((item, index) => (
          <MainCard variant="outlined" key={index}>
            <CardWrapper>
              <Box>
                <CardHeader>{item.title}</CardHeader>
                <ViewsCount>{data.playlistCount}</ViewsCount>
              </Box>
              <CardIconContainer background={item.color}>
                {item.icon}
              </CardIconContainer>
            </CardWrapper>
            <CardSubtitle>{item.subtitle}</CardSubtitle>
          </MainCard>
        ))}
      </OverviewContainer>
        <OverviewChart />
    </OverViewWrapper>
  );
};

export default OverviewSection;

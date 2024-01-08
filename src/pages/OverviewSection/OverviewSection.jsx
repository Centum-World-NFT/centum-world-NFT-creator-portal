import { Box } from "@mui/material";
import {
  CardHeader,
  CardIconContainer,
  CardSubtitle,
  CardWrapper,
  CharContainer,
  MainCard,
  OverViewWrapper,
  OverviewContainer,
  ViewsCount,
} from "./OverviewSectionStyle";
import OverviewChart from "../../components/templates/charts/OverviewChart"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allRenvenueData } from "../../redux/slices/revenueSlice";
import { TrendingUpRounded } from "@mui/icons-material";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { myBestCourse } from "../../redux/slices/bestCourseSlice";

const OverviewSection = () => {
  const [data, setData] = useState({
    playlistCount: 0,
    subscriberCount: 0,
    totalRevenue: 0,
  });
  const [bestCourse, setBestCourse] = useState({
    course: "",
    no: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const callApiToAllRevenue = async () => {
      try {
        const response = await dispatch(allRenvenueData());
        setData((prev) => ({
          ...prev,
          playlistCount: response.payload.data.playlistsCount,
          subscriberCount: response.payload.data.subscribersCount,
          totalRevenue: response.payload.data.totalRevenue,
        }));
      } catch (error) {}
    };
    callApiToAllRevenue();
  }, [dispatch]);

  useEffect(() => {
    const callApiToBestCourse = async () => {
      try {
        const response = await dispatch(myBestCourse());
        if (response.payload.status) {
          setBestCourse((prev) => ({
            ...prev,
            course: response.payload.data._id,
            no: response.payload.data.count,
          }));
        }
      } catch (error) {}
    };
    callApiToBestCourse();
  }, [dispatch]);

  return (
    <OverViewWrapper>
      <OverviewContainer>
        <MainCard variant="outlined">
          <CardWrapper>
            <Box>
              <CardHeader>Total Playlist</CardHeader>
              <ViewsCount>{data.playlistCount}</ViewsCount>
            </Box>
            <CardIconContainer background="red">
              <TrendingUpRounded />
            </CardIconContainer>
          </CardWrapper>
          <CardSubtitle>Your total course till now</CardSubtitle>
        </MainCard>

        <MainCard variant="outlined">
          <CardWrapper>
            <Box>
              <CardHeader>Subscriber</CardHeader>
              <ViewsCount>{data.subscriberCount}</ViewsCount>
            </Box>
            <CardIconContainer background="yellow">
              <SubscriptionsRoundedIcon />
            </CardIconContainer>
          </CardWrapper>
          <CardSubtitle>Your total subscriber</CardSubtitle>
        </MainCard>

        <MainCard variant="outlined">
          <CardWrapper>
            <Box>
              <CardHeader>Revenue</CardHeader>
              <ViewsCount>₹{data.totalRevenue}</ViewsCount>
            </Box>
            <CardIconContainer background="blue">
              <MonetizationOnRoundedIcon />
            </CardIconContainer>
          </CardWrapper>
          <CardSubtitle>Total income</CardSubtitle>
        </MainCard>

        <MainCard variant="outlined">
          <CardWrapper>
            <Box>
              <CardHeader>{bestCourse.course}</CardHeader>
              <ViewsCount>{bestCourse.no}</ViewsCount>
            </Box>
            <CardIconContainer background="purple">
              <PeopleAltRoundedIcon />
            </CardIconContainer>
          </CardWrapper>
          <CardSubtitle>Your best video till now</CardSubtitle>
        </MainCard>
      </OverviewContainer>
      <CharContainer>
        <OverviewChart/>
      </CharContainer>
      
    </OverViewWrapper>
  );
};

export default OverviewSection;

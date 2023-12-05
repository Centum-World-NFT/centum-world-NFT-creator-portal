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

const OverviewSection = () => {
  return (
    <OverViewWrapper>
      <OverviewContainer>
        {cardDeatils.map((item, index) => (
          <MainCard variant="outlined" key={index}>
            <CardWrapper>
              <Box>
                <CardHeader>{item.title}</CardHeader>
                <ViewsCount>{item.detail}</ViewsCount>
                <CardSubtitle>{item.subtitle}</CardSubtitle>
              </Box>
              <CardIconContainer background={item.color}>
                {item.icon}
              </CardIconContainer>
            </CardWrapper>
          </MainCard>
        ))}
      </OverviewContainer>
        <OverviewChart />
    </OverViewWrapper>
  );
};

export default OverviewSection;

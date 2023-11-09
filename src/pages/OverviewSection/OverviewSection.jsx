import { Box } from "@mui/material";
import {
  CardHeader,
  CardSubtitle,
  CardWrapper,
  MainCard,
  OverViewWrapper,
  OverviewContainer,
  ViewsCount,
} from "./OverviewSectionStyle";
import CardImage from "../../assets/png/centum-logo.png";
import cardDeatils from "../../utils/dashboardcard/dashboardCard";

const OverviewSection = () => {
  return (
    <OverViewWrapper>
      <OverviewContainer>
        {cardDeatils.map((item, index) => (
          <MainCard variant="outlined">
            <CardWrapper>
              <Box>
                <CardHeader>{item.title}</CardHeader>
                <ViewsCount>{item.detail}</ViewsCount>
                <CardSubtitle>{item.subtitle}</CardSubtitle>
              </Box>
              <Box>
                <img src={CardImage} alt="" />
              </Box>
            </CardWrapper>
          </MainCard>
        ))}
      </OverviewContainer>
    </OverViewWrapper>
  );
};

export default OverviewSection;

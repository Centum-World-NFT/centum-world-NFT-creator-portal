import { PageTitle, VideoContainer, Wrapper } from "./UploadVideoStyle";
import StepForm from "../../components/templates/stepform/StepForm";
import { Box } from "@mui/material";

const UploadVideo = () => {
  return (
    <Wrapper>
      <VideoContainer>
        <PageTitle>Upload Your Content</PageTitle>
        <Box sx={{width: "60%", margin: "10px auto 0px auto"}}>
          <StepForm />
        </Box>
      </VideoContainer>
    </Wrapper>
  );
};

export default UploadVideo;

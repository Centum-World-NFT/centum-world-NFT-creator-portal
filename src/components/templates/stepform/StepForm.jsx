import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FirstForm from "../../forms/firstform/FirstForm";
import SecondForm from "../../forms/secondform/SecondForm";
import Confirm from "../../forms/confirm/Confirm";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { publishVideo } from "../../../redux/slices/videoSlice";
import PlaylistForm from "../../forms/playlistform/PlaylistForm";

const steps = [
  "Create Playlist",
  "Upload Video",
  "Upload Doc/pdf",
  "Confirmation",
];

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    console.log("Next Pressed");
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePublish = () => {
    console.log("Button PRessed");
    dispatch(publishVideo(formData));
    if (dispatch(publishVideo(formData))) {
      toast("Video Published", {
        position: "top-right",
        style: {
          border: "1px solid #70e000",
          padding: "16px",
          color: "#000",
        },
        iconTheme: {
          primary: "#70e000",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === 0 && <PlaylistForm />}
        {activeStep === 1 && <FirstForm />}
        {activeStep === 2 && <SecondForm />}
        {activeStep === 3 && <Confirm />}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          {activeStep === steps.length - 1 ? (
            <Button onClick={handlePublish}>Publish</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </>
      <Toaster />
    </>
  );
};

export default StepForm;

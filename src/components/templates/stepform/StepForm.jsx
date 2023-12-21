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

const steps = ["Upload Video", "Upload Doc/pdf", "Confirm"];

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

    if (
      !formData ||
      !formData.thumbnail ||
      !formData.video ||
      !formData.title ||
      !formData.description
    ) {
      toast.error("Please fill all details");
      return;
    }

    if (!formData.pdf && activeStep === 1) {
      toast.error("Please select a document");
      return;
    }

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

  const handlePublish = async () => {
    const response = await dispatch(publishVideo(formData));
    if (response.payload.status) {
      toast.success(response.payload.message);
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
        {activeStep === 0 && <FirstForm />}
        {activeStep === 1 && <SecondForm />}
        {activeStep === 2 && <Confirm />}
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

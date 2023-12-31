import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { VisuallyHiddenInput, WrapperBox } from "./SecondFormStyle";
import { UploadFileRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setUploadPdf } from "../../../redux/slices/formSlice";
import toast from "react-hot-toast";

const SecondForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch(setUploadPdf(file))
  };

  return (
    <WrapperBox>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Button
          component="label"
          variant="contained"
          startIcon={<UploadFileRounded />}
          sx={{
            textTransform: "inherit",
          }}
        >
          Upload Doc/pdf
          <VisuallyHiddenInput
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Button>
      </Box>
      {form.pdf && (
        <>
          <iframe
            title="PDF Preview"
            src={URL.createObjectURL(form.pdf)}
            style={{ width: "100%", height: "600px" }}
          />
        </>
      )}
    </WrapperBox>
  );
};

export default SecondForm;

import React from "react";
import {
  AccountContainer,
  AccountHeader,
  CreatorAddress,
  CreatorName,
  FormContainer,
  FormField,
  FormFieldContainer,
  FormHeading,
  FormInformation,
  Line,
  ProfileContainer,
  ProfilePicture,
  SubmitForm,
  UploadPicture,
  VisuallyHiddenInput,
  Wrapper,
} from "./CreatorAccountStyle";
import image from "../../utils/cardimages/image.jpg";
import { Box, Button, Grid, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CreatorAccount = () => {
  return (
    <Wrapper>
      <AccountHeader>Account</AccountHeader>
      <AccountContainer>
        <ProfileContainer>
          <ProfilePicture>
            <img
              src={image}
              alt="profile"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
          </ProfilePicture>
          <CreatorName>Raju Balmuchu</CreatorName>
          <CreatorAddress>Chisbasa Jharkhand</CreatorAddress>
          <Line></Line>
          <UploadPicture>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload picture
              <VisuallyHiddenInput type="file" />
            </Button>
          </UploadPicture>
        </ProfileContainer>

        <FormContainer>
          <FormHeading>Profile</FormHeading>
          <FormInformation>This information can be edited</FormInformation>
          <FormFieldContainer>
            <FormField>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between" // Adjust this based on your layout needs
              >
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-1"
                    label="First name"
                    variant="outlined"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-2"
                    label="Last name"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </FormField>

            <FormField>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between" // Adjust this based on your layout needs
              >
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-1"
                    label="Email"
                    variant="outlined"
                    type="email"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-2"
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                  />
                </Box>
              </Box>
            </FormField>

            <FormField>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between" // Adjust this based on your layout needs
              >
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-1"
                    label="Country"
                    variant="outlined"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic-2"
                    label="Select state"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </FormField>
          </FormFieldContainer>
          <SubmitForm>
              <Button variant="contained">Save details</Button>
            </SubmitForm>
        </FormContainer>
      </AccountContainer>
    </Wrapper>
  );
};

export default CreatorAccount;

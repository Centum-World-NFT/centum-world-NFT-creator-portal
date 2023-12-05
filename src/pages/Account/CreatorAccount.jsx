import React, { useEffect } from "react";
import {
  Aboutme,
  AccountHeader,
  CardContantDiv,
  FormDiv,
  FormField,
  MainDivConatainer,
  ProfileAndAboutme,
  ProfileDetails,
  ProfileHeading,
  ProfilePic,
  ProfilePicCard,
  SubmitButton,
  Wrapper,
} from "./CreatorAccountStyle";
import image from "../../utils/cardimages/image.jpg";
import { Button, TextField, Typography } from "@mui/material";
import { EditButton, SaveAIcon, UploadIcon } from "../../utils/icons";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { accountDetails } from "../../redux/slices/accountSlice";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreatorAccount = () => {
  const accountState = useSelector((state) => state.account)
  const value = {
    creatorId: "655c812ca3633c45cec15e77",
  };

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(accountDetails(value))
  },[])

  const firstName = accountState.data?.data?.firstName || '';

  return (
    <Wrapper>
      <AccountHeader>Account</AccountHeader>
      <MainDivConatainer>
        <ProfilePicCard>
          <CardContantDiv>
            <ProfilePic>
              <img
                src={image}
                width={50}
                height={50}
                alt="profile pic"
                style={{ borderRadius: "50%" }}
              />
            </ProfilePic>

            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Raju Balmuchu
            </Typography>

            <Button
              component="label"
              variant="contained"
              startIcon={<UploadIcon />}
            >
              Upload picture
              <VisuallyHiddenInput type="file" />
            </Button>
          </CardContantDiv>
        </ProfilePicCard>

        <ProfileAndAboutme>
          <ProfileDetails>
            <ProfileHeading>
              <Typography style={{ fontSize: "24px", fontWeight: "600" }}>
                Profile
              </Typography>
              <Typography>This frofile can be edited</Typography>
            </ProfileHeading>
            <FormDiv>
              <FormField>
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-basic"
                  placeholder="First name"
                  variant="outlined"
                  value={firstName}
                />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-basic"
                  placeholder="Last name"
                  variant="outlined"
                />
              </FormField>
              <FormField>
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-basic"
                  placeholder="Email"
                  variant="outlined"
                />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-basic"
                  placeholder="Phone no"
                  variant="outlined"
                />
              </FormField>
              <SubmitButton>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<EditButton />}
                >
                  Edit details
                </Button>
              </SubmitButton>
            </FormDiv>
          </ProfileDetails>
          <Aboutme>
            <ProfileHeading>
              <Typography style={{ fontSize: "24px", fontWeight: "600" }}>
                About me
              </Typography>

              <TextField
                id="outlined-textarea"
                placeholder="Enter about here"
                multiline
                sx={{ m: 1, width: '50ch' }}
              />
              <SubmitButton>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<SaveAIcon />}
                >
                  Save me
                </Button>
              </SubmitButton>
            </ProfileHeading>
          </Aboutme>
        </ProfileAndAboutme>
      </MainDivConatainer>
    </Wrapper>
  );
};

export default CreatorAccount;

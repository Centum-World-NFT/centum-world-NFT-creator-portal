import React, { useEffect, useRef, useState } from "react";
import {
  AccountContainer,
  AccountHeader,
  CardDiv,
  ContentDiv,
  ProfileDiv,
  TextFieldDiv,
  Wrapper,
} from "./CreatorAccountStyle";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/joy";
import { EditIcon, EmailIcon, PhoneIcon, UserIcon } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { profilepicUpload } from "../../redux/slices/profilepicSlice";
import { Divider, InputAdornment, TextField } from "@mui/material";
import { fetchProfileDetails } from "../../redux/slices/profileDetailSlice";
import { updateProfile } from "../../redux/slices/updateprofile";

const CreatorAccount = () => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [profile_pic, setProfilePic] = useState(null);
  const [spin, setSpin] = useState(false);
  const [formSpin, setFormSpin] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    surName: "",
    email: "",
    phone: "",
  });

  const fileInputRef = useRef(null);
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const callApiToProfileDetails = async () => {
      try {
        let formData = {
          creatorId: localStorage.getItem("userID"),
        };
        const response = await dispatch(fetchProfileDetails(formData));
        console.log(response, "48");
        if (response.payload.data.profile_pic !== undefined) {
          setImageSelected(true);
          setPreviewImage(response.payload.data.profile_pic);
          setProfileData({
            firstName: response.payload.data.firstName,
            surName: response.payload.data.surName,
            email: response.payload.data.email,
            phone: response.payload.data.phone,
          });
        }
      } catch (error) {}
    };

    callApiToProfileDetails();
  }, [dispatch]);

  const data = useSelector((state) => state.profiledetails);
  // console.log(data);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePic(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setImageSelected(true);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadprofilepic = async () => {
    console.log(profile_pic);
    setSpin(true);
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("userID"));
    formData.append("profile_pic", profile_pic);
    const response = await dispatch(profilepicUpload(formData));
    if (response.payload) {
      setSpin(false);
    } else {
      setSpin(false);
    }
  };

  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitData = async (e) => {
    try {
      e.preventDefault();
      setFormSpin(true);
      let data = {
        firstName: profileData.firstName,
        surName: profileData.surName,
        email: profileData.email,
        phone: profileData.phone,
        creatorId: localStorage.getItem("userID"),
      };
      const response = await dispatch(updateProfile(data));
      if(response.payload){
        setFormSpin(false);
      }
      
    } catch (error) {
      setFormSpin(false);
    }
  };

  return (
    <>
      <Wrapper>
        <AccountHeader>Profile details</AccountHeader>
        <AccountContainer>
          <ProfileDiv>
            <Card
              sx={{
                width: 300,
                maxWidth: "100%",
                boxShadow: "lg",
                "@media (max-width: 767px)": {
                  width: "85%",
                  marginR: "10px",
                },
              }}
            >
              <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
                <div>
                  {imageSelected ? (
                    <>
                      <div className="flex items-center gap-4">
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          onClick={handleAvatarClick}
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Avatar
                        sx={{ "--Avatar-size": "4rem" }}
                        onClick={handleAvatarClick}
                        style={{ cursor: "pointer" }}
                      />
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>
                <Chip
                  size="sm"
                  variant="soft"
                  color="primary"
                  sx={{
                    mt: -1,
                    mb: 1,
                    border: "3px solid",
                    borderColor: "background.surface",
                  }}
                >
                  Creator
                </Chip>
                <Typography level="title-lg">
                  {profileData.firstName} &nbsp;{profileData.surName}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  Hello, I am creator.
                </Typography>
              </CardContent>
              <CardOverflow sx={{ bgcolor: "background.level1" }}>
                <CardActions buttonFlex="1">
                  <ButtonGroup
                    variant="outlined"
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <Button>Edit</Button>
                    <Button onClick={uploadprofilepic}>
                      {spin ? (
                        <>
                          <CircularProgress /> Uploading...
                        </>
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </CardOverflow>
            </Card>
          </ProfileDiv>
          <ContentDiv>
            <CardDiv>
              <Typography level="title-lg">
                <EditIcon />
                &nbsp;Edit your profile
              </Typography>
              <Divider />
              <TextFieldDiv>
                <TextField
                  name="firstName"
                  value={profileData.firstName}
                  placeholder="First name"
                  onChange={handleChangeData}
                />
                <TextField
                  name="lname"
                  value={profileData.surName}
                  placeholder="Last name"
                  onChange={handleChangeData}
                />
              </TextFieldDiv>
              <TextFieldDiv>
                <TextField
                  name="phone"
                  value={profileData.phone}
                  placeholder="Enter your phone no."
                  sx={{ width: "100%" }}
                  onChange={handleChangeData}
                />
              </TextFieldDiv>
              <TextFieldDiv>
                <TextField
                  name="email"
                  value={profileData.email}
                  placeholder="Enter valid email id"
                  sx={{ width: "100%" }}
                  onChange={handleChangeData}
                />
              </TextFieldDiv>
              <Button
                sx={{ width: "100%", marginTop: "8px" }}
                onClick={submitData}
              >
                {formSpin ? (
                  <>
                    <CircularProgress />&nbsp; Uploading...
                  </>
                ) : (
                  "Upload"
                )}
              </Button>
            </CardDiv>
          </ContentDiv>
        </AccountContainer>
      </Wrapper>
    </>
  );
};

export default CreatorAccount;

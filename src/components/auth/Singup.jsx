import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  DialogTitle,
  DialogWrapper,
  InputFields,
  PasswordField,
} from "./SingupStyle";
import { signUp, signIn } from "@/redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast"
import '../../App.css'


const Signup = ({ open, handleClose }) => {
  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    surName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [fieldValuess, setFieldValuess] = useState({
    emailorPhone: "",
    password: "",
  });

  const [isSignInMode, setIsSignInMode] = useState(false);

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.data) {
      navigate("/creatorDashboard/overview");
    } else {
      navigate("/");
    }
    if (localStorage.getItem("access_token")) {
      navigate("/creatorDashboard/overview");
    }
  }, [authState.data]);

  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFieldChanges = (e) => {
    setFieldValuess(
      (prev) => (
        {
          ...prev,
          [e.target.name]: e.target.value,
        }
      )
    );
  };

  const handleSubmit = async() => {
    if (isSignInMode) {
     const response = await dispatch(signUp(fieldValues));
      if (response.payload.status){
        toast.success(response.payload.message)
      }
    } else {
     const response = await dispatch(signIn(fieldValuess));

     if(response.payload.status){

      toast.success(response.payload.message)
     }
    }
  };

  const handleToggleMode = () => {
    setIsSignInMode((prevMode) => !prevMode);
  };

  const renderFormFields = () => {
    if (isSignInMode) {
      return (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <InputFields
              autoFocus
              id="name"
              placeholder="First name"
              type="text"
              fullWidth
              variant="outlined"
              name="firstName"
              onChange={handleFieldChange}
            />
            <InputFields
              autoFocus
              id="name"
              placeholder="Surname"
              type="text"
              fullWidth
              variant="outlined"
              name="surName"
              onChange={handleFieldChange}
            />
          </Box>
          <InputFields
            autoFocus
            id="name"
            margin="dense"
            placeholder="(+91) XXX9090XXX "
            type="phone"
            variant="outlined"
            fullWidth
            name="phone"
            onChange={handleFieldChange}
          />
          <InputFields
            autoFocus
            margin="dense"
            id="name"
            placeholder="example@gmail.com"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            onChange={handleFieldChange}
          />
          <PasswordField
            autoFocus
            margin="dense"
            id="name"
            placeholder="*******"
            type="password"
            fullWidth
            name="password"
            variant="outlined"
            onChange={handleFieldChange}
          ></PasswordField>
        </>
      );
    } else {
      return (
        <>
          <InputFields
            autoFocus
            margin="dense"
            id="name"
            placeholder="example@gmail.com"
            type="text"
            fullWidth
            variant="outlined"
            name="emailorPhone"
            onChange={handleFieldChanges}
          />
          <PasswordField
            autoFocus
            margin="dense"
            id="name"
            placeholder="*******"
            type="password"
            fullWidth
            name="password"
            variant="outlined"
            onChange={handleFieldChanges}
          />
        </>
      );
    }
  };

  return (
    <>
      {open && (
        <DialogWrapper open={open} onClose={handleClose}>
          <DialogTitle variant="h3">
            {isSignInMode ? "Sign Up" : "Sign In"}
          </DialogTitle>
          <Typography sx={{ width: "90%" }}>
            Unlock Your Visual Story:{" "}
            {isSignInMode
              ? "Sign up and transform your ideas into vibrant reality!" 
              :"Sign in to access your account"}
          </Typography>
          <DialogContent>{renderFormFields()}</DialogContent>
          <DialogActions>
            <Typography>
              {isSignInMode
                ? "Don't have an account ?"
                : "Already have an account ?"}
            </Typography>
            <Button onClick={handleToggleMode} variant="outlined">
              {isSignInMode ? "Sign In" : "Sign Up"}
            </Button>
            <Button onClick={handleSubmit} variant="outlined">
              {isSignInMode ? "Sign Up" : "Sign In"}
            </Button>
          </DialogActions>
        </DialogWrapper>
      )}
    </>
  );
};

export default Signup;



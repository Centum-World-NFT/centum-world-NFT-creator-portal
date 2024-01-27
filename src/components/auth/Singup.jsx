import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  InputAdornment,
  Typography,
  TextField,
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
import "../../App.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { EyeInvisibleIcon } from "../../utils/icons";
import { EyeFillIcon } from "../../utils/icons";

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
  const [isPasswordVisisble, setIsPasswordVisible] = useState(false);

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
    setFieldValuess((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (isSignInMode) {
      const response = await dispatch(signUp(fieldValues));
      if (response.payload.status) {
        toast.success(response.payload.message);
      }
    } else {
      const response = await dispatch(signIn(fieldValuess));

      if (response.payload.status) {
        toast.success(response.payload.message);
      }
    }
  };

  const handleToggleMode = () => {
    setIsSignInMode((prevMode) => !prevMode);
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
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
            type={isPasswordVisisble ? "text" : "password"}
            fullWidth
            name="password"
            variant="outlined"
            onChange={handleFieldChange}
          />

          <IconButton
            style={{
              position: "absolute",
              right: "2.5rem",
              top: "354px", 
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisisble ? <Visibility /> : <VisibilityOff />}
          </IconButton>
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
            type={isPasswordVisisble ? "text" : "password"}
            fullWidth
            name="password"
            variant="outlined"
            onChange={handleFieldChanges}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
          />

          <IconButton
            style={{
              position: "absolute",
              right: "2.5rem", // Adjust as needed
              top: "205px", // Adjust as needed
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisisble ? <Visibility /> : <VisibilityOff />}
          </IconButton>
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
              : "Sign in to access your account"}
          </Typography>
          <DialogContent>{renderFormFields()}</DialogContent>
          <DialogActions>
            <Typography sx={{ marginRight: "15px" }}>
              {isSignInMode
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={handleToggleMode}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {isSignInMode ? "Sign In" : "Sign Up"}
              </span>
            </Typography>
            {/* <Button onClick={handleToggleMode} variant="outlined">
              {isSignInMode ? "Sign In" : "Sign Up"} */}
            {/* </Button> */}

            <Button
              style={{ marginLeft: "15px" }}
              onClick={handleSubmit}
              variant="outlined"
            >
              {isSignInMode ? "Sign Up" : "Sign In"}
            </Button>
          </DialogActions>
        </DialogWrapper>
      )}
    </>
  );
};

export default Signup;

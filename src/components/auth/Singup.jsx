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
import { signUp, signIn } from "@/redux/slices/auth"; // Assuming you have a signIn action
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

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
  }, [authState.data, navigate]);

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
        console.log(prev),
        {
          ...prev,
          [e.target.name]: e.target.value,
        }
      )
    );
  };

  const handleSubmit = () => {
    if (isSignInMode) {
      dispatch(signIn(fieldValuess));
    } else {
      dispatch(signUp(fieldValues));
    }
  };

  const handleToggleMode = () => {
    setIsSignInMode((prevMode) => !prevMode);
  };

  const renderFormFields = () => {
    if (isSignInMode) {
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
    } else {
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
    }
  };

  return (
    <>
      {open && (
        <DialogWrapper open={open} onClose={handleClose}>
          <DialogTitle variant="h3">
            {isSignInMode ? "Sign In" : "Sign Up"}
          </DialogTitle>
          <Typography sx={{ width: "90%" }}>
            Unlock Your Visual Story:{" "}
            {isSignInMode
              ? "Sign in to access your account"
              : "Sign up and transform your ideas into vibrant reality!"}
          </Typography>
          <DialogContent>{renderFormFields()}</DialogContent>
          <DialogActions>
            <Typography>
              {isSignInMode
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </Typography>
            <Button onClick={handleToggleMode} variant="outlined">
              {isSignInMode ? "Sign Up" : "Sign In"}
            </Button>
            <Button onClick={handleSubmit} variant="outlined">
              {isSignInMode ? "Sign In" : "Sign Up"}
            </Button>
          </DialogActions>
        </DialogWrapper>
      )}
    </>
  );
};

export default Signup;

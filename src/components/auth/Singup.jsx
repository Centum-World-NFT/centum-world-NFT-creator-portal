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
import { signUp } from "@/redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Singup = ({ open, handleClose }) => {
  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    surName: "",
    email: "",
    password: "",
    phone: "",
  });

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.data) {
      navigate("/creatorDashboard/overview");
    } else {
      navigate("/");
    }
  }, [authState.data]);

  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    dispatch(signUp(fieldValues));
  };

  return (
    <>
      {open && (
        <DialogWrapper open={open} onClose={handleClose}>
          <DialogTitle variant="h3">Sign Up</DialogTitle>
          <Typography sx={{ width: "90%" }}>
            Unlock Your Visual Story: Sign up for Creator and Transform Your
            Ideas into Vibrant Reality!
          </Typography>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <Typography>Already Have an account ? Sign in</Typography>
            <Button onClick={handleSubmit} variant="outlined">
              Sign Up
            </Button>
          </DialogActions>
        </DialogWrapper>
      )}
    </>
  );
};

export default Singup;

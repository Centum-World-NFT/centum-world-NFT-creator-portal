import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  DialogTitle,
  DialogWrapper,
  InputFields,
  PasswordField,
} from "./SingupStyle";
import { HideEyeButton, ShowEyeButton } from "../../utils/icons";

const Singup = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              />
              <InputFields
                autoFocus
                id="name"
                placeholder="Surname"
                type="text"
                fullWidth
                variant="outlined"
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
            />
            <InputFields
              autoFocus
              margin="dense"
              id="name"
              placeholder="example@gmail.com"
              type="email"
              fullWidth
              variant="outlined"
            />
            <PasswordField
              autoFocus
              margin="dense"
              id="name"
              placeholder="*******"
              type="password"
              fullWidth
              variant="outlined"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <ShowEyeButton /> : <HideEyeButton />}
                  </IconButton>
                </InputAdornment>
              }
            ></PasswordField>
          </DialogContent>
          <DialogActions>
            <Typography>Already Have an account ? Sign in</Typography>
            <Button onClick={handleClose} variant="outlined">
              Sign Up
            </Button>
          </DialogActions>
        </DialogWrapper>
      )}
    </>
  );
};

export default Singup;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { SignUpContainer } from "./SingupStyle";
import { Form } from "./SingupStyle";
import { Input } from "./SingupStyle";

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        LogIn
      </Button>
      <SignUpContainer
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Form>
          <DialogTitle id="responsive-dialog-title">
            {"Sign in to Centumo NFT’S"}
          </DialogTitle>
          <DialogContent>
            {/* <Typography>
            Create your account easy with less information
            </Typography> */}
            <DialogContentText>
              <Input id="standard-basic" label="Name" variant="standard" />
              <Input id="standard-basic" label="Email" variant="standard" />
              <Input id="standard-basic" label="Phone" variant="standard" />
              <Input id="standard-basic" label="Password" variant="standard" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button onClick={handleClose} autoFocus>
              LogIn
            </Button>
            <Button onClick={handleClose} autoFocus>
              Don't have an account ? SignUp
            </Button>
          </DialogActions>
        </Form>
      </SignUpContainer>
    </React.Fragment>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import axios from "axios";
import { CssTextField } from "./SingupStyle";

const theme = createTheme();

export default function SignUp() {
  const mediaLessthanmd = useMediaQuery(theme.breakpoints.down("md"));
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity(
        "password is not matching... Please write carefully"
      );
    } else {
      const user = {
        username: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        style={{
          display: !mediaLessthanmd ? "flex" : "",
          paddingLeft: !mediaLessthanmd ? "10%" : "0%",
          paddingTop: !mediaLessthanmd ? "4%" : "0%",
          textShadow: "3px 3px blue",
          cursor: "pointer",
        }}
      >
        Socionik
      </Typography>

      <ThemeProvider theme={theme}>
        <Container component="main">
          <form style={{ marginTop: "5vh" }} onSubmit={handleSubmit}>
            <div className="registrationForm" style={{ display: "flex" }}>
              {!mediaLessthanmd && (
                <Grid container style={{ flex: "6" }}>
                  <img
                    src="/signin.png"
                    alt=""
                    style={{
                      height: "90%",
                      width: "90%",
                      backgroundSize: "cover",
                      opacity: "1",
                    }}
                  />
                </Grid>
              )}
              <div className="registrationFormContainer" style={{ flex: "6" }}>
                <Typography component="h1" variant="h5" sx={{ mb: "20" }}>
                  SIGN UP
                </Typography>

                <Grid
                  container
                  spacing={2}
                  style={{
                    display: mediaLessthanmd && "flex",
                    alignItems: mediaLessthanmd && "center",
                    justifyContent: mediaLessthanmd && "center",
                  }}
                >
                  <Grid item md={12} xs={8}>
                    <CssTextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      required
                      autoFocus
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      type="text"
                    />
                  </Grid>

                  <Grid item md={12} xs={8}>
                    <CssTextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      autoFocus
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      type="email"
                    />
                  </Grid>

                  <Grid item md={12} xs={8}>
                    <CssTextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      autoFocus
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      type="password"
                    />
                  </Grid>
                  <Grid item md={12} xs={8}>
                    <CssTextField
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                      required
                      autoFocus
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      type="password"
                    />
                  </Grid>
                  <Grid item md={12} xs={8}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>

                  <Grid item md={12} xs={8}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </form>
        </Container>
      </ThemeProvider>
    </>
  );
}

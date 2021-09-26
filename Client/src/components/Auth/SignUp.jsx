import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import Icon from "./Icon";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./../../store/auth.js";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../../store/auth.js";
import { loginUser } from "../../store/auth.js";
// import { userAdded } from "../../store/users.js";
const theme = createTheme();

const SignUp = () => {
  const [isSignUp, setisSignUp] = React.useState(false);

  const [formData, setFormData] = useState({});
  // const { payload } = useSelector(userAdded);
  // const res = payload;
  const switchMode = () => {
    setisSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(auth({ result, token }));
      history.push("/dashboard/all-courses");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful.Try again later");
  };

  return (
    <Fade in>
      <div
        style={{
          margin: "0 100px 0 100px",
          display: "flex",
        }}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (isSignUp) {
              if (!values.firstName) {
                errors.firstName = "Required";
              }
              if (!values.lastName) {
                errors.lastName = "Required";
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
              }
              if (values.phone !== 0) {
                if (!/^[0-9\b]+$/i.test(values.phone) || values.phone.length !== 10) {
                  errors.phone = "Enter a Valid Phone Number";
                }
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              }
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);

              if (!isSignUp) {
                dispatch(
                  loginUser(
                    {
                      email: values.email,
                      password: values.password,
                    },
                    history
                  )
                );
              }
              if (isSignUp) {
                dispatch(
                  addUser(
                    {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      phone: values.phone,
                      address: values.address,
                      password: values.password,
                    },
                    history
                  )
                );
              }

              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}>
          {({ submitForm }) => (
            <ThemeProvider theme={theme}>
              <Container
                component="main"
                minWidth="xs"
                maxWidth="md"
                style={{
                  background: "#EBEBEB",
                  borderRadius: "10px",
                  padding: "20px",
                  // width: "700px",
                }}>
                <CssBaseline />
                <Grow in>
                  <Form>
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}>
                        <Typography component="h1" variant="h4">
                          {isSignUp ? "Sign Up" : "Log In"}
                        </Typography>
                        <Avatar fontSize="large" />
                      </Box>
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                        }}>
                        {isSignUp && (
                          <Box
                            sx={{
                              // width: "100%",
                              display: "flex",
                              // justifyContent: "center",
                              flexDirection: "row",
                            }}>
                            <Field
                              label="First Name"
                              component={TextField}
                              margin="normal"
                              required
                              fullWidth
                              id="firstName"
                              name="firstName"
                            />
                            <Field
                              label="Last Name"
                              component={TextField}
                              margin="normal"
                              required
                              fullWidth
                              id="lastName"
                              name="lastName"
                            />
                          </Box>
                        )}

                        <Field
                          label="Email Address"
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          name="email"
                        />
                        {isSignUp && (
                          <Box
                            sx={{
                              // width: "100%",
                              display: "flex",
                              // justifyContent: "center",
                              flexDirection: "row",
                            }}>
                            <Field
                              label="Address"
                              component={TextField}
                              margin="normal"
                              fullWidth
                              id="address"
                              name="address"
                            />
                            <Field
                              label="Phone Number"
                              component={TextField}
                              margin="normal"
                              fullWidth
                              id="phone"
                              name="phone"
                            />
                          </Box>
                        )}

                        <Field
                          label="Password"
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                        {isSignUp && (
                          <Field
                            label="Confirm Password"
                            component={TextField}
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            type="Password"
                            id="confirmPassword"
                          />
                        )}

                        <Button
                          style={{
                            fontWeight: "700",
                            background: "#00498B",
                            color: "white",
                            margin: "20px 0 10px 0",
                          }}
                          onClick={submitForm}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}>
                          {isSignUp ? "Sign Up" : "Log In"}
                        </Button>
                        <GoogleLogin
                          clientId="9006130706-74le5v6qe3g19pmbg4ts5m1ps68pubt3.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <Button
                              style={{
                                fontWeight: "700",
                                background: "white",
                                color: "black",
                                // padding: "5px 0 0 0",
                                height: "40px",
                              }}
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              fullWidth
                              startIcon={<Icon />}
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}>
                              Continue with Google
                            </Button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleFailure}
                          cookiePolicy="single_host_origin"
                        />
                        <Grid container>
                          <Grid item>
                            <Button
                              style={{
                                // background: "#00498B",
                                color: "black",
                                margin: "20px 0 10px 0",
                              }}
                              variant="text"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={switchMode}>
                              {isSignUp ? "Already have an account ?" : "Don't have an account ?"}
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Form>
                </Grow>
              </Container>
            </ThemeProvider>
          )}
        </Formik>
      </div>
    </Fade>
  );
};

export default SignUp;

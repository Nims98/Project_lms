import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import SaveIcon from "@material-ui/icons/Save";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { useState } from "react";
import FileInputComponent from "react-file-input-previews-base64";
import InputAdornment from "@material-ui/core/InputAdornment";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Send } from "@material-ui/icons";

import { updateUser } from "../../store/auth.js";

const theme = createTheme();

const Profile = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const changePassword = () => {
    setIsChangePassword((previsChangePassword) => !previsChangePassword);
  };
  const ShowPassword = () => {
    setShowPassword((prevshowPassword) => !prevshowPassword);
  };

  const profile = JSON.parse(localStorage.getItem("profile")).result;
  const currentUserId = profile._id;
  // console.log(profile);
  return (
    <Fade in>
      <div
        style={{
          display: "flex",
          background: "",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
        }}>
        <Formik
          initialValues={{
            firstName: profile.firstName,
            lastName: profile.lastName,
            imageUrl: profile.imageUrl,
            email: profile.email,
            phone: profile.phone,
            address: profile.address,
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.firstName) {
              errors.firstName = "Required";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            if (values.phone) {
              if (!/^[0-9\b]+$/i.test(values.phone) || values.phone.length !== 10) {
                errors.phone = "Enter a Valid Phone Number";
              }
            }
            if (values.password) {
              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
              }
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);

              if (isChangePassword) {
                dispatch(
                  updateUser(
                    {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      imageUrl: values.imageUrl,
                      email: values.email,
                      phone: values.phone,
                      address: values.address,
                      password: values.password,
                      confirmPassword: values.confirmPassword,
                    },
                    currentUserId
                  )
                );
              } else {
                dispatch(
                  updateUser(
                    {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      imageUrl: values.imageUrl,
                      email: values.email,
                      phone: values.phone,
                      address: values.address,
                    },
                    currentUserId
                  )
                );
              }
              alert("Profile has been updated.Changes will be applied next time you log in");
            }, 500);
          }}>
          {({ submitForm, setFieldValue }) => (
            <ThemeProvider theme={theme}>
              <Grow in>
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
                          Edit Your Profile
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
                        <Box
                          sx={{
                            // width: "100%",
                            display: "flex",
                            // justifyContent: "center",
                            flexDirection: "row",
                          }}>
                          <Box style={{ width: "25%", marginTop: "22px" }}>
                            <Field
                              id="imageUrl"
                              name="imageUrl"
                              type="file"
                              labelText="Change Profile Photo"
                              accept="image/*"
                              buttonComponent={
                                <Button
                                  style={{ background: "white", marginTop: "10px" }}
                                  variant="contained"
                                  startIcon={<CameraAltIcon />}
                                  type="button">
                                  Upload
                                </Button>
                              }
                              imagePreview={true}
                              labelStyle={{ fontSize: 16, color: "rgba(0, 0, 0, 0.55)", display: "block" }}
                              imageStyle={{
                                // borderRadius: "100px",
                                // width: "10vmin",
                                height: "10vmin",
                                marginTop: 5,
                                marginBottom: 5,
                                marginRight: 5,
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px, rgba(0, 0, 0, 0.2) 0px 0px 10px",
                              }}
                              component={FileInputComponent}
                              multiple={false}
                              callbackFunction={(file_arr) => setFieldValue("imageUrl", file_arr.base64)}
                            />
                          </Box>
                          <Box style={{ width: "75%" }}>
                            <Field
                              component={TextField}
                              margin="normal"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              name="firstName"
                            />
                            <Field
                              component={TextField}
                              margin="normal"
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                            />
                          </Box>
                        </Box>

                        <Field
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                          }}>
                          <Field
                            component={TextField}
                            margin="normal"
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                          />
                          <Field
                            component={TextField}
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "300px",
                          }}>
                          <Button
                            size="small"
                            variant="contained"
                            style={{ marginTop: "7px" }}
                            onClick={changePassword}>
                            Change Password
                          </Button>
                        </Box>
                        {isChangePassword && (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: "300px",
                            }}>
                            <Field
                              component={TextField}
                              margin="normal"
                              required
                              // fullWidth
                              name="password"
                              label="Current or new password"
                              type={showPassword ? "text" : "password"}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="start">
                                    {showPassword ? (
                                      <VisibilityOff fontSize="small" onClick={ShowPassword} />
                                    ) : (
                                      <Visibility fontSize="small" onClick={ShowPassword} />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                              id="password"
                              autoComplete="current-password"
                            />
                            <Field
                              component={TextField}
                              // margin="normal"
                              required
                              // fullWidth
                              name="confirmPassword"
                              label="Confirm Password"
                              type={showPassword ? "text" : "password"}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="start">
                                    {showPassword ? (
                                      <VisibilityOff fontSize="small" onClick={ShowPassword} />
                                    ) : (
                                      <Visibility fontSize="small" onClick={ShowPassword} />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                              id="confirmPassword"
                              autoComplete="current-password"
                            />
                          </Box>
                        )}

                        <Button
                          style={{
                            fontWeight: "500",
                            fontSize: 15,
                            background: "#1444FC",
                            color: "white",
                            margin: "20px 0 10px 0",
                            textTransform: "none",
                          }}
                          onClick={submitForm}
                          variant="contained"
                          startIcon={<SaveIcon />}
                          sx={{ mt: 3, mb: 2 }}>
                          Save Changes
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                </Container>
              </Grow>
            </ThemeProvider>
          )}
        </Formik>
      </div>
    </Fade>
  );
};

export default Profile;

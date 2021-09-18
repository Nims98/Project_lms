import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

const theme = createTheme();

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
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
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          }
          if (!/^[0-9\b]+$/i.test(values.phone)) {
            errors.phone = "Enter a Valid Phone Number";
          } else if (values.phone.length !== 10) {
            errors.phone = "Enter a Valid Phone Number";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
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
                width: "700px",
              }}
            >
              <CssBaseline />
              <Form>
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography component="h1" variant="h4">
                      Sign Up
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
                    }}
                  >
                    <Box
                      sx={{
                        // width: "100%",
                        display: "flex",
                        // justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
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
                        // width: "100%",
                        display: "flex",
                        // justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
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
                    <Field
                      component={TextField}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Field
                      component={TextField}
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="Password"
                      id="confirmPassword"
                    />

                    <Button
                      style={{
                        background: "#00498B",
                        color: "white",
                        margin: "20px 0 10px 0",
                      }}
                      onClick={submitForm}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Go to Log In Page"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Form>
            </Container>
          </ThemeProvider>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

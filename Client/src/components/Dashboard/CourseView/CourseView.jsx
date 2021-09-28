import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Send } from "@material-ui/icons";
import "./../../../App.css";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addReview } from "../../../store/courses";
import View from "./view";

const theme = createTheme();
const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  return (
    <Fade in>
      <div style={{ width: "100vw", marginTop: "80px", background: "rgba(0,0,0,0.08)" }}>
        <div className="root">
          <div className="main">
            <Grid container spacing={0} direction="row">
              <View info="Reading Material" />
              <View info="Lectures" />
              <View info="Assignments" />
            </Grid>
          </div>
          <div className="side">
            <Container style={{ width: "90%" }}>
              <Formik
                initialValues={{
                  feedback: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    dispatch(addReview({ review: values.feedback }, id));
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
                        borderRadius: "7px",
                        padding: "20px",
                      }}>
                      <CssBaseline />

                      <Grow in>
                        <Form>
                          <Typography component="h1" variant="h4">
                            Feedback
                          </Typography>
                          <Field
                            component={TextField}
                            margin="normal"
                            fullWidth
                            multiline
                            required
                            variant="outlined"
                            rows={16}
                            id="feedback"
                            label="Write a feedback..."
                            name="feedback"
                          />
                          <Button
                            onClick={submitForm}
                            variant="contained"
                            color="primary"
                            endIcon={<Send />}
                            style={{ background: "#00498B" }}>
                            Send
                          </Button>
                        </Form>
                      </Grow>
                    </Container>
                  </ThemeProvider>
                )}
              </Formik>
            </Container>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Profile;

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
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { coursesReceived } from "./../../../store/courses.js";

import { addReview } from "../../../store/courses";
import View from "./view";
import Allcourses from "./../AllCourses";

const theme = createTheme();
const CourseView = () => {
  const dispatch = useDispatch();
  const { payload } = useSelector(coursesReceived);
  const allCourses = payload.courses.list;

  const { id } = useParams();
  const course = allCourses.filter((val) => val._id === id);

  console.log(id);
  console.log(course[0]);
  return !course[0] ? (
    <div
      style={{
        padding: "15px",
        width: "100vw",
        height: "80vh",
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CircularProgress size={50} />
    </div>
  ) : (
    <Fade in>
      <div style={{ width: "100vw", marginTop: "80px", background: "rgba(0,0,0,0.08)" }}>
        <div className="root">
          <div className="main">
            <Grid container spacing={0} direction="row">
              <Typography variant="h3" style={{ margin: "20px 0 0 40px" }}>
                {course[0].courseName}
              </Typography>
              <View info="Reading Material" />
              <View info="Lectures" />
              <View info="Assignments" />
            </Grid>
          </div>
          <div className="side">
            <Container style={{ width: "90%", Top: 100, height: 800 }}>
              <Formik
                initialValues={{
                  feedback: "",
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    dispatch(addReview({ review: values.feedback }, id));
                    alert("Feedback sent");
                  }, 500);
                  resetForm();
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
                            style={{ background: "#1444FC" }}>
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

export default CourseView;

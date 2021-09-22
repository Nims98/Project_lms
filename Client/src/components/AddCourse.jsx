import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import BookIcon from "@material-ui/icons/Book";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/courses.js";

const theme = createTheme();

const degrees = [
  {
    value: "Bsc.",
    label: "Bsc.",
  },
  {
    value: "Phd",
    label: "Phd",
  },
  {
    value: "Msc",
    label: "Msc",
  },
];
const AddCourse = () => {
  const dispatch = useDispatch();

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
            _id: "",
            courseName: "",
            courseCode: "",
            info: "",
            instructor: "",
            degree: "",
            passcode: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.courseName) {
              errors.courseName = "Required";
            }
            if (!values.courseCode) {
              errors.courseCode = "Required";
            }
            if (!values.instructor) {
              errors.instructor = "Required";
            }
            if (!values.passcode) {
              errors.passcode = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);

              dispatch(
                addCourse({
                  // _id: Date.now(),
                  courseName: values.courseName,
                  courseCode: values.courseCode,
                  info: values.info,
                  instructor: {
                    qualifications: values.degree,
                    name: values.instructor,
                  },
                  learningOutcomes: values.learningOutcomes,
                  passcode: values.passcode,
                })
              );
              // useEffect(()=>{
              // },[])
              //   values.degree = event.target.value;
              // setcourseData(values);
              console.log(values.courseCode);
              alert(
                ` Course Name : ${values.courseName}
                  Course Code : ${values.courseCode}
                  Info : ${values.info}
                  Instructor Name : ${values.instructor}
                  Degree : ${values.degree}
                  Learning Outcomes: ${values.learningOutcomes}
                  Passcode: ${values.passcode}`
              );
            }, 100);
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
                  width: "700px",
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
                        Add New Course
                      </Typography>
                      <BookIcon fontSize="large" />
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
                        <Field
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="courseCode"
                          label="Course Code"
                          name="courseCode"
                        />
                        <Field
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="courseName"
                          label="Course Name"
                          name="courseName"
                        />
                      </Box>

                      <Box
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}>
                        <Field
                          component={TextField}
                          type="text"
                          name="degree"
                          label="Degree"
                          select
                          variant="standard"
                          helperText="Please select your degree"
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}>
                          {degrees.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                      </Box>

                      <Field
                        component={TextField}
                        margin="normal"
                        required
                        fullWidth
                        id="instructor"
                        label="Instructor Name"
                        name="instructor"
                      />
                      <Box
                        sx={{
                          // width: "100%",
                          display: "flex",
                          // justifyContent: "center",
                          flexDirection: "row",
                        }}></Box>
                      <Field
                        component={TextField}
                        margin="normal"
                        fullWidth
                        multiline
                        maxRows={4}
                        minRows={2}
                        variant="outlined"
                        id="info"
                        label="Course Information"
                        name="info"
                      />
                      <Field
                        component={TextField}
                        margin="normal"
                        required
                        fullWidth
                        name="passcode"
                        label="Passcode"
                        type="password"
                        id="passcode"
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
                        sx={{ mt: 3, mb: 2 }}>
                        Add Course
                      </Button>
                      <Grid container>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {/* {"Go to Log In Page"} */}
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
    </Fade>
  );
};

export default AddCourse;

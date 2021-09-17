import React, { useState } from "react";
import { Fade, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import EnrollPage from "./EnrollPage";
import data from "./data.json";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "gray",
    // justifyContent: "left",
    // height: "100%",
    height: "100vh",
    // marginTop: "80px",

    overflow: "hidden",
    overflowY: "scroll",
  },
});

const Allcourses = () => {
  const classes = useStyles();

  const [courses, setCourses] = useState(data);
  return (
    <Container className={classes.container}>
      <Fade in>
        <div style={{ marginTop: "80px", padding: "15px" }}>
          <Typography variant="h3" style={{ marginBottom: "20px" }}>
            All Courses
          </Typography>
          <Grid container spacing={5} justifyContent="flex-start">
            {courses.map((course) => {
              return (
                <Grid item sm={6} md={4} lg={3}>
                  <Link
                    to="/dashboard/all-courses/enroll-course"
                    style={{ textDecoration: "none" }}
                  >
                    <Course
                      courseName={course.courseName}
                      courseCode={course.courseCode}
                      info={course.info}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Fade>
    </Container>
  );
};
const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard/all-courses" component={Allcourses} />
        <Route
          path="/dashboard/all-courses/enroll-course"
          component={EnrollPage}
        />
      </Switch>
    </Router>
  );
};

export default Home;

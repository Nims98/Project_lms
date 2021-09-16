import React from "react";
import { Typography, Fade, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CourseView from "./CourseView";
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
const MyCourses = () => {
  const classes = useStyles();

  const [courses, setCourses] = useState([
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
    {
      courseName: "Web Application Development",
      courseCode: "EE5201",
      info: "In this course you will learn how to properly develop an web application",
    },
  ]);
  return (
    <Router>
      <Switch>
        <div style={{ width: "100vw" }}>
          <Container className={classes.container}>
            <Fade in>
              <div
                style={{
                  // background: "lightblue",

                  marginTop: "80px",

                  padding: "15px",
                  // overflow: "hidden",
                  // overflowY: "scroll",
                }}
              >
                <Typography variant="h3" style={{ marginBottom: "20px" }}>
                  My Courses
                </Typography>
                <Grid container spacing={3} justifyContent="flex-start">
                  {courses.map((course) => {
                    return (
                      <Grid item sm={6} md={4} lg={3}>
                        <Link
                          to="/dashboard/mycourses/courseview"
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
        </div>
      </Switch>
    </Router>
  );
};

export default MyCourses;

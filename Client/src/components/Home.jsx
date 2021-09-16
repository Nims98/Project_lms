import React, { useState } from "react";
import { Fade, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
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
const Home = () => {
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
    <Container className={classes.container}>
      <Fade in>
        <div style={{ marginTop: "80px", padding: "15px" }}>
          <Typography variant="h3" style={{ marginBottom: "20px" }}>
            Home
          </Typography>
          <Grid container spacing={5} justifyContent="flex-start">
            {courses.map((course) => {
              return (
                <Grid item sm={6} md={4} lg={3}>
                  <Course
                    courseName={course.courseName}
                    courseCode={course.courseCode}
                    info={course.info}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Fade>
    </Container>
  );
};

export default Home;

import React, { useEffect } from "react";
import { Typography, Fade, Grid, Container, TextField, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { coursesReceived } from "./../../store/courses.js";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "whitesmoke",
    height: "100vh",
    overflow: "hidden",
    overflowY: "scroll",
  },
});

const Courses = () => {
  const classes = useStyles();

  const resoure = () => {
    if (!localStorage.getItem("courses")) {
      const profile = JSON.parse(localStorage.getItem("profile")).result;
      const courseIds = profile.courses;
      return courseIds;
    }
    if (localStorage.getItem("courses")) {
      const courseIds = JSON.parse(localStorage.getItem("courses"));
      return courseIds;
    }
  };

  const courseIds = resoure();

  const { payload } = useSelector(coursesReceived);
  const allCourses = payload.courses.list;

  const myCourses = allCourses.filter((val) => courseIds.includes(val._id));
  console.log(myCourses);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(myCourses);
  }, [allCourses]);

  const [Search, setSearch] = useState("");

  return !allCourses.length ? (
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
      <Typography>Currenly you don't have any courses</Typography>;
    </div>
  ) : (
    <div style={{ display: "flex", background: "white" }}>
      <Container className={classes.container}>
        <Fade in>
          <div style={{ marginTop: "80px", padding: "15px", width: "100vw" }}>
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "20px 0 20px 15px",
                padding: 0,
              }}>
              <Typography variant="h4">My Courses</Typography>
              <TextField
                size="small"
                style={{ width: "40%" }}
                color="inherit"
                variant="outlined"
                label="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Container>
            <Grid container spacing={5} justifyContent="flex-start">
              {courses
                .filter((val) => {
                  if (Search === "") return val;
                  else if (val.courseName.toLowerCase().includes(Search.toLowerCase())) return val;
                })
                .map((course) => {
                  return (
                    <Grid item sm={6} md={4} lg={3} key={course._id}>
                      {/* <Link to="/dashboard/my-courses/course-view" style={{ textDecoration: "none" }}> */}
                      <Course course={course} enrolled={true} />
                      {/* </Link> */}
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Courses;

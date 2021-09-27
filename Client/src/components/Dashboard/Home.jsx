import React, { useEffect, useState } from "react";
import { Fade, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { Link } from "react-router-dom";
import { TextField, CircularProgress } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
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

const Allcourses = () => {
  const classes = useStyles();

  const { payload } = useSelector(coursesReceived);
  const allCourses = payload.courses.list;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses);
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
    </div>
  ) : (
    <div style={{ display: "flex", background: "white" }}>
      <Container className={classes.container}>
        <Fade in>
          <div style={{ padding: "15px", width: "100vw", marginTop: "80px" }}>
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "20px 0 20px 15px",
                padding: 0,
              }}>
              <Typography variant="h4">All Courses</Typography>
              <TextField
                style={{ width: "40%" }}
                variant="outlined"
                size="small"
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
                  console.log(Search);
                }}
              />
            </Container>
            <Grid container spacing={5} justifyContent="flex-start">
              {courses
                .filter((val) => {
                  if (Search === "") return val;
                  else if (val.courseName.toLocaleLowerCase().includes(Search.toLocaleLowerCase())) return val;
                })
                .map((course) => {
                  return (
                    <Grid item sm={6} md={4} lg={3}>
                      <Link to="/dashboard/all-courses/enroll-course" style={{ textDecoration: "none" }}>
                        <Course courseName={course.courseName} courseCode={course.courseCode} info={course.info} />
                      </Link>
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

export default Allcourses;

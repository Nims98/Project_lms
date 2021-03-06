import React, { useEffect, useState } from "react";
import { Fade, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { TextField, CircularProgress, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { coursesReceived } from "../../store/courses.js";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "whitesmoke",
    height: "100vh",
    overflow: "hidden",
    overflowY: "scroll",
    marginLeft: "320px",
  },
});

const Allcourses = () => {
  const classes = useStyles();
  const { payload } = useSelector(coursesReceived);
  const allCourses = payload.courses.list;
  const history = useHistory();
  const location = useLocation();
  const ADMIN = "myadmin@gmail.com";
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("profile")).result.email === ADMIN) setisAdmin(true);
  }, location);

  const createCourse = () => {
    history.push("/dashboard/all-courses/add-course");
  };
  const [Search, setSearch] = useState("");
  console.log(isAdmin);
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
    <div style={{ display: "flex", background: "white", justifyContent: "center" }}>
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
                    <Grid item sm={6} md={4} lg={3} key={course._id}>
                      <Course course={course} enrolled={false} />
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </Fade>
      </Container>
      {isAdmin && (
        <Button
          onClick={createCourse}
          variant="contained"
          style={{
            margin: "100px 20px 0 0",
            height: "40px",
            background: "#1444FC",
            textTransform: "none",
            fontSize: 16,
            color: "white",
          }}>
          Create Course
        </Button>
      )}
    </div>
  );
};

export default Allcourses;

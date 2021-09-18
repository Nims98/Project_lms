import React, { useState } from "react";
import { Fade, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import EnrollPage from "./EnrollPage";
import { TextField } from "@material-ui/core";
import data from "./data.json";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "whitesmoke",
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
  const [Search, setSearch] = useState("");

  return (
    <Container className={classes.container}>
      <Fade in>
        <div style={{ marginTop: "80px", padding: "15px", width: "100vw" }}>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // background: "white",
              margin: "20px 0 20px 15px",
              padding: 0,
            }}
          >
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
                else if (
                  val.courseName
                    .toLocaleLowerCase()
                    .includes(Search.toLocaleLowerCase())
                )
                  return val;
              })
              .map((course) => {
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
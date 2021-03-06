import { Tabs, Tab } from "@material-ui/core";
import { Button, Paper } from "@material-ui/core";
import { Container, Grid, Fade } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { coursesReceived } from "./../../store/courses.js";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse } from "../../store/auth.js";

const MyTabs = withStyles({
  indicator: {
    backgroundColor: "white",
    height: "3px",
    display: "flex",
    justifyContent: "center",
    "%>span": {
      maxWidth: 40,
    },
  },
})(Tabs);

const MyTab = withStyles({
  root: {
    fontSize: "14px",
    fontWeight: 600,
  },
})((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles({
  root: {
    // background: "gray",
    display: "flex",
    justifyContent: "flex-start",
  },
  root1: {
    // background: "lightblue",
    display: "flex",
    justifyContent: "center",
  },
  grids: {
    display: "flex",
    // background: "#B72E66",
    alignItems: "flex-end",
    marginTop: "5px",
  },
  tabPanel: {
    overflow: "hidden",
    overflowY: "scroll",
    height: "300px",
    background: "white",
    borderRadius: 10,
    paddingTop: "10px",
  },
});

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ul>
          <li>
            <Typography variant="body1">{review}</Typography>
          </li>
        </ul>
      ))}
    </div>
  );
};

const Description = ({ info }) => {
  return (
    <div>
      <Typography variant="body1">{info}</Typography>
    </div>
  );
};

const EnrollPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const profile = JSON.parse(localStorage.getItem("profile")).result;
  const currentUserId = profile._id;
  console.log(currentUserId);

  // const allCourses =;

  const { id } = useParams();

  const enroll = () => {
    dispatch(enrollCourse({ id }, currentUserId));
    alert("Successfully enrolled for the course.Course will be available under My Courses tab.");
  };

  const course = useSelector(coursesReceived).payload.courses.list.filter((val) => val._id === id);

  const [selectedTab, setselectedTab] = useState(0);

  const handleChange = (e, newIndex) => {
    setselectedTab(newIndex);
  };
  const classes = useStyles();
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("profile")).result.email === "myadmin@gmail.com") setisAdmin(true);
  }, location);

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
    <div>
      <div style={{ width: "100vw", marginTop: "80px" }}>
        <Fade in>
          <Container
            style={{
              background: " rgb(245,245,245)",
              height: "100vh",
              paddingTop: "30px",
            }}>
            <Container className={classes.root}>
              <Typography variant="h4">{course[0].courseName}</Typography>
            </Container>

            <Container className={classes.root1}>
              <Grid container spacing={7} className={classes.grids}>
                <Grid item md={3}>
                  <Paper variant="elevation" elevation={1} style={{ padding: "15px" }}>
                    <Typography variant="h4">{course[0].courseCode}</Typography>
                    <Typography variant="h5">{course[0].courseName}</Typography>
                    <Typography variant="body2">{course[0].info}</Typography>
                  </Paper>
                </Grid>
                <Grid item md={5}>
                  <Paper variant="elevation" elevation={1} style={{ padding: "15px" }}>
                    <Typography variant="h5">Instructor</Typography>
                    <Typography variant="h4">{course[0].instructor.name}</Typography>
                    <Typography variant="h5">{course[0].instructor.qualifications}</Typography>
                  </Paper>
                </Grid>
                <Grid item md={3}>
                  {!isAdmin && (
                    <Button
                      onClick={enroll}
                      variant="contained"
                      color="primary"
                      style={{
                        background: "#1444FC",
                      }}>
                      Enroll Now
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                background: "#1444FC",
                marginTop: "100px",
                borderRadius: "5px 5px 0 0",
                color: "white",
              }}>
              <MyTabs value={selectedTab} onChange={handleChange}>
                <MyTab label="Description" />
                <MyTab label="Reviews" />
              </MyTabs>
            </Container>
            <Container className={classes.tabPanel}>
              {selectedTab === 1 && <Reviews reviews={course[0].reviews} />}
              {selectedTab === 0 && <Description info={course[0].info} />}
            </Container>
          </Container>
        </Fade>
      </div>
    </div>
  );
};

export default EnrollPage;

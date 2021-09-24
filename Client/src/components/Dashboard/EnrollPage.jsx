import { Tabs, Tab } from "@material-ui/core";
import { Button, Paper } from "@material-ui/core";
import { Container, Grid, Fade } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { TextField } from "@material-ui/core/";
import React, { useState } from "react";

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
    background: "#C3CCCC",
  },
});

const Reqs = () => {
  return (
    <div>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
      <Typography variant="body1">Review</Typography>
    </div>
  );
};

const Outs = () => {
  return (
    <div>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
      <Typography variant="body1">Outcome</Typography>
    </div>
  );
};

const EnrollPage = () => {
  const [course, setCourse] = useState({
    courseName: "Web Application Development",
    courseCode: "EE5201",
    info: "In this course you will learn how to properly develop an web application",
    instructor: {
      name: "xxxx xxxx",
      prefix: "Dr.",
      qualifications: "Bsc. Engineering in Software",
    },
  });

  const [selectedTab, setselectedTab] = useState(0);

  const handleChange = (e, newIndex) => {
    setselectedTab(newIndex);
  };
  const classes = useStyles();

  return (
    <div>
      <div style={{ width: "100vw", marginTop: "80px" }}>
        <Fade in>
          <Container
            style={{
              background: "linear-gradient(to top, rgb(250, 250, 250), rgb(245,245,245))",
              height: "100vh",
              paddingTop: "30px",
            }}>
            <Container className={classes.root}>
              <Typography variant="h4">{course.courseName}</Typography>
            </Container>

            <Container className={classes.root1}>
              <Grid container spacing={7} className={classes.grids}>
                <Grid item md={3}>
                  <Paper variant="elevation" elevation={1} style={{ padding: "15px" }}>
                    <Typography variant="h4">{course.courseCode}</Typography>
                    <Typography variant="h5">{course.courseName}</Typography>
                    <Typography variant="body2">{course.info}</Typography>
                  </Paper>
                </Grid>
                <Grid item md={5}>
                  <Paper variant="elevation" elevation={1} style={{ padding: "15px" }}>
                    <Typography variant="h5">Instructor</Typography>
                    <Typography variant="h4">{course.instructor.prefix + course.instructor.name}</Typography>
                    <Typography variant="h5">{course.instructor.qualifications}</Typography>
                  </Paper>
                </Grid>
                <Grid item md={3}>
                  {/* <Paper
                    variant="elevation"
                    elevation={1}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px",
                    }}> */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      // marginBottom: "20px",
                      background: "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
                    }}>
                    Enroll Now
                  </Button>
                  {/* <TextField variant="filled" label="Password" type="password" /> */}
                  {/* </Paper> */}
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                background: "#004480",
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
              {selectedTab === 1 && <Reqs />}
              {selectedTab === 0 && <Outs />}
            </Container>
          </Container>
        </Fade>
      </div>
    </div>
  );
};

export default EnrollPage;

import { Tabs, Tab } from "@material-ui/core";
import { Button, Paper } from "@material-ui/core";
import { Container, Grid, Fade } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { TextField } from "@material-ui/core/";
import React, { useState } from "react";

const MyTabs = withStyles({
  indicator: {
    backgroundColor: "black",
    height: "3px",
    display: "flex",
    justifyContent: "center",
    "%>span": {
      maxWidth: 40,
      // width: "100%",
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
    background: "gray",
    display: "flex",
    justifyContent: "center",
  },
  root1: {
    // background: "lightblue",
    display: "flex",
    justifyContent: "center",
  },
  grids: {
    display: "flex",
    background: "#B72E66",
    alignItems: "center",
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
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
      <h2>asdasdad</h2>
    </div>
  );
};
const Outs = () => {
  return (
    <div>
      <Typography variant="h6" component="h1">
        1.How to built an web app using node
      </Typography>
      <Typography variant="h6" component="h1">
      2. React Basics
      </Typography>
      <Typography variant="h6" component="h1">
        3.User Authentication and Autherization
      </Typography>
      <Typography variant="h6" component="h1">
        4.Mongo DB
      </Typography>
      <Typography variant="h6" component="h1">
        5.How to deploy a project
      </Typography>
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
    <div style={{ width: "100vw", marginTop: "80px" }}>
      <Fade in>
        <Container>
          <Container className={classes.root}>
            <Typography variant="h3">{course.courseName}</Typography>
          </Container>

          <Container className={classes.root1}>
            <Grid container spacing={7} className={classes.grids}>
              <Grid item md={3}>
                <Paper
                  variant="outlined"
                  elevation={0}
                  style={{ padding: "15px" }}
                >
                  <Typography variant="h2">{course.courseCode}</Typography>
                  <Typography variant="h4">{course.courseName}</Typography>
                  <Typography variant="p">{course.info}</Typography>
                </Paper>
              </Grid>
              <Grid item md={5}>
                <Paper
                  variant="outlined"
                  elevation={0}
                  style={{ padding: "15px" }}
                >
                  <Typography variant="h5">Instructor</Typography>
                  <Typography variant="h3">
                    {course.instructor.prefix + course.instructor.name}
                  </Typography>
                  <Typography variant="h4">
                    {course.instructor.qualifications}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper
                  variant="outlined"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "15px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginBottom: "20px",
                      background:
                        "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
                    }}
                  >
                    Enroll Now
                  </Button>
                  <TextField
                    variant="filled"
                    label="Password"
                    type="password"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Container
            style={{
              background: "gray",
              marginTop: "100px",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <MyTabs value={selectedTab} onChange={handleChange}>
              <MyTab label="Learning Outcomes" />
              <MyTab label="Reviews" />
            </MyTabs>
          </Container>
          <Container className={classes.tabPanel}>
            {selectedTab === 1 && <Reqs />}
            {selectedTab === 0 && <Outs />}
            {/* <Reqs />
        <Outs /> */}
          </Container>
        </Container>
      </Fade>
    </div>
  );
};

export default EnrollPage;

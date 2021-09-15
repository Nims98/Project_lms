import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import "./../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyCourses from "./MyCourses";
import Home from "./Home";
import NavBar from "./NavBar";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    display: "flex",
    background: "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
    width: "75%",
    height: "100vh",
    justifyContent: "left",
    overflow: "hidden",
    overflowY: "scroll",
  },
  side: {
    display: "flex",
    width: "25%",
    height: "100vh",
  },
  header: {
    width: "100%",
    height: "80px",
    background: "gray",
  },
});
const View = ({ info }) => {
  return (
    <Grid item md={12} xl={12} lg={12}>
      <Container
        style={{
          // width: "1100px",
          height: "400px",
          background: "white",
          marginTop: "40px",
          borderRadius: "10px",
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        <Typography
          variant="h5"
          style={{ fontStyle: "normal", fontWeight: "500", marginTop: "15px" }}
        >
          {info}
        </Typography>
      </Container>
    </Grid>
  );
};
const CourseView = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact />
            <Route path="/home" component={Home} />
            <Route path="/mycourses" component={MyCourses} />
          </Switch>
        </Router>
      </div>
      <Fade in>
        <div className="root">
          <div className={classes.main}>
            <Grid container spacing={0} direction="row">
              <View info="Reading Material" />
              <View info="ahsdjkhashda" />
            </Grid>
          </div>
          <div className={classes.side}></div>
        </div>
      </Fade>
    </div>
  );
};

export default CourseView;

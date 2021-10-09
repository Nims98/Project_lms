import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyCourses from "./MyCourses";
import SideBar from "../SideBar";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import CourseView from "./CourseView";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  sidebar: {
    width: "200px",
  },
});

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", top: "80px", background: "white" }}>
      <Router>
        <NavBar value={0} />
        <Switch>
          <Route path="/dashboard/all-courses" component={Home} />
          <Route exact path="/dashboard/my-courses" component={MyCourses} />
        </Switch>
      </Router>
    </div>
  );
};

export default DashBoard;

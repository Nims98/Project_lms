import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyCourses from "./MyCourses";
import SideBar from "./SideBar";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import CourseView from "./CourseView";
const useStyles = makeStyles({
  sidebar: {
    width: "200px",
  },
});

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", top: "80px" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard/home" exact component={Home} />
          <Route
            path="/dashboard/mycourses/courseview"
            exact
            component={CourseView}
          />
          <Route path="/dashboard/mycourses" component={MyCourses} />
          {/* </div> */}
        </Switch>
        {/* <div>
          <SideBar className={classes.sidebar} />
        </div> */}
      </Router>
    </div>
  );
};

export default DashBoard;

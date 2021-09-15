import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyCourses from "./MyCourses";
import SideBar from "./SideBar";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "gray",
    justifyContent: "left",
    height: "100vh",
  },
  sidebar: {
    width: "200px",
  },
});

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <NavBar />
        <Container className={classes.container} fixed>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/mycourses" component={MyCourses} />
          </Switch>
          {/* </div> */}
        </Container>
        {/* <div>
          <SideBar className={classes.sidebar} />
        </div> */}
      </Router>
    </div>
  );
};

export default DashBoard;

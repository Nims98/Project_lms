import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyCourses from "./MyCourses";
import SideBar from "./SideBar";
const MyTabs = withStyles({
  indicator: {
    backgroundColor: "white",
    height: "3px",
  },
})(Tabs);

const MyTab = withStyles({
  root: {
    fontSize: "14px",
    fontWeight: 600,
  },
})((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "blue",
  },

  navbar: {
    width: "100%",
    height: "80px",
    display: "flex",
    background: "linear-gradient(to right, rgb(0, 44, 76), rgb(0, 73, 139))",
    zIndex: 2,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
  },

  left: {
    flex: "25%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "azure",
    paddingLeft: "10px",
    fontSize: "30px",
  },

  right: {
    flex: "25%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
  },

  search: {
    padding: "0 0 0 10px",
    height: "30px",
    width: "500px",
    borderRadius: "5px 0 0 5px",
    fontSize: "14px",
    borderStyle: "none",
  },

  button: {
    height: "30px",
    borderStyle: "none",
    borderRadius: "0 5px 5px 0",
    fontSize: "14px",
    padding: "0 10px 0 10px",
  },
  middle: {
    flex: "50%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    position: "absolute",
    top: "32px",
    left: "35%",
    // background: "rgb(0,0,0)",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "azure",
    // paddingLeft: "10px",
  },
});

const DashBoard = () => {
  const classes = useStyles();

  const [selectedTab, setselectedTab] = useState(0);

  const handleChange = (e, newIndex) => {
    setselectedTab(newIndex);
  };

  return (
    <div>
      <Router>
        <div className={classes.navbar}>
          <div className={classes.left}>
            <SchoolIcon fontSize="large" style={{ marginRight: 10 }} />
            <p>University of Somewhere</p>
          </div>

          <div className={classes.middle}>
            <Switch>
              <Route
                path="/"
                render={(history) => (
                  <>
                    <MyTabs
                      value={history.location.pathname}
                      onChange={handleChange}
                    >
                      <MyTab
                        label="Home"
                        component={Link}
                        to="/home"
                        value="/home"
                      />
                      <MyTab
                        label="My Courses"
                        component={Link}
                        to="/mycourses"
                        value="/mycourses"
                      />
                    </MyTabs>
                  </>
                )}
              />
            </Switch>
          </div>
          <div className={classes.right}>
            <input
              className={classes.search}
              type="text"
              placeholder="Search Courses"
            />
            <button className={classes.button}>Search</button>
          </div>
        </div>
        <div className={classes.container}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/mycourses" component={MyCourses} />
          </Switch>
        </div>
        <div>
          <SideBar />
        </div>
      </Router>
    </div>
  );
};

export default DashBoard;

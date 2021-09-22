import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useState } from "react";
import "./../../App.css";

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

const useStyles = makeStyles({});

const NavBar = ({ value }) => {
  const classes = useStyles();

  const [selectedTab, setselectedTab] = useState(value);

  const handleChange = (e, newIndex) => {
    setselectedTab(newIndex);
  };
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <SchoolIcon fontSize="large" style={{ marginRight: 9 }} />
          <Typography
            variant="h4"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            University of Somewhere
          </Typography>
        </div>

        <div className="right">
          <Switch>
            <Route
              path="/"
              render={(history) => (
                <>
                  <MyTabs
                    value={
                      history.location.pathname === true
                        ? history.location.pathname
                        : selectedTab
                    }
                    onChange={handleChange}
                  >
                    <MyTab
                      label="All Courses"
                      component={Link}
                      to="/dashboard/all-courses"
                      value="0"
                    />
                    <MyTab
                      label="My Courses"
                      component={Link}
                      to="/dashboard/my-courses"
                      value="1"
                    />
                    <MyTab
                      label="Profile"
                      component={Link}
                      to="/dashboard/profile"
                      value="2"
                    />
                  </MyTabs>
                </>
              )}
            />
          </Switch>
        </div>
        {/* <div className={classes.right}>
          <input
            className={classes.search}
            type="text"
            placeholder="Search Courses"
          />
          <button className={classes.button}>Search</button>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;

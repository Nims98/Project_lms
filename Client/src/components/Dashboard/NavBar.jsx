import React from "react";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import "./../../App.css";
import { Avatar } from "@material-ui/core";

import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { loadCourses } from "./../../store/courses.js";

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

const NavBar = ({ value }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  dispatch(loadCourses());

  const [selectedTab, setselectedTab] = useState(value);

  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    localStorage.clear();
    history.push("/");
    setuser(null);
  };

  const handleChange = (e, newIndex) => {
    setselectedTab(newIndex);
  };
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <SchoolIcon fontSize="large" style={{ marginRight: 9 }} />
          <Typography variant="h4" component={Link} to="/" style={{ textDecoration: "none", color: "white" }}>
            University of Somewhere
          </Typography>
        </div>

        <div className="middle">
          <Switch>
            <Route
              path="/"
              render={(history) => (
                <>
                  <MyTabs
                    value={history.location.pathname === true ? history.location.pathname : selectedTab}
                    onChange={handleChange}>
                    <MyTab label="All Courses" component={Link} to="/dashboard/all-courses" value="0" />
                    <MyTab label="My Courses" component={Link} to="/dashboard/my-courses" value="1" />
                    <MyTab label="Profile" component={Link} to="/dashboard/profile" value="2" />
                  </MyTabs>
                </>
              )}
            />
          </Switch>
        </div>
        {user ? (
          <div className="right">
            <Avatar size="large" style={{ margin: "10px" }} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography>{user.result.name}</Typography>
            <Button
              style={{ margin: "25px 25px 25px 40px", fontWeight: "600", background: "whitesmoke" }}
              variant="contained"
              size="small"
              onClick={logout}>
              Log Out
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

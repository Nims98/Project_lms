import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import "./../../App.css";
import { apiCallBegan } from "./../../middleware/api";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "./../../store/auth.js";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [selectedTab, setselectedTab] = useState(value);

  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    localStorage.clear();
    history.push("/");
    setuser(null);
    // dispatch(logout());
  };

  // console.log(user);
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
            <Avatar style={{ margin: "10px" }} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography>{user.result.name}</Typography>
            <Button
              style={{ margin: "25px 25px 25px 40px", fontWeight: "600", background: "whitesmoke" }}
              variant="contained"
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

import React from "react";
import App from "./../App.css";
import SchoolIcon from "@material-ui/icons/School";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <SchoolIcon fontSize="large" style={{ padding: 10 }} />
        <p>University of Somewhere</p>
      </div>
      <div className="right">
        <input className="search" type="text" placeholder="Search Courses" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default NavBar;

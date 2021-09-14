import React from "react";
import "./../App.css";
import { Typography } from "@material-ui/core";
// import NavBar from "./NavBar";
import LoginForm from "./LoginForm";

const HomePage = () => {
  return (
    <div className="home">
      {/* <NavBar /> */}
      <Typography variant="h4">Learning Management System</Typography>
      <Typography variant="h2">Faculty of Engineering</Typography>
      <Typography variant="h3">Univessity of Somewhere</Typography>
      <LoginForm className="log" />

      <div className="tr1"></div>
      <div className="tr2"></div>
    </div>
  );
};

export default HomePage;

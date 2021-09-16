import React from "react";
import "./../App.css";
import { Typography } from "@material-ui/core";
// import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import { Container } from "@material-ui/core";
const HomePage = () => {
  return (
    <div className="root">
      <div className="left">
        <Container>
          <Typography variant="h4">Learning Management System</Typography>
          <Typography variant="h2">Faculty of Engineering</Typography>
          <Typography variant="h4">University of Ruhuna</Typography>
        </Container>
      </div>
      <div className="right">
        <LoginForm />
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import "./../../App.css";
import { Typography } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { Container } from "@material-ui/core";
const HomePage = () => {
  return (
    <Fade in>
      <div className="root">
        <div className="left">
          <Container>
            <Typography variant="h4">Learning Management System</Typography>
            <Typography variant="h2">Faculty of Engineering</Typography>
            <Typography variant="h4">University of Ruhuna</Typography>
          </Container>
        </div>
        <div className="right">
          <div className="top"></div>
          <div className="bottom">
            <LoginForm />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default HomePage;

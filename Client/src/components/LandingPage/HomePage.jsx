import React from "react";
import "./../../App.css";
import { Typography } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import SignUp from "./../Auth/SignUp";
import { Container } from "@material-ui/core";
const HomePage = () => {
  return (
    <Fade in>
      <div className="root">
        <div className="left">
          <Container style={{ margin: "150px 0 300px 70px" }}>
            <div style={{ marginBottom: "60px" }}>
              <Typography variant="h4">Learning Management System</Typography>
            </div>
            <div style={{ marginBottom: "290px" }}>
              <Typography variant="h2">Faculty of Engineering</Typography>
              <Typography variant="h4">University of Somewhere</Typography>
            </div>
          </Container>
        </div>
        <div className="right">
          <SignUp />
        </div>
      </div>
    </Fade>
  );
};

export default HomePage;

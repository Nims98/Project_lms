import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import "./../App.css";
import { Container, Paper } from "@material-ui/core";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  return (
    <Container
      justifyContent="center"
      style={{ display: "flex", justifyContent: "center", height: "400px" }}
    >
      <Paper>
        <form action="post">
          <Typography variant="h5" style={{ fontFamily: "san serif" }}>
            Login
          </Typography>
          <TextField
            name="email"
            label="Email"
            fullWidth
            placeholder="Email Address"
            value={loginData.Email}
            onChange={(e) =>
              setLoginData({ ...loginData, Email: e.target.value })
            }
          />
          <TextField
            name="password"
            label="Password"
            fullWidth
            placeholder="Password"
            type="password"
            value={loginData.Password}
            onChange={(e) =>
              setLoginData({ ...loginData, Password: e.target.value })
            }
          />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;

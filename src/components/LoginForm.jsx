import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import "./../App.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  return (
    <div className="login">
      <form action="">
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
    </div>
  );
};

export default LoginForm;

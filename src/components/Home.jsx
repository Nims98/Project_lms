import React from "react";
import { Fade, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
const Home = () => {
  return (
    <Fade in>
      <div>
        <Typography variant="h3">Home</Typography>
        <Grid container spacing={3} justifyContent="flex-start">
          <Grid item sm={6} md={4} lg={3}>
            <Course />
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Course />
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Course />
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Course />
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
};

export default Home;

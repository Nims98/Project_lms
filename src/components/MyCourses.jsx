import React from "react";
import { Typography, Grow, Fade, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Course from "./Course";
const MyCourses = () => {
  return (
    <Fade in>
      <div style={{ background: "lightblue", width: "100%" }}>
        <Typography variant="h3">My Courses </Typography>
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

export default MyCourses;

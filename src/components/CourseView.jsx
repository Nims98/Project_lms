import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    background: "gray",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});
const CourseView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h1">Web Application Development</Typography>
    </Container>
  );
};

export default CourseView;

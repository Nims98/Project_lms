import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import "./../App.css";
const useStyles = makeStyles({
  main: {
    display: "flex",
    background: "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
    width: "75%",
    height: "100vh",
    justifyContent: "left",
  },
  side: {
    display: "flex",
    width: "25%",
    height: "100vh",
  },
  header: {
    width: "100%",
    height: "80px",
    background: "gray",
  },
});
const CourseView = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}></div>
      <div className={classes.main}>
        <Grid container spacing={0} direction="row">
          <Grid item md={12} xl={12} lg={12}>
            <Container
              style={{
                // width: "1100px",
                height: "400px",
                background: "white",
                marginTop: "40px",
                borderRadius: "10px",
                overflow: "hidden",
                overflowX: "scroll",
              }}
            >
              <Typography variant="h1">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahello
              </Typography>
            </Container>
          </Grid>
          >
          <Grid item md={8} xl={12} lg={12} sm={12}>
            <Container
              style={{
                // width: "1100px",
                height: "400px",
                background: "white",
                // margin: "40px",
                borderRadius: "10px",
                overflow: "hidden",
                overflowX: "scroll",
              }}
            >
              <Typography variant="h1">
                haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaello
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </div>
      <div className={classes.side}></div>
    </div>
  );
};

export default CourseView;

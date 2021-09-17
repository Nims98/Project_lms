import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Fade } from "@material-ui/core";
import image from "./../../images/pdf.svg";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    display: "flex",
    background: "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
    width: "75%",
    height: "100vh",
    // justifyContent: "left",
    overflow: "hidden",
    overflowY: "scroll",
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
  root: {
    width: 300,
    minWidth: 300,
    // maxWidth: 300,
    marginTop: "60px",
    marginLeft: "20px",
    height: 300,
  },
  media: {
    height: 100,
    width: 100,
    justifyContent: "center",
  },
});

const Item = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Lecture Note"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lecture
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Download
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

const View = ({ info }) => {
  return (
    <Grid item container md={12} xl={12} lg={12}>
      <Container>
        <Typography
          variant="h5"
          component="h5"
          style={{ fontWeight: "500", marginTop: "15px", color: "whitesmoke" }}
        >
          {info}
        </Typography>
      </Container>
      <Container
        style={{
          // width: "1100px",
          height: "400px",
          background: "white",
          margin: "40px",
          borderRadius: "7px",
          overflow: "hidden",
          overflowX: "scroll",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    </Grid>
  );
};

const CourseView = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "100vw", marginTop: "80px" }}>
      <Fade in>
        <div className="root">
          <div className={classes.main}>
            <Grid container spacing={0} direction="row">
              <View info="Reading Material" />
              <View info="Lectures" />
              <View info="Assignments" />
              <View info="Assignments" />
            </Grid>
          </div>
          <div className={classes.side}>
            <Container
              style={{ background: "black", width: "80%" }}
            ></Container>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default withRouter(CourseView);

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import { Send } from "@material-ui/icons";

import "./../../App.css";
import { Fade } from "@material-ui/core";
import { Form, Formik, Field } from "formik";

import image from "./../../images/pdf.svg";

const useStyles = makeStyles({
  main: {
    // "linear-gradient(to top, rgb(0, 44, 76), rgb(0, 73, 139))",
    display: "flex",
    width: "75%",
    height: "100vh",
    // justifyContent: "left",
    overflow: "hidden",
    overflowY: "scroll",
  },
  side: {
    display: "flex",
    width: "25%",
    alignItems: "center",
    height: "60vh",
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
        <CardMedia className={classes.media} image={image} title="Lecture Note" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lecture
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, modi fugiat perferendis explicabo
            blanditiis, facilis suscipit laudantium
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" style={{ background: "#00498B", color: "white" }}>
          Download
        </Button>
        <Button variant="contained" size="small" style={{ background: "whitesmoke" }}>
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
        <Typography variant="h5" component="h5" style={{ fontWeight: "500", marginTop: "15px", color: "black" }}>
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
        }}>
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
    <div>
      <div style={{ width: "100vw", marginTop: "80px", background: "rgba(0,0,0,0.08)" }}>
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
              <Container style={{ width: "80%" }}>
                <Formik
                  initialValues={{
                    feedBack: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      setSubmitting(false);

                      alert(JSON.stringify(values, null, 2));
                    }, 500);
                  }}>
                  {({ submitForm }) => (
                    <Container
                      component="main"
                      minWidth="xs"
                      maxWidth="md"
                      style={{
                        background: "#EBEBEB",
                        borderRadius: "7px",
                        padding: "20px",
                      }}>
                      <Grow in>
                        <Form>
                          <Typography component="h1" variant="h4">
                            Feedback
                          </Typography>
                          <Field
                            component={TextField}
                            margin="normal"
                            fullWidth
                            multiline
                            variant="outlined"
                            rows={10}
                            id="feedBack"
                            label="Write a feedback..."
                            name="feedBack"
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Send />}
                            style={{ background: "#00498B" }}>
                            Send
                          </Button>
                        </Form>
                      </Grow>
                    </Container>
                  )}
                </Formik>
              </Container>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CourseView;

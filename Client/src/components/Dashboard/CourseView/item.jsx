import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import image from "./../../../images/pdf.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "75%",
    height: "100vh",
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
        <Button variant="contained" size="small" style={{ background: "#1444FC", color: "white" }}>
          Download
        </Button>
        <Button variant="contained" size="small" style={{ background: "whitesmoke" }}>
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

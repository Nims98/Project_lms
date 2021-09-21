import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxwidth: 330,
    minHeight: 220,
    borderRadius: 10,
    margin: 10,
  },
});
const Course = ({ courseName, courseCode, info }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <CardContent>
            <Typography variant="h4">{courseCode}</Typography>
            <Typography variant="h5">{courseName}</Typography>
            <Typography variant="p">{info}</Typography>
          </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Course;

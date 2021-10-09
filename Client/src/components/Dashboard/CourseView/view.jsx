import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Item from "./item";

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
          height: "400px",
          background: "white",
          margin: "40px 40px 100px 40px",
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
      </Container>
    </Grid>
  );
};

export default View;

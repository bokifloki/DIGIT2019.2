import React from "react";
import Event from "./Event/Event";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "4px"
  },
  event: {
    margin: "100px"
  }
});

// const styles = {
//   margin: "10px",
// }
// const container = {
//   position: "relative",
//   top: "10%",
//   left: "50px",
//   width: "85%"
// }

const styles = {
  display: "table",
  margin: "0 auto"
};

const container = {
  padding: "5%",
  paddingBottom: "5%",
  backgroundColor: "lightgray"
};

const mainDiv = {
  backgroundColor: "lightgray"
};

const header = {
  fontFamily: "sans-serif",
  color: "rgb(83, 75, 75)",
  textAlign: "center"
};

export default function Events() {
  const classes = useStyles();
  return (
    <div style={mainDiv}>
      <div style={container}>
        <h2 style={header}>Upcoming and past events</h2>
        <br></br>
        <div style={styles}>
          <Event></Event>
        </div>
        <br></br>
        <div style={styles}>
          <Event></Event>
        </div>
        <br></br>
        <div style={styles}>
          <Event></Event>
        </div>
      </div>
    </div>
  );
}

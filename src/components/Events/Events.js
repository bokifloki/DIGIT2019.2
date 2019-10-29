import React from "react";
import Event from "./Event/Event";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  event: {
    
  }
});

export default function Events() {
  const classes = useStyles();
  return (
    <div>
      <div classeName={classes.event}>
        <Event></Event>
      </div>
    </div>
  );
}

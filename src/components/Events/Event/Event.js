import React, { useState, useEffect } from "react";
import styles from "./Event.css";
import Timer from "react-compound-timer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import img1 from "./img.jpg";
import moment from "moment";

import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { borderRadius } from "@material-ui/system";
import SanoButton from "../../SanoButton/SanoButton";

const useStyles = makeStyles({
  card: {
    fontFamily: "sans-serif",
    display: "flex",
    flexFlow: "row wrap",
    backgroundColor: "rgb(250, 250, 250)",
    borderRadius: "10px"
  },
  media: {
    height: 140
  },
  cover: {
    width: 151
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "4px"
  },
  imgDiv: {
    margin: "10px 10px"
  },
  location: {
    display: "flex"
  },
  icon: {
    marginLeft: "-15px",
    padding: 0,
    height: "10%",
    width: "10%",
    color: "rgb(22, 134, 172)"
  },
  h3: {
    marginBottom: "-100px",
    color: "rgb(22, 134, 172)"
  },
  date: {
    margin: 0,
    padding: "1% 1%"
  },
  hover: {
    "&:hover": {
      backgroundColor: "white"
    }
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    backgroundColor: "rgb(22, 134, 172)"
  }
});

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("rgb(22, 134, 172)"),
    backgroundColor: "rgb(22, 134, 172)",
    "&:hover": {
      backgroundColor: "rgb(23, 140, 179)"
    }
  }
}))(Button);

export default function Event({ event }) {
  const [elevation, setEventlevation] = useState(2);
  const [difference, setDifference] = useState(0);
  const classes = useStyles();
  const date = event.date;
  const momentDate = moment(date);
  const momentMiliseconds = momentDate.valueOf();

  useEffect(() => {
    const dateNow = moment().valueOf();
    const diff = momentMiliseconds - dateNow;
    setDifference(diff);
  }, [event.date]);

  return (
    <div className={styles.mainDiv}>
      <Card
        onMouseEnter={() => setEventlevation(7)}
        onMouseLeave={() => setEventlevation(2)}
        elevation={elevation}
        id="mobile"
        className={classes.card}
      >
        <CardContent>
          <Typography
            className={classes.date}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <div className={styles.date}>
              {difference > 0 ? (
                <Timer initialTime={difference} direction="backward">
                  {() => (
                    <React.Fragment>
                      <Timer.Days /> <span>days </span>
                      <Timer.Hours /> <span>hr. </span>
                      <Timer.Minutes /> <span>min. </span>
                      <Timer.Seconds /> <span>sec. until the event. </span>
                    </React.Fragment>
                  )}
                </Timer>
              ) : (
                <div> {event.date} </div>
              )}
            </div>
          </Typography>
          <h4>Event title:{event.title} </h4>
          <div className={classes.location}>
            <LocationOnIcon
              style={{ paddingLeft: "8px" }}
              className={classes.icon}
            ></LocationOnIcon>
            <h3>{event.location}</h3>
          </div>

          <div className={styles.container}>{event.overview}</div>

          <SanoButton variant="cta" color="white">
            Join the event
          </SanoButton>
        </CardContent>
        <div className={classes.imgDiv}>
          <img src={img1} className={classes.img} alt="sreka"></img>
        </div>
      </Card>
    </div>
  );
}

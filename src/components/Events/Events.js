import React from "react";
import Event from "./Event/Event";

import { makeStyles } from "@material-ui/core/styles";
import eventImage from "./Event/img.jpg";

const styles = {
  display: "table",
  margin: "0 auto"
};

const container = {
  padding: "0 5%",
  paddingBottom: "5%",
  paddingTop: "75px",
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

function EventList(props) {
  const { events } = props;
  return (
    <div>
      {events.map(event => {
        return (
          <>
            <div style={styles}>
              <Event event={event} />
            </div>
            <br></br>
          </>
        );
      })}
    </div>
  );
}

export default function Events() {
  const events = [
    {
      title: "Title 1",
      date: "2020-09-12",
      location: "Skopje, Cafe Bar",
      overview:
        "Lorem ipsum dolor sit amet coectetur adipisicing elit. Facilis recusandae, inventore, officiis obcaecati assumenda veniam eius saepe esse provident eligendi animi magni natus illum optio. Earum ratione enim dolores. Nam mollitia, dolorem qui molestias, hic placeat, ducimus quibusdam ratione culpa a deserunt. Odio mollitia, recusandae maiores esse rem quo qui!",
      image: eventImage
    },
    {
      title: "Title 1",
      date: "2019-09-12",
      location: "Skopje, Cafe Bar",
      overview:
        "Lorem ipsum dolor sit amet coectetur adipisicing elit. Facilis recusandae, inventore, officiis obcaecati assumenda veniam eius saepe esse provident eligendi animi magni natus illum optio. Earum ratione enim dolores. Nam mollitia, dolorem qui molestias, hic placeat, ducimus quibusdam ratione culpa a deserunt. Odio mollitia, recusandae maiores esse rem quo qui!",
      image: eventImage
    },
    {
      title: "Title 1",
      date: "2019-09-12",
      location: "Skopje, Cafe Bar",
      overview:
        "Lorem ipsum dolor sit amet coectetur adipisicing elit. Facilis recusandae, inventore, officiis obcaecati assumenda veniam eius saepe esse provident eligendi animi magni natus illum optio. Earum ratione enim dolores. Nam mollitia, dolorem qui molestias, hic placeat, ducimus quibusdam ratione culpa a deserunt. Odio mollitia, recusandae maiores esse rem quo qui!",
      image: eventImage
    }
  ];

  return (
    <div style={mainDiv}>
      <div style={container}>
        <h2 style={header}>Upcoming and past events</h2>
        <br></br>
        <EventList events={events} />
      </div>
    </div>
  );
}

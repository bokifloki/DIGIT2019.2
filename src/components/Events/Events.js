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
  color: "black",
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
      title:
        "Нови кревети за хемато-онколошкото одделение на Клиниката за детски болести !",
      date: "30.09.2019",
      location: "NLB Banka AD Skopje",
      overview:
        "Денес во просториите на НЛБ Галеријата со отворање на изложба на детски цртежи, се заокружи НЛБ Месецот на штедење, кој традиционално по осми пат беше организиран од страна на НЛБ Банка.Оваа година, НЛБ месецот на штедење имаше хуманитарен карактер при што за секој пристигнат цртеж Банката донираше по 200 денари. Собраните средства се наменети за набавка на опрема и инвентар за Одделот за хематологија и онкологија при Универзитетската клиника за детски болести во Скопје.",
      image:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/73073007_2662253850504834_7879158109132816384_n.jpg?_nc_cat=106&_nc_oc=AQk6cV8pKVFH7sB7r9kBc4s_3xJWRcFz-OtKYy_W1xxKgd1tJsKYTbrR7UcMmPvT4SU&_nc_ht=scontent-sof1-1.xx&oh=6008e9d4c4ea7d78ef442797f09cd57e&oe=5E55BD76"
    },
    {
      title: "Title 1",
      date: "2019-9-12",
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
        <h2 style={header}>Our Events</h2>
        <br></br>
        <EventList events={events} />
      </div>
    </div>
  );
}

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
        "Нови кревети за хемато-онколошкото одделение на Клиниката за детски болести",
      date: "30.10.2019",
      location: "NLB Banka AD Skopje",
      overview:
        "Денес во просториите на НЛБ Галеријата со отворање на изложба на детски цртежи, \n се заокружи НЛБ Месецот на штедење, кој традиционално по осми пат беше организиран од страна на НЛБ Банка.Оваа година, НЛБ месецот на штедење имаше хуманитарен карактер при што за секој пристигнат цртеж Банката донираше по 200 денари. Собраните средства се наменети за набавка на опрема и инвентар за Одделот за хематологија и онкологија при Универзитетската клиника за детски болести во Скопје.",
      image:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/73073007_2662253850504834_7879158109132816384_n.jpg?_nc_cat=106&_nc_oc=AQk6cV8pKVFH7sB7r9kBc4s_3xJWRcFz-OtKYy_W1xxKgd1tJsKYTbrR7UcMmPvT4SU&_nc_ht=scontent-sof1-1.xx&oh=6008e9d4c4ea7d78ef442797f09cd57e&oe=5E55BD76"
    },
    {
      title: "Поставување на ограда на родителската куќа",
      date: "11.10.2019",
      location: "Родителска Куќа",
      overview:
        "Нема ништо поубаво од вистински пријателства! САНО е незмерно благодарно на прекрасното семејство на Ruth и Clay Buttemere, херојот од Ласкарци, Sedat Qazimi со неговиот тим и Simona Trajkovic, експерт сметководител. Денеска сите заедно за Родителската куќа направивме нов двор и ограда.",
      image:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71905663_2298646186911706_7998509868694634496_n.jpg?_nc_cat=100&_nc_oc=AQlNC7rLU4oCs1dn9NRCyJV-h2_s82OCUJ71LUOOjuGrFs5Y_NnSXJnzlHq5OdBSN6Y&_nc_ht=scontent-sof1-1.xx&oh=ed5671e7a4386cd159fae1135a468710&oe=5E5CCB4D"
    },
    {
      title: "САНО на рафтинг. Врбас ништо не им може ",
      date: "28.08.2019",
      location: "Кањон Матка",
      overview:
        "САНО фамилијата беше рафтинг на Матка, со многу дружба насмевки и убава атмосфера.",
      image:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/69381743_2219973771445615_311384471830003712_n.jpg?_nc_cat=100&_nc_oc=AQmCO-0_NklMT3Sf8dqC2FDUAEbYU41rcIISNBEYzaLBJScq2DXsW3O3YTWxMZ5EX7s&_nc_ht=scontent-sof1-1.xx&oh=05bb5cd9d04eb4b86989baf168765743&oe=5E19063A"
    },
    {
      title:
        "САНО им честита на учесниците во проектот за едукација на волонтери.",
      date: "12.07.2019",
      location: "Скопје",
      overview:
        "САНО им честита на учесниците во проектот за едукација на волонтери кои ќе им помагаат на родителите чии деца се болни од рак! Продолжуваме понатаму, следи практична работа и нов проект !",
      image:
        "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/66845418_2140646946044965_2385933892902191104_n.jpg?_nc_cat=108&_nc_oc=AQk07dG9seaG_-Mm3vB3jwDEfVvjbOsg6kOGTdk7BKpt4BNT6tBqRjq3S7De3ryh7tk&_nc_ht=scontent-sof1-1.xx&oh=3c21c0f61bf985dd1976d4ab2469ba44&oe=5E520310"
    }
  ];

  return (
    <div style={mainDiv}>
      <div style={container}>
        <h2 style={header}>Нашите проекти</h2>
        <br></br>
        <EventList events={events} />
      </div>
    </div>
  );
}

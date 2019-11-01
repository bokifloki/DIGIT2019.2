import React from "react";
import styles from "./AboutUs.module.css";
import Hero from "../Hero/Hero";
import Squares from "../Squares/Squares";
import Icon from "react-icons-kit";

import { playCircleO } from "react-icons-kit/fa/playCircleO";
import { picture } from "react-icons-kit/ikons/picture";
import { microsoft } from "react-icons-kit/ikons/microsoft";
import { twitter } from "react-icons-kit/ikons/twitter";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "./Tabs.css";
import { fontSize } from "@material-ui/system";
import SanoButton from "../SanoButton/SanoButton";

function AboutSecondHero() {
  return (
    <div className={styles.aboutFirstHero}>
      <div className={styles.section}>
        <div className={styles.aboutFirstHeroContent}>
          <h1>Join The Spring to invest in clean water and sustainability.</h1>
          <p>
            Give monthly, and you’ll become a part of The Spring, a passionate
            community invested in a world where everyone has clean water.
          </p>
          <SanoButton variant="cta">Learn More</SanoButton>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  const squares = [
    {
      icon: picture,
      heading: "Share your support",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: twitter,
      heading: "Share your supportg",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: playCircleO,
      heading: "Share your supportd",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: microsoft,
      heading: "Share your supports",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    }
  ];

  return (
    <div>
      <Hero
        img="https://d26p6gt0m19hor.cloudfront.net/assets/donations/general/the-spring-background-4a0669e65a1c0d601de41b2598e23d21.jpg"
        horisontalPosition="rightMost"
        content={
          <div className={styles.aboutFirstHeroContent}>
            <h1>
              Join The Spring to invest in clean water and sustainability.
            </h1>
            <p>
              Give monthly, and you’ll become a part of The Spring, a passionate
              community invested in a world where everyone has clean water.
            </p>
            <SanoButton variant="cta">Learn More</SanoButton>
          </div>
        }
      />

      <Hero
        img="#"
        cHeight={400}
        content={
          <>
            <Squares squares={squares} />
          </>
        }
      />
    </div>
  );
}
export default AboutUs;

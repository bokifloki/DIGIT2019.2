import React from "react";
import styles from "./AboutUs.module.css";
import { Squares, HeroThird } from "../Donations/Donations";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "./Tabs.css";
import { fontSize } from "@material-ui/system";

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
            <button>Learn More</button>
          </div>
        </div>
      </div>
    );
  }



function AboutUs(){
    return(

        <div>
            <AboutSecondHero></AboutSecondHero>
            <HeroThird></HeroThird>
            <AboutSecondHero></AboutSecondHero>
            <AboutSecondHero></AboutSecondHero>

        </div>
    );
}
export default AboutUs;

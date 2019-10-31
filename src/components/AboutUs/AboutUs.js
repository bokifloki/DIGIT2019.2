import React from "react";
import styles from "./AboutUs.module.css";

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "./Tabs.css";
import { fontSize } from "@material-ui/system";

function AboutHeroFirst() {
  return (
    <div className={styles.aboutHeroFirst}>
      <div className={styles.aboutHeroFirstContent}>

      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <AboutHeroFirst></AboutHeroFirst>
    </div>
  );
}
export default AboutUs;

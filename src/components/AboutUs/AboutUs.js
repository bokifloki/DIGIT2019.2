import React, { useContext } from "react";
import styles from "./AboutUs.module.css";
import Hero from "../Hero/Hero";
import Squares from "../Squares/Squares";
import content from "../../utils/content";

import SanoButton from "../SanoButton/SanoButton";
import { LanguageContext } from "../../utils/LanguageContext";

function AboutUs() {
  const { language } = useContext(LanguageContext);
  const aboutusContent = content[language].aboutus;

  const { heroImg, firstHero, squares } = aboutusContent;
  const { h1, p, buttonText } = firstHero;

  return (
    <div>
      <Hero
        img={heroImg}
        horisontalPosition="rightMost"
        content={
          <div className={styles.aboutFirstHeroContent}>
            <h1>{h1}</h1>
            <p>{p}</p>
            <SanoButton variant="cta">{buttonText}</SanoButton>
          </div>
        }
      />

      <Hero
        noBg
        cHeight={200}
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

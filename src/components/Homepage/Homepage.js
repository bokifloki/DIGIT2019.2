import React, { useState, useContext } from "react";
import content from "../../utils/content";
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import HeroSplit from "../HeroSplit/HeroSplit";
import WelcomeContent from "./components/WelcomeContent";
import StatisticInformation from "./components/StatisticInformation";
import TestimonialContent from "./components/TestimonialContent";
import useWindowSize from '../../utils/useWindowSize'

import { LanguageContext } from "../../utils/LanguageContext";

const Homepage = () => {
  const { language } = useContext(LanguageContext);

  const homepageContent = content[language].homepage;

  const {
    testimonialContent,
    statisticInformation,
    welcomeContent
  } = homepageContent;
  const { illustration, people } = homepageContent.resources.images;
  const winSize = window.innerWidth;
  const winSizes = useWindowSize()
  console.log(winSize)
  return (
    <>
      <Hero
        img={illustration}
        cHeight={600}
        content={<WelcomeContent content={welcomeContent} />}
      />
      <Hero
        cHeight={500}
        linearGrad={"linear-gradient(#ebead6,#C8AB83)"}
        content={<StatisticInformation content={statisticInformation} />}
      />
      {/* <Hero cHeight={700} img={people} /> */}
      <Hero
        cHeight={winSizes<1050 ? 1300 :996 }
        linearGrad={"linear-gradient(#c9a77e,#c3e0dc)"}
        content={<TestimonialContent content={testimonialContent}  winSize={winSizes}/>}
      />
      <Map />
    </>
  );
};

export default Homepage;

import React from "react";
import content from '../../utils/content'
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import HeroSplit from "../HeroSplit/HeroSplit";
import WelcomeContent from "./components/WelcomeContent";
import StatisticInformation from "./components/StatisticInformation";
import TestimonialContent from "./components/TestimonialContent";

const Homepage = () => {
  const homepageContent = content.homepage
  const {testimonialContent, statisticInformation, welcomeContent,} = homepageContent
  const {illustration, people} = homepageContent.resources.images

  return (
    <>
      <Hero img={illustration} cHeight={600} content={<WelcomeContent content={welcomeContent} />}/>
      <HeroSplit
        cHeight={500} 
        leftContent={<>Hello</>}
        rightContent={<>Goodbye</>}
        lhp="rightMost"
        rhp="leftMost"
        img={illustration}
      />
      <Hero
        cHeight={500}
        linearGrad={"linear-gradient(#ebead6,#a8b9b5)"}
        content={<StatisticInformation content={statisticInformation} />}
      />
      <Hero cHeight={700} img={people}/>
      <Hero
        cHeight={996}
        linearGrad={"linear-gradient(#c9a77e,#c3e0dc)"}
        content={<TestimonialContent  content={testimonialContent} />}
      />
      <Map />
    </>
  );
};

export default Homepage;

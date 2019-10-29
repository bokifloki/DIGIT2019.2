import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";

import {
  HeroContainer,
  MessageContainer,
  CTAButton,
  H1
} from "./Homepage.scmp";
const illustration =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg";

const people =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg";

const sprite =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-saturn-5a8595e0d8f85155761f87bf3d8ef574.png";
function HeroImg({ src, alt, linearGrad }) {
  const heroImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  const heroLinearGradStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: linearGrad
  };
  if (linearGrad) {
    return <div style={heroLinearGradStyle}></div>;
  }
  return <img style={heroImgStyles} src={src} alt={alt}></img>;
}

function Message({ content }) {
  return content;
}

function Hero({ img, content, cHeight, linearGrad }) {
  return (
    <HeroContainer cHeight={cHeight}>
      <HeroImg src={img} linearGrad={linearGrad} alt="bgImg" />
      <Message content={content} />
    </HeroContainer>
  );
}

function ShortAboutUs() {
  return <div></div>;
}

function Explanation() {
  return <div></div>;
}

function Testimonials() {
  return <div></div>;
}

const Homepage = () => {
  return (
    <>
      <Hero
        img={illustration}
        content={
          <MessageContainer>
            <h1>Why Water?</h1>
            <p>
              For people in developing countries, clean water can change
              everything.
            </p>
            <CTAButton>
              <Icon icon={playCircleO} size={20}></Icon> Watch our video
            </CTAButton>
          </MessageContainer>
        }
      />
      <Hero
        cHeight={500}
        linearGrad={"linear-gradient(#ebead6,#a8b9b5)"}
        content={
          <MessageContainer>
            <H1 bgImg={sprite}>
              663 million people in the world live without clean water
            </H1>
            <p>
              That’s nearly 1 in 10 people worldwide. Or, twice the population
              of the United States. The majority live in isolated rural areas
              and spend hours every day walking to collect water for their
              family. Not only does walking for water keep children out of
              school or take up time that parents could be using to earn money,
              but the water often carries diseases that can make everyone sick.
            </p>
            <br />
            <p>
              But access to clean water means education, income and health -
              especially for women and kids.
            </p>
          </MessageContainer>
        }
      />

      <Hero
        cHeight={500}
        img={people}
        content={<MessageContainer></MessageContainer>}
      />
      <Explanation />
      <Testimonials />
      <ShortAboutUs />
    </>
  );
};

export default Homepage;

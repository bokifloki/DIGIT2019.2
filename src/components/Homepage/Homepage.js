import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";

import { HeroContainer, MessageContainer, CTAButton } from "./Homepage.scmp";
const illustration =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg";

const people =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg";
function HeroImg({ src, alt }) {
  const heroImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };
  return <img style={heroImgStyles} src={src} alt={alt}></img>;
}

function Message({ children }) {
  return children();
}

function Hero({ img, content, cHeight }) {
  return (
    <HeroContainer cHeight={cHeight}>
      <HeroImg src={img} alt="bgImg" />
      <Message>{() => content}</Message>
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
        cHeight={800}
        img={people}
        content={
          <MessageContainer>
            <h1>663 million people in the world live without clean water</h1>
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
      <Explanation />
      <Testimonials />
      <ShortAboutUs />
    </>
  );
};

export default Homepage;

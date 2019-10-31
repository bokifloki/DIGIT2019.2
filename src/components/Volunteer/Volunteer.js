import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";
import FormModule from "./Form";

import {
  HeroContainer,
  MessageContainer,
  CTAButton,
  H1
} from "./Volunteer.scmp.js";
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

const Volunteer = () => {
  return (
    <>
      <Hero
        style={{ paddingTop: "60px" }}
        cHeight={250}
        linearGrad={"linear-gradient(#ebead6,#a8b9b5)"}
        content={
          <MessageContainer>
            <h1>Сакам да волонтирам</h1>
            <p>Зошто да волонтирам.</p>
          </MessageContainer>
        }
      />
      <div>
        <FormModule></FormModule>
      </div>

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

export default Volunteer;

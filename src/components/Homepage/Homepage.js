import React from "react";
import Icon from "react-icons-kit";
import {playCircleO} from 'react-icons-kit/fa/playCircleO'


import { HeroContainer, MessageContainer, CTAButton} from "./Homepage.scmp";
const heroImg =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg";

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

function Hero() {
  return (
    <HeroContainer>
      <HeroImg src={heroImg} alt="bgImg" />
      <Message>
        {()=>
        <MessageContainer>
          <h1>Why Water?</h1>
          <p>For people in developing countries, clean water can change everything.</p>
          <CTAButton> <Icon icon={playCircleO} size={20} ></Icon> Watch our video</CTAButton>
        </MessageContainer>}
      </Message>
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
      <Hero />
      <Explanation />
      <Testimonials />
      <ShortAboutUs />
    </>
  );
};

export default Homepage;

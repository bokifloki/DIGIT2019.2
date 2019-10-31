import React from "react";
import { HeroContainer, MessageContainer } from "./Hero.scmp";

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

export default function Hero({
  img,
  linearGrad,
  bgColor,
  content = <> </>,
  cHeight,
  horisontalPosition
}) {
  return (
    <HeroContainer cHeight={cHeight} bgColor={bgColor}>
      <HeroImg src={img} linearGrad={linearGrad} alt="bgImg" />
      <MessageContainer horisontalPosition={horisontalPosition}>
        <Message content={content} />
      </MessageContainer>
    </HeroContainer>
  );
}


// eslint-disable-next-line no-unused-expressions

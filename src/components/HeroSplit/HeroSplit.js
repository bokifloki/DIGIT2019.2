import React from "react";
import Hero from "../Hero/Hero";

import { HeroSplitContainer } from "./HeroSplit.scmp";

function HeroImg({ src, alt, linearGrad }) {
  const heroImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  const heroLinearGradStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: linearGrad
  };
  if (linearGrad) {
    return <div style={heroLinearGradStyle}></div>;
  }
  return <img style={heroImgStyles} src={src} alt={alt}></img>;
}

function HeroSplit({
  img,
  linearGrad,
  cHeight,
  leftContent = <></>,
  rightContent = <></>,
  lhp,
  rhp,
  rImg,
  rBgColor,
  rLinearGrad,
  lBgColor,
  lLinearGrad,
  lImg
}) {
  const noBg = Boolean(img) || Boolean(linearGrad);
  return (
    <HeroSplitContainer cHeight={cHeight} src={img} linearGrad={linearGrad}>
      <Hero
        noBg={noBg}
        cHeight={cHeight}
        content={leftContent}
        img={lImg}
        bgColor={lBgColor}
        linearGrad={lLinearGrad}
        horisontalPosition={lhp}
      />
      <Hero
        noBg={noBg}
        cHeight={cHeight}
        content={rightContent}
        img={rImg}
        bgColor={rBgColor}
        linearGrad={rLinearGrad}
        horisontalPosition={rhp}
      />
    </HeroSplitContainer>
  );
}

export default HeroSplit;

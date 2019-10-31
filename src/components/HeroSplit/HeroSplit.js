import React from "react";
import Hero from "../Hero/Hero";

import { HeroSplitContainer } from "./HeroSplit.scmp";

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

import React from "react";
import Hero from "../Hero/Hero";

import { HeroSplitContainer } from "./HeroSplit.scmp";

function HeroSplit({
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
  return (
    <HeroSplitContainer cHeight={cHeight}>
      <Hero
        cHeight={cHeight}
        content={leftContent}
        img={lImg}
        bgColor={lBgColor}
        linearGrad={lLinearGrad}
        horisontalPosition={lhp}
      />
      <Hero
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

import React from "react";
import SanoButton from "../../SanoButton/SanoButton";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";

const WelcomeContent = ({ content }) => {
  const { h1, p, buttonText } = content;
  return (
    <>
      <h1>{h1}</h1>
      <p>{p}</p>
      <SanoButton>
        <Icon icon={playCircleO} size={20}></Icon> {buttonText}
      </SanoButton>
    </>
  );
};

export default WelcomeContent;

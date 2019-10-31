import React from "react";
import { H1 } from "../Homepage.scmp";
const StatisticInformation = ({ content }) => {
  const { sprite, h1, p1, p2 } = content;
  return (
    <>
      <H1 bgImg={sprite}>{h1}</H1>
      <p>{p1}</p>
      <br />
      <p>{p2}</p>
    </>
  );
};

export default StatisticInformation;

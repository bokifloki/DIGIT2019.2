import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";
import FormModule from "./Form";
import Hero from "../Hero/Hero";
import { MessageContainer } from "./Volunteer.scmp.js";
const illustration =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg";

const people =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg";

const sprite =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-saturn-5a8595e0d8f85155761f87bf3d8ef574.png";

const Volunteer = () => {
  return (
    <>
      <Hero
        img={illustration}
        content={
          <MessageContainer>
            <h1>Сакам да волонтирам</h1>
            <p>
              For people in developing countries, clean water can change
              everything.
            </p>
          </MessageContainer>
        }
      />
      <Hero
        linearGrad={"linear-gradient(rgb(235, 234, 214), rgb(168, 185, 181))"}
        content={<FormModule />}
      />
    </>
  );
};

export default Volunteer;

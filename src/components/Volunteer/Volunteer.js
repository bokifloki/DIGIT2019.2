import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";
import FormModule from "./Form";
import Hero from "../Hero/Hero";
import { MessageContainer } from "./Volunteer.scmp.js";
import volunteerImg from "./volunteer.png";

const illustration = volunteerImg;

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
              За децата заболени од малигни болести, вашата помош може да смени
              сé.
            </p>
          </MessageContainer>
        }
      />
      <Hero linearGrad={"#EEEEEE, #EEEEEE"} content={<FormModule />} />
    </>
  );
};

export default Volunteer;

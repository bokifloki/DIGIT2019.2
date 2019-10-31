import React from "react";
import Icon from "react-icons-kit";
import { playCircleO } from "react-icons-kit/fa/playCircleO";
import { picture } from "react-icons-kit/ikons/picture";
import { microsoft } from "react-icons-kit/ikons/microsoft";
import { twitter } from "react-icons-kit/ikons/twitter";
import { apple } from "react-icons-kit/ikons/apple";
import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import SanoButton from "../SanoButton/SanoButton";
import Footer from "../Footer/Footer";
import HeroSplit from "../HeroSplit/HeroSplit";
import { MessageContainer } from "../Hero/Hero.scmp";
import {
  CTAButton,
  TestimonialsContainer,
  TestimonialContainer,
  H1,
} from "./Homepage.scmp";
const illustration =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg";

const people =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg";

const sprite =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-saturn-5a8595e0d8f85155761f87bf3d8ef574.png";

const sprite2 =
  "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-mars-cec3617ae7bd18a8baf716974ea51ca2.png";

function ShortAboutUs() {
  return <div></div>;
}

function Explanation() {
  return <div></div>;
}

function Testimonial({ testimonial }) {
  return (
    <TestimonialContainer>
      <div className="iconContainer">
        <Icon
          icon={testimonial.icon}
          style={{ color: testimonial.color }}
          size={30}
        />
      </div>
      <div className="textContainer">
        <h3>{testimonial.title}</h3>
        <h4>{testimonial.heading}</h4>
        <p>"{testimonial.quote}"</p>
        <span> - {testimonial.person}</span>
      </div>
    </TestimonialContainer>
  );
}

function Testimonials({ testimonials }) {
  return (
    <TestimonialsContainer>
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial.title} testimonial={testimonial} />
      ))}
    </TestimonialsContainer>
  );
}

const Homepage = () => {
  const testimonials = [
    {
      icon: picture,
      color: "red",
      heading:
        "In Africa alone, women spend 40 billion hours a year walking for water.",
      quote:
        "Access to clean water gives communities more time to grow food, earn an income, and go to school -- all of which fight poverty.",
      person: "List [Member]",
      title: "Time"
    },
    {
      icon: microsoft,
      color: "blue",
      heading:
        "Diseases from dirty water kill more people every year than all forms of violence, including war.",
      quote:
        "43% of those deaths are children under five years old. Access to clean water and basic sanitation can save around 16,000 lives every week.",
      person: "Maria [Volunteer]",
      title: "Health"
    },
    {
      icon: twitter,
      color: "green",
      heading:
        "Women are responsible for 72% of the water collected in Sub-Saharan Africa.",
      quote:
        "When a community gets water, women and girls get their lives back. They start businesses, improve their homes, and take charge of their own futures.",
      person: "Bill [Member]",
      title: "Empowerment"
    },
    {
      icon: apple,
      color: "yellow",
      heading: "Clean water helps keep kids in school, especially girls.",
      quote:
        "Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don’t have to stay home for a week out of every month.",
      person: "George [Volunteer]",
      title: "Education"
    }
  ];
  return (
    <>
      <Hero
        img={illustration}
        cHeight={600}
        content={
          <>
            <h1>Why Water?</h1>
            <p>
              For people in developing countries, clean water can change
              everything.
            </p>
            <CTAButton>
              <Icon icon={playCircleO} size={20}></Icon> Watch our video
            </CTAButton>
          </>
        }
      />
      <HeroSplit
        cHeight={500}
        leftContent={<>Hello</>}
        rightContent={<>Goodbye</>}
        lhp="rightMost"
        rhp="leftMost"
        img={illustration}
      />
      <Hero
        cHeight={500}
        linearGrad={"linear-gradient(#ebead6,#a8b9b5)"}
        content={
          <>
            <H1 bgImg={sprite}>
              663 million people in the world live without clean water
            </H1>
            <p>
              That’s nearly 1 in 10 people worldwide. Or, twice the population
              of the United States. The majority live in isolated rural areas
              and spend hours every day walking to collect water for their
              family. Not only does walking for water keep children out of
              school or take up time that parents could be using to earn money,
              but the water often carries diseases that can make everyone sick.
            </p>
            <br />
            <p>
              But access to clean water means education, income and health -
              especially for women and kids.
            </p>
          </>
        }
      />

      <Hero
        cHeight={700}
        img={people}
        content={<MessageContainer></MessageContainer>}
      />

      <Hero
        cHeight={996}
        linearGrad={"linear-gradient(#c9a77e,#c3e0dc)"}
        content={
          <>
            <H1 bgImg={sprite2}>Your can have a huge impact</H1>
            <Testimonials testimonials={testimonials} />
            <SanoButton position="right" variant="hollow" zoomIn={true}>
              Learn More
            </SanoButton>
          </>
        }
      />
      <Map />
      <Explanation />
      <ShortAboutUs />
    </>
  );
};

export default Homepage;

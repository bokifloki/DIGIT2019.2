import React from 'react';
import SanoButton from '../../SanoButton/SanoButton';
import Icon from "react-icons-kit";

import {
    TestimonialsContainer,
    TestimonialContainer,
    H1
  } from "../Homepage.scmp";
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
const TestimonialContent = ({content}) => {
    const {testimonials, sprite, h1, buttonText} = content;
    return (
        <>
            <H1 bgImg={sprite}>{h1}</H1>
            <Testimonials testimonials={testimonials} />
            <SanoButton position="left  " variant="hollow" zoomIn={true}>
              {buttonText}
            </SanoButton>
          </>
    );
}

export default TestimonialContent;
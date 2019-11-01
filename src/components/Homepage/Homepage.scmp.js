import styled from "styled-components";

 

export const CTAButton = styled.button`
  padding: 10px 14px;
  background-color: #369ff4;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  font-family: "Titillium Web", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;

  :hover {
    background-color: #70bbf7;
  }
`;

export const H1 = styled.h1`
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 22px;
  background: ${props => `url(${props.bgImg})`};
  background-size: cover;
  background-position: 90%;
  background-repeat: no-repeat;
`;

export const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid red; */
  width: 80vw;
`;
export const TestimonialContainer = styled.div`
  padding: 30px;
  height: 300px;
  /* border: 1px solid blue; */
  display: flex;

  .iconContainer {
    /* border: 1px solid black; */
    padding: 5px;
  }
  .textContainer {
    text-align: left;
    /* border: 1px solid black; */
    color: black !important;

    h3 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 17px;
      color: black;
    }

    h4 {
      line-height: 1.2em;
      font-size: 23px;
      padding-bottom: 20px;
      font-weight: 500;
    }
    p {
      font-size: 19px;
      line-height: 1.3em;
      font-style: italic;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }

    span {
      float: right;
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

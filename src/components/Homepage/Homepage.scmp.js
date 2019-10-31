import styled from "styled-components";

export const HeroContainer = styled.div`
  ${props => (props.cHeight ? `height:${props.cHeight}px` : "height:500px")}
  /* border: 1px solid red; */
    background-size:contain;
  ${props => (props.bgImg ? `background: url(${props.bgImg}); ` : null)}
  position: relative;
`;

export const MessageContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  font-family: "Roboto", sans-serif;

  p {
    font-size: 23px;
  }
`;

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
export const SanoButton = styled.button`
  padding: 10px 14px;
  background-color: #369ff4;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  font-family: "Titillium Web", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;

  ${props =>
    props.variant === "hollow"
      ? `
  padding: 3px 5px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  font-weight: 400;
  float:${props.position}
  margin-left: 60px;
  outline: none;
  margin-bottom: 20px;
  `
      : null}
  transition:all 0.2s ease-in-out;
  :hover {
    background-color: transparent;

    ${props =>
      props.zoomIn
        ? `
    transform: scale(1.1)
 
  `
        : null}
  }
`;

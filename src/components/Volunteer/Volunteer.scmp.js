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
  padding: 10px;
  background: ${props => `url(${props.bgImg})`};
  background-size: cover;
  background-position: 90%;
  background-repeat: no-repeat;
`;

import React from 'react';
import styled from 'styled-components';

export const SanoButtonWrapper = styled.button`
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



const SanoButton = (props) => {
    return (
        <SanoButtonWrapper {...props}/>
    );
}

export default SanoButton;
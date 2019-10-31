import styled from 'styled-components';
export const HeroContainer = styled.div`
  ${props => (props.cHeight ? `height:${props.cHeight}px` : "height:500px")}
  /* border: 1px solid red; */
    background-size:contain;
  ${props => (props.bgImg ? `background: url(${props.bgImg}); ` : null)}

  ${props => (props.bgColor ? `background-color:${props.bgColor}; ` : null)}
  position: relative;
`;

export const MessageContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);

  ${props =>
    props.horisontalPosition === "left"
      ? `
      top: 40%;
      left: 30%;
      transform: translate(-30%, -40%);
  `
      : null}

  ${props =>
    props.horisontalPosition === "right"
      ? `
      top: 40%;
      left: 70%;
      transform: translate(-70%, -40%);
  `
      : null}

  font-family: "Roboto", sans-serif;

  p {
    font-size: 23px;
  }
`;
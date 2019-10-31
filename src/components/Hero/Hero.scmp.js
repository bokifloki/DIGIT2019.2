import styled from 'styled-components';
export const HeroContainer = styled.div`
  ${props => (props.cHeight ? `height:${props.cHeight}px` : "height:500px")}
  /* border: 1px solid red; */
    background-size:contain;
  ${props => (props.bgImg ? `background: url(${props.bgImg}); ` : null)}
  position: relative;
`;
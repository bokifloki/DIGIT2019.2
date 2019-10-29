import styled from 'styled-components';

export const HeroContainer = styled.div`
    height: 718px;
    border: 1px solid red;
    background-size:contain;
    ${props => props.bgImg ?  `background: url(${props.bgImg}); `: null}
    position: relative;
`;


export const MessageContainer = styled.div`
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-40%);
    font-family: 'Roboto', sans-serif;

    p{
        font-size: 23px;
    }
`

export const CTAButton = styled.button`
    padding: 10px 14px;
    background-color: #369ff4;
    font-size:15px;
    text-transform: uppercase;
    border:none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    :hover{
        background-color: #70BBF7;
    }
`
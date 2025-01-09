import styled, { keyframes, css } from "styled-components";

interface Props {
  isBlinking?: boolean;
}

const blinkingDash = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const DivContainer = styled.section`
  display: flex;
  padding-top: 75px;
  padding-bottom: 50px;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const GreetingsText = styled.h1`
  font-size: 4rem;
  color: white;
`;

export const AnimatedTextContainer = styled.div`
  display: flex;
`;

export const AnimatedText = styled.p`
  color: white;
  font-size: 4rem;
`;

export const AnimatedDash = styled.span<Props>`
  font-size: 4rem;
  font-weight: 400;
  color: white;
  animation: ${(props) =>
    props.isBlinking
      ? css`
        ${blinkingDash} 1s infinite
      `
      : "none"};
  animation-timing-function: steps(1, end);
`;
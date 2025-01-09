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

export const GreetingsText = styled.h1`
  font-size: 42px;
  color: white;
`;

export const AnimatedTextContainer = styled.div`
  display: flex;
`;

export const AnimatedText = styled.p`
  color: white;
  font-size: 42px;
`;

export const AnimatedDash = styled.span<Props>`
  font-size: 22px;
  font-weight: 400;
  color: black;
  animation: ${(props) =>
    props.isBlinking
      ? css`
        ${blinkingDash} 1s infinite
      `
      : "none"};
  animation-timing-function: steps(1, end);
`;
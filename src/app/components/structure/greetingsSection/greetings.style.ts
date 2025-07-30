import styled, { keyframes, css } from "styled-components";

interface Props {
  $isBlinking?: boolean;
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
  padding-top: 50px;
  padding-bottom: 25px;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  transition: width 0.6s ease;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem;
`;

export const AnimatedTextContainer = styled.div`
  display: flex;
`;

export const AnimatedText = styled.p`
  color:rgb(186, 188, 196);
  font-size: 1.5rem;

  body.light & {
    color:rgb(83, 80, 80);
  }
`;

export const AnimatedDash = styled.span<Props>`
  font-size: 1.5rem;
  font-weight: 400;
  animation: ${(props) =>
    props.$isBlinking
      ? css`
        ${blinkingDash} 1s infinite
      `
      : "none"};
  animation-timing-function: steps(1, end);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  padding-top: 80%;
  overflow: hidden;
  border-radius: 50%;
`;
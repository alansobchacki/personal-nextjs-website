import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 10px;
  transition: width 0.6s ease;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-bottom: 20px;
`;

export const CustomAnchor = styled.a`
  color: rgb(186, 188, 196);

  body.light & {
    color: rgb(83, 80, 80);
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  gap: 20px;
`;

export const ImageWrapper = styled.a<{ $Theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $Theme }) =>
  $Theme === 'light' ? "#eeeeee" : "#253146"};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;



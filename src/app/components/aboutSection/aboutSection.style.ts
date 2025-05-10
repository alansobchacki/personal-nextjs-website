import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  padding-top: 15px;
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
  gap: 10px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-bottom: 20px;
`;

export const CustomAnchor = styled.a`
  text-decoration: underline;
  color: rgb(186, 188, 196);

  body.light & {
    color: rgb(83, 80, 80);
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

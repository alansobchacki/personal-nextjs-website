import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  padding-top: 75px;
  padding-bottom: 50px;

  @media (max-width: 750px) {
    padding-top: 15px;
  }
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

export const Title = styled.h2`
  font-size: 1.5rem;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;

  @media (max-width: 450px) {
    font-size: 0.875rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  gap: 5px;
`;

export const Email = styled.p`

`;
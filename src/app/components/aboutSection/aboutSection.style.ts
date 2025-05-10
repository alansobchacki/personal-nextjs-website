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

export const Description = styled.p`
  font-size: 1.1rem;

  @media (max-width: 450px) {
    font-size: 0.875rem;
  }
`;
import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 25px;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 35px;
  transition: width 0.6s ease;

  @media (max-width: 1000px) {
    width: 90%;
    gap: 50px;
  }
`;
import styled from "styled-components";

export const DivContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 25px;
  box-sizing: border-box;
`;

export const Copyright = styled.p`
  font-size: 1.2rem;
`;

export const Email = styled.p`
  font-size: 1.2rem;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.6;
  }
`;
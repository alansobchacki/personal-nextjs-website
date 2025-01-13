import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  height: 100vh;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color:rgb(8, 20, 10);
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  list-style: none;
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: 1.2rem;
  transition: opacity 0.5s ease;
`;

export const GameTitle = styled.h3`
  font-size: 1.2rem;
`;

export const GameDescription = styled.p`
`;

export const GameObservation = styled.p`
  font-size: 0.8rem;
  margin-top: -5px;
`;

export const TechStackContainer = styled.div`
  display: flex;
  gap: 10px;
`;
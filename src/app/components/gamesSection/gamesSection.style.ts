import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 100%;
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
  margin-bottom: 15px;
  text-align: center;
`;

export const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  padding-bottom: 35px;
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

export const GameTitle = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background: none;
  border: 2px solid white;
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
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
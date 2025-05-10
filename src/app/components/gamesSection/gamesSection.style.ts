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
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;
  padding-bottom: 35px;
  list-style: none;
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  width: 30%;
  padding: 20px;
  height: 200px;
  gap: 10px;
  font-size: 1.2rem;
  transition: transform 0.3s ease, border 0.3s ease;
  cursor: pointer;

  background: rgb(39, 45, 70);
  body.light & {
    background: rgb(97, 128, 212);
  }

  border: 2px solid rgb(178, 201, 214);
  body.light & {
    border: 2px solid white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 2px solid rgb(97, 147, 212);
  }
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
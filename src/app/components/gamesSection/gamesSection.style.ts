import styled from "styled-components";

export const DivContainer = styled.section`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
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
  margin-top: 15px;
`;

export const GameTitleContainer = styled.div`
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
  justify-content: center;
  gap: 15px;
  padding-bottom: 35px;
  list-style: none;
`;

export const Game = styled.div`
  width: 30%;
  min-height: 200px;
  min-width: 175px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  font-size: 1.2rem;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, border 0.3s ease;

  background: rgb(36, 40, 54);
  border: 4px solid rgb(178, 201, 214);

  body.light & {
    background: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 4px solid rgb(97, 147, 212);
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const GameTitle = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  background: linear-gradient(135deg, #5f8fd3, #3a66a3);
  color: white;

  body.light & {
    background: linear-gradient(135deg, #9cc6f2, #6591d9);
    color: #0e1a2b;
  }
`;

export const GameDescription = styled.p`
  font-size: 1rem;

  body.light & {
    color: black;
  }
`;

export const GameObservation = styled.p`
  font-size: 0.8rem;
  margin-top: -5px;
  text-align: center;
`;

export const TechStackContainer = styled.div`
  display: flex;
  gap: 10px;
  transition: padding 0.4s ease, border-radius 0.4s ease, background-color 0.4s ease;

  body.light & {
    background-color:rgb(29, 44, 66);
    padding: 5px;
    border-radius: 8px;
  }
`;
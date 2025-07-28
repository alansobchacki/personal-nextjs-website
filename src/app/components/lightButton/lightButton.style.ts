import styled from "styled-components";

export const DivContainer = styled.header<{ $Theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $Theme }) =>
  $Theme === 'light' ? "lightgray" : "#253146"};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
`;

export const StyledButton = styled.button<{ $Theme: string }>`
  background-image: ${({ $Theme }) =>
    $Theme === 'light' ? "url('light-icon.svg')" : "url('dark-icon.svg')"};
  background-size: cover;
  background-position: center;
  background-color: transparent;
  border-radius: 6px;
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: rotate(180deg);
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;

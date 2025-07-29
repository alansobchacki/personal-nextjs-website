import styled from 'styled-components';

export const DivContainer = styled.header<{ $Theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $Theme }) =>
    $Theme === 'light' ? 'lightgray' : '#253146'};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  transition: opacity 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

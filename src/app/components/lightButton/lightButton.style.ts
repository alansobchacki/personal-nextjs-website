import styled from "styled-components";

export const DivContainer = styled.header`
  display: flex;
  padding-left: 5px;
`;

export const StyledButton = styled.button<{ Theme: string }>`
  background-image: ${({ Theme }) =>
    Theme === 'light' ? "url('light-icon.svg')" : "url('dark-icon.svg')"};
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

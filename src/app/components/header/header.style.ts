import styled from "styled-components";

export const DivContainer = styled.header`
  display: flex;
  padding-top: 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid #253146;
  width: 100%;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  max-height: 50px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const StyledUnorderedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  transition: opacity 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 450px) {
    font-size: 0.875rem;
  }
`;
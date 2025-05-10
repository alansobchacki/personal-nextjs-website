import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

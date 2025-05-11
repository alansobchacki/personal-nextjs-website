import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #28253e;
  transition: width 0.6s ease;

  body.light & {
    background-color: white;
  }

  @media (max-width: 750px) {
    width: 90%;
  }
`;

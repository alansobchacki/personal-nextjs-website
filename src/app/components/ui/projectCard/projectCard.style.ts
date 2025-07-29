import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  padding-bottom: 20px;
  color: rgb(186, 188, 196);

  body.light & {
    color: rgb(83, 80, 80);
  }
`;



import styled from "styled-components";

export const DivContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 25px;
  width: 100%;
`;

export const Copyright = styled.p`
  font-size: 0.95rem;
  color: rgb(186, 188, 196);

  body.light & {
    color: rgb(83, 80, 80);
  }

  @media (max-width: 450px) {
    font-size: 0.875rem;
  }
`;
import styled from "styled-components";

export const DivContainer = styled.footer`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: auto;
`;

export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 25px;
  box-sizing: border-box;
`;

export const DivSideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.p`
  font-size: 24px;
`;

export const Arrow = styled.span`
  position: relative;
  top: 20%;
  transform: rotate(50deg);
  display: inline-block;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;

  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
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

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  height: 26px;
  text-align: center;
  color: green;
  border: 1px solid green;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.875rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 64, 128, 0.3);
  }

  background-color: transparent !important;
`;

export const IconWrapper = styled.div<{ $Theme: string }>`
  display: flex;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ $Theme }) =>
  $Theme === 'light' ? "#eeeeee" : "#253146"};
`;

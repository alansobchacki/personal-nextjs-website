'use client'

import { useTheme } from '../../../context/themeContext';
import { DivContainer, StyledButton } from './lightButton.style';

export default function LightButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DivContainer>
      <StyledButton Theme={theme} onClick={toggleTheme} />
    </DivContainer>
  );
}
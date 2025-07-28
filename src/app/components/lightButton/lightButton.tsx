'use client'

import { useTheme } from '../../context/themeContext';
import { useEasterEgg } from '../../context/easterEggContext';
import { DivContainer, StyledButton } from './lightButton.style';

export default function LightButton() {
  const { theme, toggleTheme } = useTheme();
  const { registerClick } = useEasterEgg();

  const handleClick = () => {
    toggleTheme();
    registerClick();
  };

  return (
    <DivContainer $Theme={theme} onClick={handleClick}>
      <StyledButton $Theme={theme} />
    </DivContainer>
  );
}
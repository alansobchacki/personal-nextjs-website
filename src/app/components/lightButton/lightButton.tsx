'use client';

import { useTheme } from '../../context/themeContext';
import { useEasterEgg } from '../../context/easterEggContext';
import { DivContainer } from './lightButton.style';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function LightButton() {
  const { theme, toggleTheme } = useTheme();
  const { registerClick } = useEasterEgg();

  const handleClick = () => {
    toggleTheme();
    registerClick();
  };

  return (
    <DivContainer $Theme={theme} onClick={handleClick}>
      {theme === 'dark' ? (
        <LightModeOutlinedIcon sx={{ fontSize: 25 }} />
      ) : (
        <DarkModeOutlinedIcon sx={{ fontSize: 25, color: 'black' }} />
      )}
    </DivContainer>
  );
}

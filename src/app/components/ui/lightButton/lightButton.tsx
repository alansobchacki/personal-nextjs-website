'use client';

import { useTheme } from '../../../context/themeContext';
import { DivContainer } from './lightButton.style';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function LightButton() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
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

'use client'

import { 
  DivContainer, 
  StyledButton
 } from "./lightButton.style";
import { useState, useEffect } from "react";

export default function LightButton() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    document.body.className = systemTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <DivContainer>
      <StyledButton Theme={theme} onClick={toggleTheme} />
    </DivContainer>
  )
}

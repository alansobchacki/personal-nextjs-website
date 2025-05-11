'use client'

import { 
  DivContainer, 
  DivSubContainer,
  StyledUnorderedList,
  ListItem
 } from "./header.style";
import LightButton from '../lightButton/lightButton';

 export default function Header() { 
  return (
    <DivContainer id="header">
      <DivSubContainer>
        <LightButton />
        <StyledUnorderedList>
          <a href="https://github.com/alansobchacki" target="_blank" rel="noopener noreferrer">
            <ListItem>Projects</ListItem>
          </a>
          <span>|</span>
          <a
            href="/Alan Sobchacki Resume.pdf"
            download="Alan Sobchacki Resume.pdf"
          >
            <ListItem>Resume ↓</ListItem>
          </a>
        </StyledUnorderedList>
      </DivSubContainer>
    </DivContainer>
  )
}
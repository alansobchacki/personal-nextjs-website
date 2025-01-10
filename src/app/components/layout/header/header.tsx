'use client'

import { 
  DivContainer, 
  DivSubContainer,
  StyledUnorderedList,
  ListItem
 } from "./header.style";
import LightButton from '../../common/lightButton/lightButton';
// import Image from 'next/image';

 export default function Header() { 
  return (
    <DivContainer id="header">
      <DivSubContainer>
        <LightButton />
        <StyledUnorderedList>
          <a href="https://www.redbubble.com/people/Ripper19/shop" target="_blank" rel="noopener noreferrer">
            <ListItem>Merch</ListItem>
          </a>
          <a href="https://github.com/alansobchacki" target="_blank" rel="noopener noreferrer">
            <ListItem>Projects</ListItem>
          </a>
        </StyledUnorderedList>
      </DivSubContainer>
    </DivContainer>
  )
}
'use client'

import { 
  DivContainer, 
  DivSubContainer,
  StyledUnorderedList,
  ListItem
 } from "./header.style";
import LightButton from '../../ui/lightButton/lightButton';

 export default function Header() { 
  return (
    <DivContainer id="header">
      <DivSubContainer>
        <StyledUnorderedList>
          <a
            href="/Alan Sobchacki Resume.pdf"
            download="Alan Sobchacki Resume.pdf"
          >
            <ListItem>Resume</ListItem>
          </a>
          <a>
            <ListItem>Merch</ListItem>
          </a>
        </StyledUnorderedList>
        <LightButton />
      </DivSubContainer>
    </DivContainer>
  )
}
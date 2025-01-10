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
          <ListItem>Merch</ListItem>
          <ListItem>Projects</ListItem>
        </StyledUnorderedList>
      </DivSubContainer>
    </DivContainer>
  )
}
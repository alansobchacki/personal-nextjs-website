'use client'

import { 
  DivContainer, 
  DivSubContainer,
  StyledUnorderedList,
  ListItem
 } from "./header.style";

export default function Header() { 
  return (
    <DivContainer id="header">
      <DivSubContainer>
        <StyledUnorderedList>
          <ListItem>Merch</ListItem>
          <ListItem>Projects</ListItem>
        </StyledUnorderedList>
      </DivSubContainer>
    </DivContainer>
  )
}
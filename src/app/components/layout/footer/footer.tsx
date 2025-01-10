'use client'

import { 
  DivContainer, 
  DivSubContainer,
  Copyright,
  Email
} from "./footer.style";

export default function Footer() { 
  return (
    <DivContainer id="footer">
      <DivSubContainer>
        <Copyright>&copy; 2025 | Alan Sobchacki</Copyright>
        <a href="mailto:a.sobchack@gmail.com">
          <Email>a.sobchack@gmail.com</Email>
        </a>
      </DivSubContainer>
    </DivContainer>
  )
}
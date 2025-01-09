'use client'

import { DivContainer, DivSubContainer, Copyright } from "./footer.style";
// import Image from 'next/image';

export default function Footer() { 
  return (
    <DivContainer>
      <DivSubContainer>
        <Copyright>&copy; 2025 Alan Sobchacki. All rights reserved.</Copyright>
      </DivSubContainer>
    </DivContainer>
  )
}
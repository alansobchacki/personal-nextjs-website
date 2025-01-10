'use client'

import { 
  DivContainer,
  DivSubContainer,
  Title,
  Description,
  SocialIcons,
} from './contactSection.style';
// import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <DivContainer id="contact-section">
      <DivSubContainer>
        <Title>Let&apos;s Connect</Title>
        <Description>
          If you want to get in touch with me about something, 
          reach out on social media or send me an email.
        </Description>
        <SocialIcons>
          <Image src="/github-mark-white.svg" alt="Github icon" width={24} height={24} />
          <Image src="/linkedin.svg" alt="LinkedIn icon" width={24} height={24} />
          <Image src="/gmail.svg" alt="Gmail icon" width={24} height={24} />
        </SocialIcons>
      </DivSubContainer>
    </DivContainer>
  )
}
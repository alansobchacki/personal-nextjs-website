'use client'

import { 
  DivContainer,
  DivSubContainer,
  Title,
  Description,
  SocialIcons,
} from './contactSection.style';
import { useTheme } from '../../context/themeContext';
import Image from 'next/image';

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <DivContainer id="contact-section">
      <DivSubContainer>
        <Title>Let&apos;s Connect</Title>
        <Description>
          If you want to get in touch with me about something, 
          reach out on social media or send me an email.
        </Description>
        <SocialIcons>
          <a href="https://github.com/alansobchacki" target="_blank" rel="noopener noreferrer">
            <Image
              src={theme === 'dark' ? '/github-mark-light.svg' : '/github-mark-dark.svg'}
              alt="Github icon"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/alansobchacki/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn icon" width={24} height={24} />
          </a>
          <a href="mailto:a.sobchack@gmail.com">
            <Image src="/gmail.svg" alt="Gmail icon" width={24} height={24} />
          </a>
          <a href="https://singularity-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/singularity.png" alt="Singularity icon" width={24} height={24} />
          </a>
        </SocialIcons>
      </DivSubContainer>
    </DivContainer>
  )
}
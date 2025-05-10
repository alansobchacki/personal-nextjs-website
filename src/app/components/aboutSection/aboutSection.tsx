'use client'

import { 
  DivContainer,
  DivSubContainer,
  Description
} from './aboutSection.style';

export default function AboutSection() {

  return (
    <DivContainer id="about-section">
      <DivSubContainer>
        <Description>
          I&apos;m currently working at HiveFuse as a Full Stack Software Engineer where I help 
          develop and maintain our internal applications using React, Next.js, Nest.js, and PostgreSQL.
        </Description>
      </DivSubContainer>
    </DivContainer>
  )
}
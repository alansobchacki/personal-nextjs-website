'use client'

import { DivContainer, DivSubContainer, TechStackContainer } from "./skillsSection.style";
import Image from 'next/image';

export default function SkillsSection() { 
  return (
    <DivContainer>
      <DivSubContainer>
      Tech stack:
      <TechStackContainer>
        <Image src="/javascript.png" alt="JavaScript icon" width={50} height={50} />
        <Image src="/typescript.png" alt="TypeScript icon" width={50} height={50} />
        <Image src="/ruby.png" alt="Ruby icon" width={50} height={50} />
        <Image src="/react.png" alt="React icon" width={50} height={50} />
        <Image src="/next_js.png" alt="Next.js icon" width={50} height={50} />
        <Image src="/node_js.png" alt="Node.js icon" width={50} height={50} />
        <Image src="/nest_js.png" alt="Nest.js icon" width={50} height={50} />
      </TechStackContainer>
      </DivSubContainer>
    </DivContainer>
  )
}
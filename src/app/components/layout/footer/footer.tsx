'use client'

import { 
  DivContainer, 
  DivSubContainer,
  DivSideContent,
  Title,
  Arrow,
  IconContainer
} from "./footer.style";
import Image from 'next/image';

export default function Footer() { 
  return (
    <DivContainer>
      <DivSubContainer>
        <DivSideContent>
          <Title>Skills <Arrow>↷</Arrow></Title>
          <IconContainer>
            <Image src="/javascript.png" alt="JavaScript icon" width={50} height={50} />
            <Image src="/typescript.png" alt="TypeScript icon" width={50} height={50} />
            <Image src="/react.png" alt="React icon" width={50} height={50} />
            <Image src="/next_js.png" alt="Next.js icon" width={50} height={50} />
            <Image src="/node_js.png" alt="Node.js icon" width={50} height={50} />
            <Image src="/nest_js.png" alt="Nest.js icon" width={50} height={50} />
            <Image src="/figma.png" alt="Figma icon" width={50} height={50} />
            <Image src="/ruby.png" alt="Ruby icon" width={50} height={50} />
          </IconContainer>
        </DivSideContent>
        <DivSideContent>
          <Title>Contact <Arrow>↷</Arrow></Title>
          <IconContainer>
            <Image src="/LinkedIN.svg" alt="Figma icon" width={50} height={50} />
            <Image src="/Github.svg" alt="Ruby icon" width={50} height={50} />
          </IconContainer>
        </DivSideContent>
      </DivSubContainer>
    </DivContainer>
  )
}
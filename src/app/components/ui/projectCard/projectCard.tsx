import { DivContainer, LeftContainer, RightContainer, Title, Description } from './projectCard.style';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <DivContainer>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftContainer>
      <RightContainer>
        <Image
          src="/singularity-preview.gif"
          alt="Project Alpha Preview"
          width={320}
          height={180}
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
      </RightContainer>
    </DivContainer>
  );
}

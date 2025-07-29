import { DivContainer, LeftContainer, RightContainer, Title, Description } from './projectCard.style';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  alt?: string;
};

export default function ProjectCard({ title, description, image, alt }: ProjectCardProps) {
  return (
    <DivContainer>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftContainer>
      <RightContainer>
        <Image
          src={image}
          alt={alt || `${title}'s preview image`}
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

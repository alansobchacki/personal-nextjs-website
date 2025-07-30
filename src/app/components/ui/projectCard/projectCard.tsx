import { 
  DivContainer, 
  LeftContainer, 
  RightContainer, 
  Title, 
  Description, 
  TagContainer, 
  Tag,
  ImageWrapper,
  IconWrapper
} from './projectCard.style';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '../../../context/themeContext';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  alt?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, image, url, alt, tags }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <DivContainer>
      <LeftContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {tags && (
          <TagContainer>
            {tags.map((tag, index) => 
              <Tag key={index}>
                {tag}
              </Tag>
            )}
          </TagContainer>
        )}
      </LeftContainer>
      <RightContainer>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ImageWrapper>
            <IconWrapper $Theme={theme}>
              <GitHubIcon />
            </IconWrapper>
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
          </ImageWrapper>
        </a>
      </RightContainer>
    </DivContainer>
  );
}

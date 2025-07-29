"use client";

import {
  DivContainer,
  DivSubContainer,
  Description,
  CustomAnchor,
  SocialIconsContainer,
  ImageWrapper
} from "./aboutSection.style";
import { useTheme } from "../../../context/themeContext";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <DivContainer id="about-section">
      <DivSubContainer>
        <Description>
          👋
        </Description>
        <Description>
          I&apos;m currently working at{" "}
          <CustomAnchor
            href="https://www.linkedin.com/company/hive-fuse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HiveFuse
          </CustomAnchor>{" "}
          as a full stack software engineer where I help develop and maintain
          our internal applications using mostly React, Next.js, and Nest.js.
        </Description>
        <Description>
          When I&apos;m not programming, you will find me playing boardgames,
          grilling, swimming, or just chilling. Maybe even designing some witty
          t-shirts.
        </Description>
        <Description>
          If you want to get in touch with me about
          something, feel free to reach out.
        </Description>

        <SocialIconsContainer>
          <ImageWrapper $Theme={theme} href="https://github.com/alansobchacki" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: 28 }}/>
          </ImageWrapper>

          <ImageWrapper $Theme={theme} href="https://www.linkedin.com/in/alansobchacki/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: 28 }}/>
          </ImageWrapper>

          <ImageWrapper $Theme={theme} href="mailto:a.sobchack@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailOutlinedIcon sx={{ fontSize: 28 }} />
          </ImageWrapper>
        </SocialIconsContainer>

        <Description>
          Or maybe check out some of the cool stuff I built on my spare time:
        </Description>
      </DivSubContainer>
    </DivContainer>
  );
}

"use client";

import {
  DivContainer,
  DivSubContainer,
  Description,
  CustomAnchor,
  SocialIconsContainer,
  SocialIcon,
} from "./aboutSection.style";
import { useTheme } from "../../context/themeContext";
import Image from "next/image";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <DivContainer id="about-section">
      <DivSubContainer>
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
          grilling, or just chilling. If you want to get in touch with me about
          something, feel free to reach out on social media:
        </Description>

        <SocialIconsContainer>
          <SocialIcon
            href="https://github.com/alansobchacki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={
                theme === "dark"
                  ? "/github-mark-light.svg"
                  : "/github-mark-dark.svg"
              }
              alt="Github icon"
              width={24}
              height={24}
            />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/alansobchacki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={24}
              height={24}
            />
          </SocialIcon>
          <SocialIcon
            href="https://singularity-gules.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/singularity.png"
              alt="Singularity icon"
              width={24}
              height={24}
            />
          </SocialIcon>
        </SocialIconsContainer>

        <Description>
          Or just send me an{" "}
          <CustomAnchor href="mailto:a.sobchack@gmail.com">email</CustomAnchor>.
        </Description>
      </DivSubContainer>
    </DivContainer>
  );
}

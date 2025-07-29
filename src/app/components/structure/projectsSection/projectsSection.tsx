'use client'

import { 
  DivContainer,
  DivSubContainer,
} from './projectsSection.style';
import ProjectCard from "../../ui/projectCard/projectCard";

export default function ContactSection() {
  return (
    <DivContainer id="projects-section">
      <DivSubContainer>
        <ProjectCard title={"Singularity"} description={"An AI-powered social media platform for humans and bots"}/>
        <ProjectCard title={"Singularity"} description={"An AI-powered social media platform for humans and bots"}/>
        <ProjectCard title={"Singularity"} description={"An AI-powered social media platform for humans and bots"}/>
        <ProjectCard title={"Singularity"} description={"An AI-powered social media platform for humans and bots"}/>
        <ProjectCard title={"Singularity"} description={"An AI-powered social media platform for humans and bots"}/>
      </DivSubContainer>
    </DivContainer>
  )
}
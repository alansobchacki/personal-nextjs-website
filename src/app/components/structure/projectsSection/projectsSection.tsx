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
        <ProjectCard 
          title={"Singularity"} 
          description={"An AI-powered social media platform for humans and bots."}
          image={"/singularity-preview.gif"}
        />
        <ProjectCard 
          title={"Hidden Syndicate"} 
          description={"A full stack desktop 'hidden object game'."}
          image={"/hidden-syndicate.png"}
        />
        <ProjectCard 
          title={"Chess"} 
          description={"A 'hot-seat' Ruby command-line game of Chess."}
          image={"/ruby-chess.jpg"}
        />
      </DivSubContainer>
    </DivContainer>
  )
}
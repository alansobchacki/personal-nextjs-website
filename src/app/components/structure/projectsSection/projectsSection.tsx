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
          tags={["TypeScript", "Nest.js", "TypeORM", "PostgreSQL", "Docker", "Redis", "Jest", "React", "Tailwind", "Cypress", "Jotai", "mUI"]}
          url={"https://github.com/alansobchacki/singularity"}
        />
        <ProjectCard 
          title={"Hidden Syndicate"} 
          description={"A full stack desktop 'hidden object game'."}
          image={"/hidden-syndicate.png"}
          tags={["JavaScript", "Node.js", "Express", "Prisma", "PostgreSQL", "React", "Styled-Components"]}
          url={"https://github.com/alansobchacki/hidden-syndicate"}
        />
        <ProjectCard 
          title={"Chess"} 
          description={"A 'hot-seat' Ruby command-line game of Chess."}
          image={"/ruby-chess.jpg"}
          tags={["Ruby"]}
          url={"https://github.com/alansobchacki/odin-chess"}
        />
        <ProjectCard 
          title={"Battleship"} 
          description={"A browser-based game of Battleship against an AI."}
          image={"/battleship.png"}
          tags={["JavaScript", "HTML", "CSS"]}
          url={"https://github.com/alansobchacki/odin-js-battleship"}
        />
        <ProjectCard 
          title={"Memory Game"} 
          description={"A browser-based memory game where you must pick 12 unique cards in a row."}
          image={"/memory_game.jpg"}
          tags={["React", "Vite", "CSS"]}
          url={"https://github.com/alansobchacki/odin-react-memory-game"}
        />
      </DivSubContainer>
    </DivContainer>
  )
}
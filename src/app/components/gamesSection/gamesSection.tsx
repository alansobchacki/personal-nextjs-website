'use client'

import { 
  DivContainer,
  DivSubContainer,
  TitleContainer,
  Title,
  GamesList,
  Game,
  GameTitle,
  GameDescription,
  GameObservation,
  TechStackContainer
} from './gamesSection.style';
import Image from 'next/image';

export default function GamesSection() {
  return (
    <DivContainer>
      <DivSubContainer>
        <Title>You found the super secret FUN area!</Title>
        <GamesList>
          <Game>
            <TitleContainer>
              <a href="https://odin-react-wheres-waldo.vercel.app/game" target="_blank" rel="noopener noreferrer">
                <GameTitle>Hidden Syndicate ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin-react-wheres-waldo" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>Can you find the 3 targets fast enough?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={32} height={32} alt="React icon" />
              <Image src="/vite.png" width={32} height={32} alt="Vite icon" />
              <Image src="/node_js.png" width={32} height={32} alt="Node.js icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <TitleContainer>
              <a href="https://odin-react-memory-game.vercel.app/" target="_blank" rel="noopener noreferer">
                <GameTitle>Memory Game ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin-react-memory-game" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>Can you pick 12 cards in a unique sucession?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={32} height={32} alt="React icon" />
              <Image src="/vite.png" width={32} height={32} alt="Vite icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <TitleContainer>
              <a href="https://alansobchacki.github.io/odin-js-battleship/" target="_blank" rel="noopener noreferer">
                <GameTitle>Battleship ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin-js-battleship" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>Can you sink the enemy ships before they sink yours?</GameDescription>
            <TechStackContainer>
              <Image src="/javascript.png" width={32} height={32} alt="Javascript icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <TitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-chess" target="_blank" rel="noopener noreferer">
                <GameTitle>Chess * ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin-chess" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>How about a match of chess against... yourself?</GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={32} height={32} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <TitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-hangman" target="_blank" rel="noopener noreferer">
                <GameTitle>Hangman * ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin_hangman" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>Can you guess the word before the hangman gets hanged(?)</GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={32} height={32} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <TitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-mastermind" target="_blank" rel="noopener noreferer">
                <GameTitle>Mastermind * ►</GameTitle>
              </a>
              <a href="https://github.com/alansobchacki/odin-mastermind" target="_blank" rel="noopener noreferrer">
                <Image src={"/github-mark-light.svg"} width={20} height={20} alt="Github icon" />
              </a>
            </TitleContainer>
            <GameDescription>
              Crack the code or build a code against your robotic opponent.
            </GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={32} height={32} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
        </GamesList>
        <GameObservation>*requires a Replit account</GameObservation>
      </DivSubContainer>
    </DivContainer>
  )
}
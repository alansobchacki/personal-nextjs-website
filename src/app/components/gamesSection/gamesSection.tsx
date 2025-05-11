'use client'

import { 
  DivContainer,
  DivSubContainer,
  TitleContainer,
  Title,
  GameTitleContainer,
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
        <TitleContainer>
          <Title>
            You found the secret fun zone!
          </Title>
        </TitleContainer>

        <GamesList>
          <Game>
            <GameTitleContainer>
              <a href="https://odin-react-wheres-waldo.vercel.app/game" target="_blank" rel="noopener noreferrer">
                <GameTitle>Hidden Syndicate ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>Can you find the 3 targets fast enough?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={20} height={20} alt="React icon" />
              <Image src="/vite.png" width={20} height={20} alt="Vite icon" />
              <Image src="/node_js.png" width={20} height={20} alt="Node.js icon" />
              <Image src="/javascript.png" width={20} height={20} alt="Javascript icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitleContainer>
              <a href="https://odin-react-memory-game.vercel.app/" target="_blank" rel="noopener noreferer">
                <GameTitle>Memory Game ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>Can you pick 12 cards in a unique sucession?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={20} height={20} alt="React icon" />
              <Image src="/vite.png" width={20} height={20} alt="Vite icon" />
              <Image src="/javascript.png" width={20} height={20} alt="Javascript icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitleContainer>
              <a href="https://alansobchacki.github.io/odin-js-battleship/" target="_blank" rel="noopener noreferer">
                <GameTitle>Battleship ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>Can you sink the enemy ships before they sink yours?</GameDescription>
            <TechStackContainer>
              <Image src="/javascript.png" width={20} height={20} alt="Javascript icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-chess" target="_blank" rel="noopener noreferer">
                <GameTitle>Chess ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>How about a match of chess against... yourself?</GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={20} height={20} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-hangman" target="_blank" rel="noopener noreferer">
                <GameTitle>Hangman ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>Can you guess the word before the hangman gets hanged(?)</GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={20} height={20} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitleContainer>
              <a href="https://replit.com/@AlanSobchacki/odin-mastermind" target="_blank" rel="noopener noreferer">
                <GameTitle>Mastermind ►</GameTitle>
              </a>
            </GameTitleContainer>
            <GameDescription>
              Crack the code or build a code against your robotic opponent.
            </GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={20} height={20} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
        </GamesList>
        <GameObservation>* Ruby games will require an active Replit account</GameObservation>
      </DivSubContainer>
    </DivContainer>
  )
}
'use client'

import { 
  DivContainer,
  DivSubContainer,
  Title,
  GamesList,
  Game,
  GameTitle,
  GameDescription,
  TechStackContainer
} from './gamesSection.style';
import Image from 'next/image';

export default function GamesSection() {
  return (
    <DivContainer>
      <DivSubContainer>
        <Title>You found the secret area!</Title>
        <GamesList>
          <Game>
            <GameTitle>Hidden Syndicate</GameTitle>
            <GameDescription>Can you find the 3 targets fast enough?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={32} height={32} alt="React icon" />
              <Image src="/vite.png" width={32} height={32} alt="Vite icon" />
              <Image src="/node_js.png" width={32} height={32} alt="Node.js icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitle>Memory Game</GameTitle>
            <GameDescription>Can you pick 12 cards in a unique sucession?</GameDescription>
            <TechStackContainer>
              <Image src="/react.png" width={32} height={32} alt="React icon" />
              <Image src="/vite.png" width={32} height={32} alt="Vite icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitle>Battleship</GameTitle>
            <GameDescription>Can you sink the enemy ships before they sink yours?</GameDescription>
            <TechStackContainer>
              <Image src="/javascript.png" width={32} height={32} alt="Javascript icon" />
            </TechStackContainer>
          </Game>
          <Game>
            <GameTitle>Chess</GameTitle>
            <GameDescription>How about a match of chess against... yourself?</GameDescription>
            <TechStackContainer>
              <Image src="/ruby.png" width={32} height={32} alt="Ruby icon" />
            </TechStackContainer>
          </Game>
        </GamesList>
      </DivSubContainer>
    </DivContainer>
  )
}
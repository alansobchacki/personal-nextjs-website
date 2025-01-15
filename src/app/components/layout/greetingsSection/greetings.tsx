'use client'

import { 
  DivContainer,
  DivSubContainer,
  GreetingsText,
  NameHighlight,
  AnimatedTextContainer,
  AnimatedText, 
  AnimatedDash,
} from "./greetings.style";
import { useState, useEffect } from "react";

export default function GreetingsSection() {
  const phrases = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Frontend Developer",
    "Ruby Enthusiast",
    "Graphic Designer",
    "Content Creator",
    "Figma Tinkerer",
    "Former Lawyer",
    "Boardgame Enthusiast",
    "Blue Belt Judoka",
    "Lvl 38 Priest of Lathander",
    "Below Average Swimmer",
    "Casual Lifter",
    "500-rated chess player"
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTime = 7000;
  const startTime = 3000;
  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
      }, startTime);

    } else if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIsPaused(true);

      if (phraseIndex < phrases.length - 1) {
        setPhraseIndex(phraseIndex + 1);
      } else {
        setPhraseIndex(0);
      }

    } else {
      timer = setTimeout(() => {
        const updatedText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);

        setText(updatedText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, phraseIndex, isPaused]);

  useEffect(() => {
    setIsBlinking(text === phrases[phraseIndex] || text.length < 2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <DivContainer id="greetings-section">
      <DivSubContainer>
        <GreetingsText>Hi, I&apos;m <NameHighlight>Alan</NameHighlight>. I&apos;m a</GreetingsText>
        <AnimatedTextContainer>
          <AnimatedText>
            {text}
            <AnimatedDash $isBlinking={isBlinking}>|</AnimatedDash>
          </AnimatedText>
        </AnimatedTextContainer>
      </DivSubContainer>
    </DivContainer>
  );
}

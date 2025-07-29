"use client";

import {
  DivContainer,
  DivSubContainer,
  Name,
  AnimatedTextContainer,
  AnimatedText,
  AnimatedDash,
} from "./greetings.style";
import { useState, useEffect } from "react";

export default function GreetingsSection() {
  const phrases = [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Front End Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "Ruby Enthusiast",
    "Boardgame Enthusiast",
    "Blue Belt Judoka",
    "T-shirt Peddler",
    "Former Lawyer",
    "Lvl 36 Priest of Lathander",
    "Are you still reading this?",
    "Probably not",
    "Anyway, you're a very patient person",
    "Or just curious",
    "You know what?",
    "Try pressing the light bulb 10 times",
    "Have fun!",
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
      timer = setTimeout(
        () => {
          const updatedText = isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1);

          setText(updatedText);
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
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
        <Name>Alan Sobchacki</Name>
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

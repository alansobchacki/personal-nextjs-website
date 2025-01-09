'use client'

import { 
  GreetingsText,
  AnimatedTextContainer,
  AnimatedText, 
  AnimatedDash 
} from "./greetings.style";
import { useState, useEffect } from "react";

export default function Greetings() {
  const phrases = [
    "Web Developer",
    "Full Stack Developer",
    "Software Engineer",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTime = 7000;
  const startTime = 5000;
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
    <>
      <GreetingsText>Hi, I&apos;m Alan. I&apos;m a</GreetingsText>
      <AnimatedTextContainer>
        <AnimatedText>{text}</AnimatedText>
        <AnimatedDash isBlinking={isBlinking}>|</AnimatedDash>
      </AnimatedTextContainer>
    </>
  );
}

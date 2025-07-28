"use client";

import Header from "./components/header/header";
import GreetingsSection from "./components/greetingsSection/greetings";
import GamesSection from "./components/gamesSection/gamesSection";
import AboutSection from "./components/aboutSection/aboutSection";
import Footer from "./components/footer/footer";
import { DivContainer } from "./page.style";
import { useEasterEgg } from './context/easterEggContext';

export default function Home() {
  const { easterEggActive } = useEasterEgg();

  return (
    <DivContainer>
      <Header />
      {easterEggActive && (
        <GamesSection />)
      }
        <GreetingsSection />
        <AboutSection />
      <Footer />
    </DivContainer>
  );
}

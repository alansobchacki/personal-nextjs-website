"use client";

import Header from "./components/header/header";
import GreetingsSection from "./components/greetingsSection/greetings";
import AboutSection from "./components/aboutSection/aboutSection";
import Footer from "./components/footer/footer";
import { DivContainer } from "./page.style";

export default function Home() {
  return (
    <DivContainer>
      <Header />
      <GreetingsSection />
      <AboutSection />
      <Footer />
    </DivContainer>
  );
}

"use client";

import Header from "./components/structure/header/header";
import GreetingsSection from "./components/structure/greetingsSection/greetings";
import AboutSection from "./components/structure/aboutSection/aboutSection";
import SectionSeparator from "./components/ui/sectionSeparator/sectionSeparator";
import ProjectsSection from "./components/structure/projectsSection/projectsSection";
import Footer from "./components/structure/footer/footer";
import { DivContainer } from "./page.style";

export default function Home() {
  return (
    <DivContainer>
      <Header />
      <GreetingsSection />
      <AboutSection />
      <SectionSeparator />
      <ProjectsSection />
      <Footer />
    </DivContainer>
  );
}

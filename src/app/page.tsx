import Header from "./components/layout/header/header";
import GreetingsSection from "./components/layout/greetingsSection/greetings";
import SkillsSection from "./components/layout/skillsSection/skillsSection";
import Footer from "./components/layout/footer/footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <GreetingsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

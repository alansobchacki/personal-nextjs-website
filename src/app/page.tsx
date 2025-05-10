import Header from "./components/header/header";
import GreetingsSection from "./components/greetingsSection/greetings";
import AboutSection from "./components/aboutSection/aboutSection";
// import ContactSection from "./components/contactSection/contactSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "50%" }}>
      <Header />
      <GreetingsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

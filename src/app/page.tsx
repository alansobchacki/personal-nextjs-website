import Header from "./components/layout/header/header";
import GreetingsSection from "./components/layout/greetingsSection/greetings";
import Footer from "./components/layout/footer/footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <GreetingsSection />
      <Footer />
    </div>
  );
}

import Header from "../components/layout/header/header";
import GamesSection from "../components/layout/gamesSection/gamesSection";
import Footer from "../components/layout/footer/footer";

export default function Fun() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <GamesSection />
      <Footer />
    </div>
  );
}

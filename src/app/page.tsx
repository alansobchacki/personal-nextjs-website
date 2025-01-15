import Header from "./components/layout/header/header";
import GreetingsSection from "./components/layout/greetingsSection/greetings";
import ContactSection from "./components/layout/contactSection/contactSection";
import Footer from "./components/layout/footer/footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div id="# hey, fellow developer! open me! #"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Let's play a little game: alansobchacki/fun -->
          `,
        }}
      />
      <Header />
      <GreetingsSection />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%"}}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

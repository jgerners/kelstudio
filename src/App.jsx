import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className="app-container"
      style={{
        backgroundPosition: isMobile ? "70% center" : "center",
      }}
    >
      <Navbar /> {/* Stays at top */}
      <main className="hero-center">
        <p className="subtitle">Interieur design & content creatie</p>
        <h1 className="coming-soon">
          Coming <span>SOON</span>
        </h1>
        <p className="description">
          Creatieve oplossingen voor interieur en content die jouw merk <br />
          en ruimte laten spreken.
        </p>
        {/* Subscription form code... */}
      </main>
      <Footer /> {/* Pushed to bottom */}
    </div>
  );
}

export default App;

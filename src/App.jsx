import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          {/* Logo Placeholder */}
          <div className="logo-box">KELSTUDIO</div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Zorgvuldig ingerichte ruimtes voor modern wonen.</h1>
          <p>Interieurontwerp dat vorm, functie en ziel in balans brengt.</p>
          <button className="cta-btn">Bekijk Portfolio</button>
        </div>
        <div className="hero-image-container">
          {/* Main Hero Image Placeholder */}
          <div className="hero-placeholder">Grote foto? / coming soon? </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section id="Portfolio" className="portfolio">
        <h2 className="section-title">Projecten</h2>
        <div className="grid">
          <div className="project-card">
            <div className="img-box">Project Een</div>
          </div>
          <div className="project-card">
            <div className="img-box">Project Twee</div>
          </div>
          <div className="project-card">
            <div className="img-box">Project Drie</div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section id="contact" className="newsletter">
        <div className="newsletter-card">
          <h3>Blijf geïnspireerd</h3>
          <p>Bekijk maandelijks de nieuwste transformaties.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Vul je e-mailadres in" required />
            <button type="submit">Abboneer</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Kelstudio</p>
      </footer>
    </div>
  );
}

export default App;

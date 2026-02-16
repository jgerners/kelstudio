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
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Curated Spaces for Modern Living.</h1>
          <p>Interior design that balances form, function, and soul.</p>
          <button className="cta-btn">View Portfolio</button>
        </div>
        <div className="hero-image-container">
          {/* Main Hero Image Placeholder */}
          <div className="hero-placeholder">Hero Image: Modern Living Room</div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section id="work" className="portfolio">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid">
          <div className="project-card">
            <div className="img-box">Project One</div>
          </div>
          <div className="project-card">
            <div className="img-box">Project Two</div>
          </div>
          <div className="project-card">
            <div className="img-box">Project Three</div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section id="contact" className="newsletter">
        <div className="newsletter-card">
          <h3>Stay Inspired</h3>
          <p>Get a monthly look at our latest transformations.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
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

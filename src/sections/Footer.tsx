import "../styles/sections/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Background Glow */}

      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">

        {/* ==========================
            TOP
        ========================== */}

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <h2>
              SEYONIX
            </h2>

            <h4>
              WHERE CREATIVITY MEETS TECHNOLOGY.
            </h4>

            <p>
              Helping businesses grow through AI-powered
              creativity, branding, automation and premium
              digital experiences built for the future.
            </p>

          </div>

          {/* Navigation */}

          <div className="footer-column">

            <h3>
              Navigation
            </h3>

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#expertise">Expertise</a>

            <a href="#journey">Journey</a>

            <a href="#works">Selected Works</a>

            <a href="#contact">Contact</a>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h3>
              Services
            </h3>

            <span>AI Powered Ad Videos</span>

            <span>Website Development</span>

            <span>Brand Strategy</span>

            <span>Digital Marketing</span>

            <span>Automation Solutions</span>

          </div>

          {/* Connect */}

          <div className="footer-column">

            <h3>
              Connect
            </h3>

            <a
              href="https://wa.me/918825419873"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="mailto:hello@seyonix.in"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/company/113034249"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/seyon_ix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61581664664324"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

        </div>

        {/* ==========================
            DIVIDER
        ========================== */}

        <div className="footer-divider"></div>

        {/* ==========================
            BOTTOM
        ========================== */}

        <div className="footer-bottom">

          <div className="footer-location">

            Salem • Tamil Nadu • India

          </div>

          <div className="footer-copy">

            © {year} SEYONIX. All Rights Reserved.

          </div>

          <div className="footer-credit">

            Built with ❤️ by <strong>Yuvaraj Ramalingam</strong>

          </div>

        </div>

      </div>

    </footer>
  );
}
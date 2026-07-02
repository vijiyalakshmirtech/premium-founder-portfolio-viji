import "../styles/sections/hero.css";

import Button from "../components/Button";

import portrait from "../assets/yuvaraj.png";
import HeroVideo from "../components/HeroVideo";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/113034249",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/seyon_ix/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581664664324",
  },
];

const metrics = [
  {
    value: "150+",
    label: "Projects",
  },
  {
    value: "50+",
    label: "Clients",
  },
  {
    value: "5+",
    label: "Years",
  },
];

const services = [
  "AI Powered Ad Videos",
  "Premium Websites",
  "Brand Strategy",
  "Automation Systems",
  "Digital Growth",
];

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      aria-label="Founder Hero Section"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="hero-background">

        <div className="hero-grid" />

        <div className="hero-glow hero-glow-1" />

        <div className="hero-glow hero-glow-2" />

        <div className="hero-glow hero-glow-3" />

        <div className="hero-noise" />

      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="hero-container">

        {/* ==================================================
            LEFT COLUMN
        ================================================== */}

        <div className="hero-content">

          {/* Badge */}

          <div className="hero-badge">

            <span className="hero-badge-dot"></span>

            <span>Founder of SEYONIX</span>

          </div>

          {/* Heading */}

          <div className="hero-heading-group">

            <h1 className="hero-title">

              <span className="hero-title-line">
                Yuvaraj
              </span>

              <span className="hero-title-highlight">
                Ramalingam
              </span>

            </h1>

            <h2 className="hero-subtitle">

              Founder • AI Growth Architect • Entrepreneur

            </h2>

          </div>

          {/* Description */}

          <p className="hero-description">

            Building AI-powered digital experiences,
            premium websites,
            automation systems,
            branding,
            AI marketing,
            and digital growth ecosystems that help ambitious businesses scale.

          </p>

          {/* CTA */}

          <div className="hero-actions">

            <Button
              text="View Portfolio"
              variant="outline"
            />

            <Button
              text="Book Strategy Call"
            />

          </div>
                    {/* ==================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="hero-social">

            {socialLinks.map((item) => (

              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={item.label}
              >
                {item.label}
              </a>

            ))}

          </div>

          {/* ==================================================
              METRICS
          ================================================== */}

          <div className="hero-metrics">

            {metrics.map((metric) => (

              <div
                className="hero-metric"
                key={metric.label}
              >

                <h3>{metric.value}</h3>

                <span>{metric.label}</span>

              </div>

            ))}

          </div>

        </div>

        {/* ==================================================
            RIGHT COLUMN
        ================================================== */}

        <div className="hero-visual">

          {/* ===============================================
              IMAGE AREA
          =============================================== */}

          <div className="hero-image-area">

            <div className="hero-image-glow"></div>

            <div className="hero-image-ring"></div>

            <div className="hero-image-wrapper">

                <HeroVideo className="hero-video" />

                <img
                  src={portrait}
                  alt="Yuvaraj Ramalingam"
                  className="hero-image"
                />

            </div>

          </div>
                    {/* ===============================================
              PREMIUM GLASS CARD
          =============================================== */}

          <div className="hero-glass-card">

            <div className="glass-card-header">

              <div className="glass-card-logo">

                <span className="glass-card-logo-circle"></span>

              </div>

              <div className="glass-card-title">

                <h3>SEYONIX</h3>

                <span>AI Growth Studio</span>

              </div>

            </div>

            <div className="glass-card-divider"></div>

            <div className="glass-card-services">

              {services.map((service) => (

                <div
                  className="glass-card-service"
                  key={service}
                >

                  <span className="service-check">
                    ✓
                  </span>

                  <span className="service-name">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* ===============================================
              FLOATING CARD ONE
          =============================================== */}

          <div className="hero-floating-card floating-card-top">

            <span className="floating-label">
              Projects Delivered
            </span>

            <h3>
              150+
            </h3>

            <p>
              Successfully delivered premium websites,
              AI automation systems,
              branding,
              and marketing solutions.
            </p>

          </div>

          {/* ===============================================
              FLOATING CARD TWO
          =============================================== */}

          <div className="hero-floating-card floating-card-bottom">

            <span className="floating-label">

              Client Satisfaction

            </span>

            <h3>

              98%

            </h3>

            <p>

              Focused on long-term partnerships,
              scalable digital growth,
              and measurable business impact.

            </p>

          </div>
                  </div>
        {/* End Hero Visual */}

      </div>
      {/* End Hero Container */}

    </section>
  );
}
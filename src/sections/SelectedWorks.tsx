import "../styles/sections/selectedworks.css";

export default function SelectedWorks() {
  return (
    <section className="selected-works" id="works">
      <div className="works-glow works-glow-1"></div>
      <div className="works-glow works-glow-2"></div>

      <div className="works-container">
        <div className="works-header">
          <div className="works-badge">✦ SELECTED WORKS</div>

          <h2 className="works-title">
            <span className="title-line">Crafted to feel premium,</span>
            <span className="title-line">strategic, and unforgettable.</span>
          </h2>

          <p className="works-byline">Founder Studio — Editorial selection of recent projects</p>

          <p className="works-description">
            A curated collection of brand systems, digital experiences, and AI-augmented creative work for founders who seek refined perception, durable storytelling, and measurable growth.
          </p>
        </div>

        <div className="featured-project">
          <div className="featured-content">
            <span className="featured-category">Featured Project</span>
            <h3>BOYZ FACTORY</h3>
            <p>
              A luxury fashion identity reimagined through premium storytelling, cinematic content direction, and digital campaigns built to elevate perception and conversion.
            </p>

            <div className="featured-tags">
              <span>Brand Identity</span>
              <span>AI Creatives</span>
              <span>Social Growth</span>
            </div>

            <a href="#" className="project-btn">
              View Case Study →
            </a>
          </div>

          <div className="featured-image">
            <div className="image-placeholder">
              <div>
                <strong>Luxury Brand Preview</strong>
                <p>Visual system • Campaign concept • Growth strategy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <span className="project-category">Fashion Brand</span>
            <h3>SUXUS</h3>
            <p>
              Crafted a premium digital identity with modern branding, creative campaigns, and social experiences tailored for a fashion-focused audience.
            </p>

            <div className="project-tags">
              <span>Branding</span>
              <span>Creatives</span>
              <span>Marketing</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <span className="project-category">FinTech</span>
            <h3>BIZPRO FINTECH</h3>
            <p>
              Designed a professional digital presence focused on trust, clarity, and business growth for modern financial consulting services.
            </p>

            <div className="project-tags">
              <span>Corporate</span>
              <span>Website</span>
              <span>Branding</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <span className="project-category">Fashion & Lifestyle</span>
            <h3>Colours Collection</h3>
            <p>
              Built a vibrant visual identity with premium creative assets and digital campaigns that strengthen brand recognition.
            </p>

            <div className="project-tags">
              <span>Identity</span>
              <span>Social Media</span>
              <span>Design</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <span className="project-category">Education & Community</span>
            <h3>Vanna Siragugal</h3>
            <p>
              Developed a modern digital identity that combines creativity, community engagement, and meaningful storytelling through impactful visual experiences.
            </p>

            <div className="project-tags">
              <span>Brand Strategy</span>
              <span>Creative Design</span>
              <span>Digital Presence</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
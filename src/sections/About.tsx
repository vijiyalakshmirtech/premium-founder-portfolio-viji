import "../styles/sections/about.css";
import portrait from "../assets/yuvaraj.png";
import Button from "../components/Button";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-glow"></div>

      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <img
              src={portrait}
              alt="Yuvaraj Ramalingam"
              className="about-image"
            />

            <div className="experience-badge">
              <h2>5+</h2>
              <span>Years of experience</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="section-tag">Founder Studio</div>

          <h2 className="about-title">
            <span className="title-line">Crafting premium digital identities</span>
            <span className="title-line">that elevate founders into category-defining brands.</span>
          </h2>

          <p className="about-text">
            I’m <strong>Yuvaraj Ramalingam</strong> — a founder, strategist, and creative director building luxury digital experiences that blend strategic clarity, thoughtful craft, and AI-augmented systems.
            I work with founders who value rigor, distinctiveness, and measurable business impact.
          </p>

          <div className="about-signature">Yuvaraj Ramalingam — Founder</div>

          <div className="about-cards">
            <div className="about-card">
              <h3>Founder Philosophy</h3>
              <p>
                Great brands are not built on noise. They are built on clarity, craft, and systems that scale with confidence.
              </p>
            </div>

            <div className="about-card">
              <h3>Current Thesis</h3>
              <p>
                AI should not replace business thinking. It should multiply creativity, speed, and measurable growth.
              </p>
            </div>

            <div className="about-card">
              <h3>Vision</h3>
              <p>
                To create one of the most trusted AI-powered creative studios for founders who want elegant, effective, and future-ready digital presence.
              </p>
            </div>
          </div>

          <div className="about-bottom">
            <Button text="Explore My Work" />
          </div>
        </div>
      </div>
    </section>
  );
}
import "../styles/sections/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">✦ CONTACT</div>

          <h2 className="contact-title">
            Let’s create a brand that feels timeless.
          </h2>

          <p className="contact-description">
            Whether you’re launching a new venture, refining your identity, or building a more powerful digital presence, I’d love to explore how strategy, creativity, and technology can elevate your next move.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="https://wa.me/918825419873"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>WhatsApp</h3>
            <p>+91 88254 19873</p>
            <span>Quick strategy discussion</span>
          </a>

          <a href="mailto:hello@seyonix.in" className="contact-card">
            <h3>Email</h3>
            <p>hello@seyonix.in</p>
            <span>Business enquiries</span>
          </a>

          <a
            href="https://www.linkedin.com/company/113034249"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>Seyonix.in</p>
            <span>Professional network</span>
          </a>

          <a
            href="https://www.instagram.com/seyon_ix/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>Instagram</h3>
            <p>@seyon_ix</p>
            <span>Creative updates</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61581664664324"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>Facebook</h3>
            <p>Seyonix</p>
            <span>Community & brand updates</span>
          </a>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Salem</p>
            <span>Tamil Nadu, India</span>
          </div>
        </div>

        <div className="contact-cta">
          <a
            href="https://wa.me/918825419873"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Book Strategy Call →
          </a>
        </div>

        <div className="contact-footer">
          <div className="availability">
            <span className="availability-dot"></span>
            Usually responds within 24 hours
          </div>

          <p>Let’s build something meaningful, refined, and impactful together.</p>
        </div>
      </div>
    </section>
  );
}
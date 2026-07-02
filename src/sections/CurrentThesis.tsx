import "../styles/sections/currentthesis.css";

export default function CurrentThesis() {
  return (
    <section className="current-thesis" id="thesis">
      {/* Background Glow */}
      <div className="thesis-glow thesis-glow-1"></div>
      <div className="thesis-glow thesis-glow-2"></div>

      <div className="thesis-container">
        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="thesis-header">
          <div className="thesis-badge">
            ✦ CURRENT THESIS
          </div>

          <h2 className="thesis-title">
            Building What's <span>Next.</span>
          </h2>

          <p className="thesis-intro">
            I believe businesses shouldn't struggle to adopt
            technology. They should be able to use AI,
            automation and thoughtful digital experiences to
            grow faster, operate smarter and create lasting
            value.
          </p>
        </div>

        {/* =========================
            FOUNDER MANIFESTO
        ========================== */}

        <div className="manifesto-card">

          <div className="manifesto-label">
            Founder Perspective
          </div>

          <blockquote className="manifesto-quote">

            "I'm not interested in building just another
            digital agency.

            <br />
            <br />

            I'm building an AI-powered ecosystem where
            creativity, technology and automation work
            together to help businesses grow with
            confidence."

          </blockquote>

        </div>

        {/* =========================
            STRATEGIC PILLARS
        ========================== */}

        <div className="thesis-grid">

          <div className="thesis-card">

            <div className="pillar-number">
              01
            </div>

            <h3>
              AI-Powered Marketing
            </h3>

            <p>
              Helping businesses create faster, smarter and
              more effective marketing through AI-assisted
              creative systems.
            </p>

          </div>

          <div className="thesis-card">

            <div className="pillar-number">
              02
            </div>

            <h3>
              Digital Products
            </h3>

            <p>
              Designing premium websites and mobile
              applications that solve real business
              problems with exceptional user experiences.
            </p>

          </div>

          <div className="thesis-card">

            <div className="pillar-number">
              03
            </div>

            <h3>
              Business Growth Systems
            </h3>

            <p>
              Building scalable digital ecosystems that
              combine automation, branding and technology
              to create sustainable business growth.
            </p>

          </div>

        </div>

        {/* =========================
            CLOSING MESSAGE
        ========================== */}

        <div className="thesis-footer">

          <p className="thesis-closing">

            Every project I take on is another step towards
            building a future where technology becomes a
            growth partner for every ambitious business.

          </p>

          <div className="founder-signature">

            <span className="signature-line"></span>

            <h4>
              Yuvaraj Ramalingam
            </h4>

            <p>
              Founder • SEYONIX
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
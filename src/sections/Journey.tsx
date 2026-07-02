import "../styles/sections/journey.css";

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="journey-glow journey-glow-1"></div>
      <div className="journey-glow journey-glow-2"></div>

      <div className="journey-container">
        <div className="journey-header">
          <div className="journey-badge">✦ THE ROAD SO FAR</div>

          <h2 className="journey-title">
            Every milestone shaped a more intentional practice.
          </h2>

          <p className="journey-description">
            From curiosity to creative leadership, each step strengthened my belief that technology should amplify strategy, elevate design, and create lasting business value.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <h4>Curiosity</h4>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Exploration</h4>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Transformation</h4>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Foundation</h4>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Future</h4>
          </div>
        </div>

        <div className="journey-grid">
          <div className="journey-card">
            <span className="journey-number">01</span>
            <h3>Curiosity</h3>
            <p>
              The journey began with a deep interest in technology, design, and the way digital experiences influence business perception.
            </p>
          </div>

          <div className="journey-card">
            <span className="journey-number">02</span>
            <h3>Exploration</h3>
            <p>
              I explored branding, web experiences, UI systems, SEO, and digital marketing while learning how founders think, sell, and grow.
            </p>
          </div>

          <div className="journey-card">
            <span className="journey-number">03</span>
            <h3>Transformation</h3>
            <p>
              AI opened a new creative layer. It allowed me to combine storytelling, automation, and performance into sharper digital solutions.
            </p>
          </div>

          <div className="journey-card">
            <span className="journey-number">04</span>
            <h3>Foundation</h3>
            <p>
              SEYONIX became the space where strategy, creativity, and technology come together to build premium digital brands with real momentum.
            </p>
          </div>

          <div className="journey-card journey-card-wide">
            <span className="journey-number">05</span>
            <h3>Future</h3>
            <p>
              Today the focus is clear: create elegant digital experiences that help founders scale with confidence, differentiation, and long-term relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
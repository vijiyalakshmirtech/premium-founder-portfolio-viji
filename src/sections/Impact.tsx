import "../styles/sections/impact.css";

export default function Impact() {
  return (
    <section className="impact" id="impact">

      <div className="impact-glow impact-glow-1"></div>
      <div className="impact-glow impact-glow-2"></div>

      <div className="impact-container">

        {/* Header */}

        <div className="impact-header">

          <div className="impact-badge">
            ✦ IMPACT
          </div>

          <h2 className="impact-title">
            Building <span>Measurable</span> Growth.
          </h2>

          <p className="impact-description">
            Every project is measured by the value it creates,
            the problems it solves and the businesses it helps
            grow through thoughtful digital experiences.
          </p>

        </div>

        {/* Stats */}

        <div className="impact-grid">

          <div className="impact-card">
            <h3>12+</h3>
            <h4>Brands Collaborated</h4>
            <p>
              Partnering with businesses across multiple
              industries to build meaningful digital experiences.
            </p>
          </div>

          <div className="impact-card">
            <h3>6+</h3>
            <h4>Industries Served</h4>
            <p>
              Delivering solutions for retail, finance,
              services and emerging businesses.
            </p>
          </div>

          <div className="impact-card">
            <h3>25+</h3>
            <h4>Digital Experiences</h4>
            <p>
              Websites, branding systems, AI creatives
              and business-focused digital products.
            </p>
          </div>

          <div className="impact-card">
            <h3>300+</h3>
            <h4>Creative Assets</h4>
            <p>
              High-quality visuals, campaigns and AI-powered
              content created for growing brands.
            </p>
          </div>

        </div>

        {/* Closing */}

        <div className="impact-footer">

          <p>
            The real impact isn't measured only by numbers.
            It's measured by businesses that continue to
            grow because of the systems we build.
          </p>

        </div>

      </div>

    </section>
  );
}
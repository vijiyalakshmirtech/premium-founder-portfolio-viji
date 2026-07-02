import "../styles/sections/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      {/* Background Glow */}
      <div className="testimonial-glow testimonial-glow-1"></div>
      <div className="testimonial-glow testimonial-glow-2"></div>

      <div className="testimonials-container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="testimonials-header">

          <div className="testimonials-badge">
            ✦ TESTIMONIALS
          </div>

          <h2 className="testimonials-title">
            Trusted By <span>Growing Brands.</span>
          </h2>

          <p className="testimonials-description">
            Every collaboration is built on trust,
            transparency and a commitment to delivering
            meaningful digital experiences that help
            businesses grow with confidence.
          </p>

        </div>

        {/* =========================
            TESTIMONIAL GRID
        ========================== */}

        <div className="testimonials-grid">

          {/* CARD 1 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">

              "Working with Yuvaraj transformed the way our
              brand looks online. The creativity, premium
              execution and attention to detail exceeded
              our expectations."

            </p>

            <div className="testimonial-author">

              <h4>BOYZ FACTORY</h4>

              <span>Footwear Brand</span>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">

              "Professional communication, modern design
              thinking and business-focused execution made
              the entire process smooth and highly valuable."

            </p>

            <div className="testimonial-author">

              <h4>BIZPRO FINTECH</h4>

              <span>Financial Consulting</span>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="testimonial-card">

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">

              "Every creative reflected our brand identity
              beautifully. The final output gave us a
              premium digital presence that we're proud of."

            </p>

            <div className="testimonial-author">

              <h4>Colours Collection</h4>

              <span>Fashion Brand</span>

            </div>

          </div>

        </div>

        {/* =========================
            FOOTER
        ========================== */}

        <div className="testimonials-footer">

          <p>

            Trusted relationships are built over time.
            These representative testimonials will be
            progressively replaced with verified client
            feedback as new collaborations continue.

          </p>

        </div>

      </div>

    </section>
  );
}
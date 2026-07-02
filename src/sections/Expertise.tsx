import "../styles/sections/expertise.css";

export default function Expertise() {
  const expertise = [
    {
      icon: "✦",
      title: "Brand Strategy",
      description:
        "Positioning, messaging, and visual systems that give founders a distinctive and premium brand presence.",
    },
    {
      icon: "⚡",
      title: "AI Creative Direction",
      description:
        "Creative concepts, campaigns, and motion-led storytelling powered by modern AI tools and sharp execution.",
    },
    {
      icon: "🌐",
      title: "Premium Web Experiences",
      description:
        "Luxury websites designed for speed, storytelling, trust, and conversion from first impression to final action.",
    },
    {
      icon: "📈",
      title: "Growth Systems",
      description:
        "Marketing strategy, automation, and digital operations that help businesses scale intelligently.",
    },
    {
      icon: "🎬",
      title: "Motion & Content",
      description:
        "Cinematic content, promotional visuals, and brand assets crafted for high-impact digital storytelling.",
    },
    {
      icon: "🧠",
      title: "Digital Transformation",
      description:
        "Practical systems and creative technology that bring structure, clarity, and momentum to modern brands.",
    },
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-container">
        <div className="section-heading">
          <span className="section-tag">MY EXPERTISE</span>

          <h2>Design, strategy, and intelligence for ambitious founders.</h2>

          <p>
            From brand systems to AI-powered content, premium web experiences, and growth strategy, every solution is crafted to feel elegant, effective, and future-ready.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div className="expertise-card" key={index}>
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
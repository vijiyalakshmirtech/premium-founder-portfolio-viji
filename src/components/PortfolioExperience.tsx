import { useState } from "react";
import Navbar from "./Navbar";
import Background from "./backgrounds/Background";
import PageLayout from "./layout/PageLayout";
import Hero from "../modules/hero";
import About from "../sections/About";
import Expertise from "../sections/Expertise";
import Journey from "../sections/Journey";
import SelectedWorks from "../sections/SelectedWorks";
import CurrentThesis from "../sections/CurrentThesis";
import Impact from "../sections/Impact";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Button from "./Button";
import "../styles/components/portfolio-experience.css";

type PageKey = "home" | "studio" | "work" | "contact";

const pageLabels: Array<{ key: PageKey; label: string }> = [
  { key: "home", label: "Home" },
  { key: "studio", label: "Studio" },
  { key: "work", label: "Work" },
  { key: "contact", label: "Contact" },
];

function StudioPage({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return (
    <section className="page-section page-section--studio">
      <div className="page-shell-hero">
        <div className="page-shell-copy">
          <span className="page-badge">Luxury Brand Studio</span>
          <h2>Every experience is crafted like a high-end brand system.</h2>
          <p>
            I design premium digital identities, AI creative systems, and growth experiences that feel elegant, intelligent, and unmistakably modern.
          </p>
          <div className="page-actions">
            <Button text="Explore My Work" />
            <button className="ghost-btn" onClick={() => onNavigate("contact")}>Start a Project</button>
          </div>
        </div>

        <div className="page-shell-card three-d-card">
          <div className="page-shell-card__glow" />
          <div className="page-shell-card__inner">
            <p className="card-label">Signature Offer</p>
            <h3>Founder-led Digital Presence</h3>
            <ul>
              <li>Brand strategy</li>
              <li>AI creative direction</li>
              <li>Premium websites</li>
              <li>Automation design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkPage() {
  const workItems = [
    {
      title: "AI Brand Systems",
      summary: "Immersive identities for founders who want clarity and distinction.",
    },
    {
      title: "Luxury Web Experiences",
      summary: "High-performance websites with cinematic feel and conversion strategy.",
    },
    {
      title: "Growth Automations",
      summary: "Smart systems designed to scale operations and content with precision.",
    },
  ];

  return (
    <section className="page-section page-section--work">
      <div className="page-shell-hero page-shell-hero--stacked">
        <div className="page-shell-copy">
          <span className="page-badge">Selected Work</span>
          <h2>Beautiful, strategic, and built for momentum.</h2>
          <p>
            Each project is shaped around a premium visual language, intentional storytelling, and measurable business growth.
          </p>
        </div>

        <div className="work-grid">
          {workItems.map((item) => (
            <article className="work-card three-d-card" key={item.title}>
              <div className="work-card__top" />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="page-section page-section--contact">
      <div className="contact-page-card three-d-card">
        <span className="page-badge">Let’s Build</span>
        <h2>Ready to shape a more elevated digital presence?</h2>
        <p>
          Whether you need a premium website, a refined brand identity, or a smarter growth system, I can help build it with strategy and craft.
        </p>
        <div className="page-actions">
          <a className="ghost-btn" href="https://wa.me/918825419873" target="_blank" rel="noreferrer">
            WhatsApp Now
          </a>
          <a className="ghost-btn" href="mailto:hello@seyonix.in">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioExperience() {
  const [activePage, setActivePage] = useState<PageKey>("home");

  const handleNavigate = (page: string) => {
    if (page === "home" || page === "studio" || page === "work" || page === "contact") {
      setActivePage(page as PageKey);
    }
  };

  return (
    <>
      <Background />

      <PageLayout>
        <Navbar activePage={activePage} onNavigate={handleNavigate} pages={pageLabels} />

        <div className={`portfolio-shell portfolio-shell--${activePage}`}>
          {activePage === "home" ? (
            <>
              <Hero />
              <About />
              <Expertise />
              <Journey />
              <SelectedWorks />
              <CurrentThesis />
              <Impact />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          ) : null}

          {activePage === "studio" ? <StudioPage onNavigate={setActivePage} /> : null}
          {activePage === "work" ? <WorkPage /> : null}
          {activePage === "contact" ? <ContactPage /> : null}
        </div>
      </PageLayout>
    </>
  );
}

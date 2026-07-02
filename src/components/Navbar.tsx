import "../styles/components/navbar.css";

import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
  pages?: Array<{ key: string; label: string }>;
}

export default function Navbar({ activePage = "home", onNavigate, pages }: NavbarProps) {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar-wrapper">
          <Logo />

          <div className="nav-links">
            {pages?.length ? (
              pages.map((page) => (
                <button
                  key={page.key}
                  type="button"
                  className={`nav-link ${activePage === page.key ? "is-active" : ""}`}
                  onClick={() => handleNav(page.key)}
                >
                  {page.label}
                </button>
              ))
            ) : (
              <>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#expertise">Expertise</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>
              </>
            )}
          </div>

          <Button text="Book Strategy Call" />
        </div>
      </Container>
    </nav>
  );
}
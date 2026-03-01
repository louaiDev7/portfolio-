import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = ["about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 150;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        #nav-root * { box-sizing: border-box; margin: 0; padding: 0; }

        #nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        #nav-root.scrolled {
          padding: 0;
        }

        #nav-root .nav-blur {
          position: absolute;
          inset: 0;
          background: rgba(10,10,12,0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        #nav-root.scrolled .nav-blur { opacity: 1; }

        #nav-root .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        /* Logo */
        #nav-root .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #f5f5f5;
          letter-spacing: -0.04em;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s ease;
        }
        #nav-root .nav-logo span {
          color: #63d2b4;
        }
        #nav-root .nav-logo:hover { color: #fff; }

        /* Links */
        #nav-root .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        #nav-root .nav-links a {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          position: relative;
          transition: color 0.25s ease, background 0.25s ease;
        }

        #nav-root .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #63d2b4;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
          opacity: 0;
        }

        #nav-root .nav-links a:hover {
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.04);
        }

        #nav-root .nav-links a.active {
          color: #f5f5f5;
          background: rgba(99,210,180,0.08);
        }
        #nav-root .nav-links a.active::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        /* CTA */
        #nav-root .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0a0c;
          background: #63d2b4;
          border: none;
          padding: 10px 22px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          white-space: nowrap;
          box-shadow: 0 0 0 0 rgba(99,210,180,0.4);
        }
        #nav-root .nav-cta:hover {
          background: #7ae0c6;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(99,210,180,0.3);
        }
        #nav-root .nav-cta:active { transform: translateY(0); }

        /* Mobile toggle */
        #nav-root .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          z-index: 10;
        }
        #nav-root .mobile-toggle span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #f5f5f5;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        #nav-root .mobile-toggle.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        #nav-root .mobile-toggle.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        #nav-root .mobile-toggle.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile menu */
        @media (max-width: 720px) {
          #nav-root .nav-links {
            position: fixed;
            top: 0; left: 0; right: 0;
            flex-direction: column;
            gap: 0;
            background: rgba(10,10,12,0.97);
            backdrop-filter: blur(24px);
            padding: 100px 40px 40px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
            pointer-events: none;
          }
          #nav-root .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
          #nav-root .nav-links a {
            font-size: 14px;
            padding: 16px 0;
            border-radius: 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            width: 100%;
            text-align: left;
          }
          #nav-root .nav-links a::after { display: none; }
          #nav-root .mobile-toggle { display: flex; }
          #nav-root .nav-cta { display: none; }
        }
      `}</style>

      <header id="nav-root" className={scrolled ? "scrolled" : ""}>
        <div className="nav-blur" />
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            louai<span>.dev</span>
          </div>

          {/* Links */}
          <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => { e.preventDefault(); scrollTo(section); }}
                className={active === section ? "active" : ""}
              >
                {section}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with React — showcasing projects, skills, and contact info with smooth scroll navigation and a cohesive dark design system.",
    tags: ["React", "CSS", "Vite"],
    live: "https://portfolio-pi-khaki-30.vercel.app/",
    github: "#",
    index: "01",
  },
 {
    name: "Rock Paper Game",
    description: "A fun and interactive Rock-Paper-Scissors game built with React. Features smooth gameplay, responsive design, and local score tracking for an engaging experience.",
    tags: ["React", "JavaScript", "Game"],
    live: "https://rock-papper-six.vercel.app/",
    github: "#",
    index: "02",
},
{
  name: "L_7-store",
  description: "Online shop featuring curated products across categories with real-time cart updates, secure checkout, and an intuitive, responsive design — powered by DummyJSON API.",
  tags: ["React", "REST API", "E-commerce"],
  live: "#https://store-l-7.vercel.app/",
  github: "#",
  index: "03",
},
];

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${hovered ? "rgba(99,210,180,0.18)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        padding: "36px 32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${i * 120}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${i * 120}ms, border-color 0.3s ease, background 0.3s ease`,
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: hovered
          ? "linear-gradient(90deg, transparent, rgba(99,210,180,0.5), transparent)"
          : "transparent",
        transition: "background 0.4s ease",
      }} />

     
      <span style={{
        position: "absolute",
        top: "28px",
        right: "28px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: hovered ? "rgba(99,210,180,0.5)" : "rgba(255,255,255,0.12)",
        letterSpacing: "0.08em",
        transition: "color 0.3s ease",
      }}>
        {project.index}
      </span>

     
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "20px",
        fontWeight: 800,
        color: "#f5f5f5",
        letterSpacing: "-0.025em",
        marginBottom: "12px",
        paddingRight: "32px",
        transition: "color 0.3s ease",
      }}>
        {project.name}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Lora', serif",
        fontSize: "14.5px",
        lineHeight: 1.75,
        color: "rgba(255,255,255,0.45)",
        marginBottom: "24px",
        flexGrow: 1,
      }}>
        {project.description}
      </p>

     
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: hovered ? "#63d2b4" : "rgba(255,255,255,0.3)",
            background: hovered ? "rgba(99,210,180,0.08)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered ? "rgba(99,210,180,0.2)" : "rgba(255,255,255,0.06)"}`,
            borderRadius: "100px",
            padding: "4px 12px",
            transition: "all 0.3s ease",
          }}>
            {tag}
          </span>
        ))}
      </div>

   
      <div style={{
        height: "1px",
        background: "rgba(255,255,255,0.06)",
        marginBottom: "20px",
      }} />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#0a0a0c",
            background: "#63d2b4",
            border: "none",
            borderRadius: "100px",
            padding: "9px 18px",
            textDecoration: "none",
            transition: "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
            fontWeight: 500,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#7ae0c6";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,210,180,0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#63d2b4";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <FaExternalLinkAlt size={10} />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px",
            padding: "9px 18px",
            textDecoration: "none",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "#f5f5f5";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <FaGithub size={12} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Lora:ital@0;1&display=swap');
        #projects * { box-sizing: border-box; margin: 0; padding: 0; }
        #projects {
          background: #0a0a0c;
          padding: 110px 0;
          position: relative;
          overflow: hidden;
        }
        #projects::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(99,210,180,0.03) 0%, transparent 65%);
          pointer-events: none;
        }
        #projects .projects-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        #projects .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 20px;
          margin-top: 56px;
        }
        @media (max-width: 720px) {
          #projects .projects-inner { padding: 0 20px; }
          #projects .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="projects" ref={ref}>
        <div className="projects-inner">
          {/* Header */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <span style={{ display: "block", width: "32px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
              Selected Work
            </p>

            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(40px, 6vw, 70px)",
              fontWeight: 800,
              color: "#f5f5f5",
              letterSpacing: "-0.035em",
              lineHeight: 0.95,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}>
              My<br />
              <span style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 400, color: "#63d2b4" }}>
                Projects
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.index} project={project} i={i} />
            ))}
          </div>

          {/* Footer note */}
          <div style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}>
            <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }} />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#63d2b4"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
            >
              <FaGithub size={13} />
              More on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
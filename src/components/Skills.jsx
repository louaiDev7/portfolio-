import { useEffect, useRef, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#f7df1e",
    bg: "rgba(247,223,30,0.08)",
    border: "rgba(247,223,30,0.2)",
    level: 92,
    tag: "Language",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
    bg: "rgba(97,218,251,0.08)",
    border: "rgba(97,218,251,0.2)",
    level: 88,
    tag: "Framework",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#e34f26",
    bg: "rgba(227,79,38,0.08)",
    border: "rgba(227,79,38,0.2)",
    level: 95,
    tag: "Markup",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572b6",
    bg: "rgba(21,114,182,0.08)",
    border: "rgba(21,114,182,0.2)",
    level: 90,
    tag: "Styling",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#f05032",
    bg: "rgba(240,80,50,0.08)",
    border: "rgba(240,80,50,0.2)",
    level: 85,
    tag: "Version Control",
  },
];

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
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
        background: hovered ? skill.bg : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? skill.border : "rgba(255,255,255,0.06)"}`,
        borderRadius: "16px",
        padding: "28px 24px",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 30% 30%, ${skill.color}18, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Tag */}
      <span style={{
        fontSize: "10px",
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: skill.color,
        opacity: 0.7,
        display: "block",
        marginBottom: "16px",
      }}>
        {skill.tag}
      </span>

      {/* Icon */}
      <div style={{
        fontSize: "38px",
        color: skill.color,
        marginBottom: "14px",
        filter: hovered ? `drop-shadow(0 0 12px ${skill.color}88)` : "none",
        transition: "filter 0.35s ease",
        lineHeight: 1,
      }}>
        {skill.icon}
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "18px",
        fontWeight: 700,
        color: "#f0f0f0",
        marginBottom: "18px",
        letterSpacing: "-0.01em",
      }}>
        {skill.name}
      </div>

      {/* Progress Bar */}
      <div style={{ position: "relative" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6px",
        }}>
          <span style={{
            fontSize: "10px",
            fontFamily: "'DM Mono', monospace",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.08em",
          }}>PROFICIENCY</span>
          <span style={{
            fontSize: "11px",
            fontFamily: "'DM Mono', monospace",
            color: skill.color,
            opacity: 0.9,
          }}>{skill.level}%</span>
        </div>
        <div style={{
          height: "3px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "100px",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            width: visible ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            borderRadius: "100px",
            transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${index * 100 + 400}ms`,
            boxShadow: `0 0 8px ${skill.color}66`,
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap');
        
        #skills * { box-sizing: border-box; }

        #skills .skills-header-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #fff, transparent);
          margin-bottom: 12px;
        }

        #skills .skills-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 16px;
        }

        #skills .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: #f8f8f8;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0 0 8px 0;
        }

        #skills .skills-subtitle {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin-top: 12px;
          letter-spacing: 0.02em;
        }

        #skills .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 56px;
        }

        #skills .skills-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), transparent);
          margin: 48px 0 0;
        }

        #skills .skills-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }

        #skills .skills-footer-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }

        #skills .skills-footer-text {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }
      `}</style>

      <section
        id="skills"
        style={{
          background: "#0a0a0c",
          padding: "100px 0",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
        }}>
          {/* Header */}
          <div>
            <div className="skills-header-line" />
            <p className="skills-eyebrow">Technical Expertise</p>
            <h2 className="skills-title">Skills &<br />Technologies</h2>
            <p className="skills-subtitle">// Tools I use to build for the web</p>
          </div>

          {/* Grid */}
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Footer */}
          <div className="skills-divider" />
          <div className="skills-footer">
            <div className="skills-footer-dot" />
            <span className="skills-footer-text">CONTINUOUSLY LEARNING · ALWAYS BUILDING</span>
          </div>
        </div>
      </section>
    </>
  );
}
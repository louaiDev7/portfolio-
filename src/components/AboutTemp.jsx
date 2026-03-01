import { useEffect, useRef, useState } from "react";
import myPhoto from "../assets/photo_2026-03-01_02-07-22.jpg";

export default function AboutTemp() {
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&family=Lora:ital,wght@0,400;1,400&display=swap');

        #about * { box-sizing: border-box; margin: 0; padding: 0; }

        #about {
          background: #0a0a0c;
          padding: 110px 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background shapes */
        #about::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,210,180,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        #about::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -60px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(80,120,220,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        #about .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* ── Header ─────────────────────────────── */
        #about .about-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        #about .about-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }
        #about .about-eyebrow.show { opacity: 1; transform: translateY(0); }

        #about .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 6vw, 70px);
          font-weight: 800;
          color: #f5f5f5;
          letter-spacing: -0.035em;
          line-height: 0.95;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s;
        }
        #about .about-title.show { opacity: 1; transform: translateY(0); }

        #about .about-title em {
          font-family: 'Lora', serif;
          font-style: italic;
          font-weight: 400;
          color: #63d2b4;
        }

        /* ── Grid layout ──────────────────────────── */
        #about .about-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: center;
          margin-top: 72px;
        }

        @media (max-width: 860px) {
          #about .about-grid {
            grid-template-columns: 1fr;
            gap: 52px;
          }
          #about .about-image-col { order: -1; }
        }

        /* ── Content column ──────────────────────── */
        #about .about-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,210,180,0.08);
          border: 1px solid rgba(99,210,180,0.2);
          border-radius: 100px;
          padding: 6px 16px 6px 10px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s;
        }
        #about .about-role-badge.show { opacity: 1; transform: translateX(0); }

        #about .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #63d2b4;
          box-shadow: 0 0 8px #63d2b488;
          animation: pulse-dot 2.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        #about .badge-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #63d2b4;
          text-transform: uppercase;
        }

        #about .about-desc {
          font-family: 'Lora', serif;
          font-size: 17px;
          line-height: 1.78;
          color: rgba(255,255,255,0.58);
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        #about .about-desc.show { opacity: 1; transform: translateY(0); }
        #about .about-desc:nth-of-type(1) { transition-delay: 0.3s; }
        #about .about-desc:nth-of-type(2) { transition-delay: 0.42s; }

        #about .about-desc strong {
          color: rgba(255,255,255,0.85);
          font-weight: 400;
        }

        /* Stats row */
        #about .about-stats {
          display: flex;
          gap: 36px;
          margin-top: 36px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.55s, transform 0.65s ease 0.55s;
        }
        #about .about-stats.show { opacity: 1; transform: translateY(0); }

        #about .stat {
          border-left: 1px solid rgba(255,255,255,0.08);
          padding-left: 20px;
        }
        #about .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: #f5f5f5;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        #about .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-top: 5px;
        }

        /* ── Image column ────────────────────────── */
        #about .about-image-col {
          position: relative;
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s;
        }
        #about .about-image-col.show { opacity: 1; transform: translateX(0); }

        /* Decorative frame */
        #about .img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }
        #about .img-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,210,180,0.15) 0%, transparent 50%, rgba(80,120,220,0.1) 100%);
          z-index: 1;
          pointer-events: none;
          border-radius: inherit;
        }

        #about .img-frame img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
          border-radius: 20px;
          filter: grayscale(20%) contrast(1.05);
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        #about .img-frame:hover img {
          filter: grayscale(0%) contrast(1.05);
          transform: scale(1.02);
        }

        /* Corner accent */
        #about .img-accent {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 100px;
          height: 100px;
          border: 1px solid rgba(99,210,180,0.2);
          border-radius: 14px;
          z-index: -1;
        }
        #about .img-accent-2 {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(80,120,220,0.2);
          border-radius: 10px;
          z-index: -1;
        }

        /* Label on image */
        #about .img-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(10,10,12,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 10px 14px;
          z-index: 2;
        }
        #about .img-label-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #f5f5f5;
          letter-spacing: -0.01em;
        }
        #about .img-label-role {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: #63d2b4;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }
      `}</style>

      <section id="about" ref={ref}>
        <div className="about-inner">
          {/* Header */}
          <p className={`about-eyebrow ${visible ? "show" : ""}`}>Who I Am</p>
          <h2 className={`about-title ${visible ? "show" : ""}`}>
            About<br /><em>Me</em>
          </h2>

          <div className="about-grid">
            {/* Text */}
            <div className="about-content-col">
              <div className={`about-role-badge ${visible ? "show" : ""}`}>
                <span className="badge-dot" />
                <span className="badge-label">Available for Work</span>
              </div>

              <p className={`about-desc ${visible ? "show" : ""}`}>
                I'm a <strong>Full Stack Developer</strong> building modern, high-performance
                web applications with <strong>React</strong>, <strong>Node.js</strong>, and
                contemporary JavaScript — with a deep focus on seamless user experiences.
              </p>
              <p className={`about-desc ${visible ? "show" : ""}`}>
                I believe great software lives at the intersection of <strong>clean architecture</strong> and
                thoughtful design. I enjoy collaborating on ambitious projects and pushing
                the limits of what the web can do.
              </p>

              <div className={`about-stats ${visible ? "show" : ""}`}>
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Exp.</div>
                </div>
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Curiosity</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className={`about-image-col ${visible ? "show" : ""}`}>
              <div style={{ position: "relative" }}>
                <div className="img-frame">
                  <img src={myPhoto} alt="Louai" />
                  <div className="img-label">
                    <div className="img-label-name">Louai</div>
                    <div className="img-label-role">Full Stack Developer</div>
                  </div>
                </div>
                <div className="img-accent" />
                <div className="img-accent-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
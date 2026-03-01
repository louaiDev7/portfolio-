import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) { setStatus("error"); return; }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1500);
  };

  const isDisabled = status === "loading" || status === "success";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Lora:ital@0;1&display=swap');
        #contact * { box-sizing: border-box; margin: 0; padding: 0; }

        #contact {
          background: #0a0a0c;
          padding: 110px 0 80px;
          position: relative;
          overflow: hidden;
        }
        #contact::before {
          content: '';
          position: absolute;
          bottom: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(99,210,180,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        #contact::after {
          content: '';
          position: absolute;
          top: -80px; left: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(80,120,220,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        #contact .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        #contact .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-top: 56px;
        }

        @media (max-width: 800px) {
          #contact .contact-layout { grid-template-columns: 1fr; gap: 52px; }
          #contact .contact-inner { padding: 0 20px; }
        }

        /* Left: info */
        #contact .contact-info-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        #contact .contact-info-label::before {
          content: '';
          display: block;
          width: 32px; height: 1px;
          background: rgba(255,255,255,0.2);
        }

        #contact .contact-tagline {
          font-family: 'Lora', serif;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.45);
          margin-bottom: 40px;
          max-width: 380px;
        }
        #contact .contact-tagline strong {
          color: rgba(255,255,255,0.75);
          font-weight: 400;
        }

        #contact .contact-email-display {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(99,210,180,0.06);
          border: 1px solid rgba(99,210,180,0.15);
          border-radius: 12px;
          margin-bottom: 32px;
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        #contact .contact-email-display:hover {
          background: rgba(99,210,180,0.1);
          border-color: rgba(99,210,180,0.25);
        }
        #contact .contact-email-icon {
          color: #63d2b4;
          font-size: 16px;
          flex-shrink: 0;
        }
        #contact .contact-email-text {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #63d2b4;
          letter-spacing: 0.04em;
        }

        #contact .social-links {
          display: flex;
          gap: 10px;
        }
        #contact .social-link {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: rgba(255,255,255,0.35);
          font-size: 16px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        #contact .social-link:hover {
          color: #63d2b4;
          border-color: rgba(99,210,180,0.25);
          background: rgba(99,210,180,0.06);
          transform: translateY(-2px);
        }

        /* Right: form */
        #contact .contact-form-wrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
        }
        #contact .contact-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,210,180,0.3), transparent);
        }

        #contact .form-group {
          margin-bottom: 18px;
        }
        #contact .form-label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 8px;
        }

        #contact .form-input,
        #contact .form-textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 13px 16px;
          font-family: 'Lora', serif;
          font-size: 14px;
          color: #f0f0f0;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          resize: none;
        }
        #contact .form-input::placeholder,
        #contact .form-textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        #contact .form-input:focus,
        #contact .form-textarea:focus {
          border-color: rgba(99,210,180,0.35);
          background: rgba(99,210,180,0.04);
          box-shadow: 0 0 0 3px rgba(99,210,180,0.06);
        }
        #contact .form-input.err { border-color: rgba(251,113,133,0.4); }
        #contact .form-textarea { height: 120px; }

        #contact .form-error {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: #fb7185;
          letter-spacing: 0.08em;
          margin-top: 6px;
          display: block;
        }

        #contact .form-submit {
          width: 100%;
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0a0c;
          background: #63d2b4;
          border: none;
          border-radius: 100px;
          padding: 14px 28px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease, opacity 0.25s ease;
          font-weight: 500;
        }
        #contact .form-submit:hover:not(:disabled) {
          background: #7ae0c6;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(99,210,180,0.3);
        }
        #contact .form-submit:disabled {
          cursor: not-allowed;
          opacity: 0.75;
        }
        #contact .form-submit.success-btn {
          background: rgba(99,210,180,0.15);
          color: #63d2b4;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes check-draw {
          from { stroke-dashoffset: 30; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="contact" ref={ref}>
        <div className="contact-inner">
          {/* Header */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "14px",
              display: "flex", alignItems: "center", gap: "12px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
              <span style={{ display: "block", width: "32px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
              Get In Touch
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
              Let's<br />
              <span style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 400, color: "#63d2b4" }}>
                Connect
              </span>
            </h2>
          </div>

          <div className="contact-layout">
            {/* Left column */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}>
              <p className="contact-tagline">
                I'm currently <strong>open to new opportunities</strong> — whether it's a full-time role,
                freelance project, or just a conversation. I'll get back to you within <strong>24 hours</strong>.
              </p>

              <a href="mailto:louai@example.com" className="contact-email-display">
                <FaEnvelope className="contact-email-icon" />
                <span className="contact-email-text">louai@example.com</span>
              </a>

              <div>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: "14px",
                }}>Find me online</p>
                <div className="social-links">
                  {socials.map(({ icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            }}>
              <div className="contact-form-wrap">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${status === "error" ? "err" : ""}`}
                      placeholder="hello@yourdomain.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      disabled={isDisabled}
                      aria-label="Email address"
                    />
                    {status === "error" && (
                      <span className="form-error">↳ Please enter a valid email address.</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message <span style={{ color: "rgba(255,255,255,0.15)" }}>(optional)</span></label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell me about your project or just say hi..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isDisabled}
                      aria-label="Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`form-submit ${status === "success" ? "success-btn" : ""}`}
                    disabled={isDisabled}
                  >
                    {status === "idle" && "Send Message"}
                    {status === "error" && "Try Again →"}
                    {status === "loading" && (
                      <>
                        <svg style={{ animation: "spin 1s linear infinite" }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          style={{ strokeDasharray: 30, strokeDashoffset: 0, animation: "check-draw 0.4s ease forwards" }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Message Sent!
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            marginTop: "80px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>
              © {new Date().getFullYear()} Louai. Built with React.
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>
              Constantine, Algeria 🇩🇿
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SiteFooter() {
  useEffect(() => {
    const canvasEl = document.getElementById("footerCanvas") as HTMLCanvasElement | null;
    if (!canvasEl) return;
    const canvas = canvasEl;
    const ctxEl = canvas.getContext("2d");
    if (!ctxEl) return;
    const ctx = ctxEl;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];
    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 120;
    const gold = "rgba(197,165,90,";
    const white = "rgba(255,255,255,";

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? gold : white,
      };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.6)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.strokeStyle = "rgba(197,165,90," + alpha + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <footer
      className="footer"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        paddingTop: 60,
        paddingBottom: 30,
        marginTop: 30,
        background: "#0a1225",
      }}
    >
      <canvas
        id="footerCanvas"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0.5 }}
      ></canvas>
      <img
        src="/Content/images/dr/dr-bot.webp"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(10,18,37,0.85) 0%, rgba(1,21,62,0.92) 50%, rgba(10,18,37,0.88) 100%)",
          zIndex: 1,
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <img
                src="/Content/images/site-logo/logo.webp"
                alt="IMC Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: "transparent",
                  padding: 0,
                  filter: "drop-shadow(0 2px 8px rgba(197,165,90,0.3))",
                }}
              />
              <div>
                <h5
                  className="text-white font-weight-bold mb-0"
                  style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "1.05rem" }}
                >
                  IMC
                </h5>
                <span style={{ fontSize: "0.7rem", color: "#c5a55a", letterSpacing: "0.04em" }}>
                  Intelligent Media Center (IMC)
                </span>
              </div>
            </div>
            <p className="small" style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}>
              A cutting-edge research lab specializing in AI, computer vision, smart environments, and pattern
              recognition.
            </p>
            <p className="small mb-0" style={{ color: "#7a8ba5", lineHeight: 2 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <i className="fas fa-map-marker-alt" style={{ color: "#c5a55a", minWidth: 16 }}></i>Dept of CSE,
                E-9, Islamabad
              </span>
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#ffffff" }}>
                  Prof. Dr. Hafiz Ahmad Jalal
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                  <a
                    href="https://scholar.google.com/citations?user=BIRC9XEAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="Google Scholar"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-jalal-66973540/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:ahmjal@yahoo.com" style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }} title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#ffffff" }}>Dr. Shaheryar Najam</div>
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                  <a
                    href="https://scholar.google.com.pk/citations?user=kQxo9CYAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="Google Scholar"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shaheryar-najam-95648843/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="mailto:shaheryar.najam@riphah.edu.pk"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#ffffff" }}>
                  Dr. Adnan Ahmad Rafique
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                  <a
                    href="https://scholar.google.com.pk/citations?user=o5UkbAQAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="Google Scholar"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adnan-ahmad-rafique-05586643/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="mailto:adnanahmadrafique@gmail.com"
                    style={{ color: "#94a3b8", fontSize: "0.85rem", transition: "color 0.3s" }}
                    title="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <h5
              className="text-white font-weight-bold mb-3"
              style={{
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                paddingBottom: 8,
                borderBottom: "2px solid #c5a55a",
                display: "inline-block",
              }}
            >
              Quick Links
            </h5>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 20px" }}>
              <Link href="/projects" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Ongoing Projects
              </Link>
              <Link href="/publications" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Publications
              </Link>
              <Link href="/datasets" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Datasets
              </Link>
              <Link href="/open-source-code" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Open-Source Code
              </Link>
              <Link href="/members/professors" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Faculty
              </Link>
              <Link href="/alumni" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Alumni
              </Link>
              <Link href="/join-us" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Join Us
              </Link>
              <Link href="/contact" className="footer-link">
                <i className="fas fa-chevron-right footer-link-icon"></i> Contact
              </Link>
            </div>
            <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
              <a
                href="https://scholar.google.com/citations?user=BIRC9XEAAAAJ"
                target="_blank"
                rel="noreferrer"
                title="IMC on Google Scholar"
                className="footer-social"
              >
                <i className="fas fa-graduation-cap"></i>
              </a>
              <a
                href="https://www.facebook.com/imcairuniversity"
                target="_blank"
                rel="noreferrer"
                title="IMC on Facebook"
                className="footer-social"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:ahmjal@yahoo.com" title="Email IMC" className="footer-social">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "10px 0 20px" }} />

        <div className="row">
          <div className="col-12 text-center mb-3">
            <p className="mb-0" style={{ color: "#6b7a90", fontSize: "0.78rem", textAlign: "center" }}>
              Intelligent Media Center (IMC) &copy; 2017-2025. All Rights Reserved.
            </p>
          </div>
          <div className="col-12 text-center">
            <a href="https://info.flagcounter.com/7Pel" target="_blank" rel="noreferrer" style={{ display: "inline-block" }}>
              <img
                style={{ maxHeight: 70, borderRadius: 4 }}
                src="https://s01.flagcounter.com/count2/7Pel/bg_01153e/txt_cbd5e1/border_1a3a6e/columns_7/maxflags_28/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                alt="Flag Counter"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.82rem;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-link:hover { color: #ffffff; }
        .footer-link-icon { font-size: 0.55rem; color: #c5a55a; }
        .footer-social {
          color: #c5a55a;
          font-size: 1.1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(197,165,90,0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s;
        }
        .footer-social:hover { background: rgba(197,165,90,0.1); border-color: #c5a55a; }
      `}</style>
    </footer>
  );
}

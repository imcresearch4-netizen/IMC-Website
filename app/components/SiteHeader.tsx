"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SiteHeader() {
  useEffect(() => {
    function checkHeaderVisibility() {
      const header = document.getElementById("headerDismissible");
      if (!header) return;
      if (window.innerWidth >= 768) {
        header.style.display = "block";
      } else if (localStorage.getItem("headerDismissed") === "true") {
        header.style.display = "none";
      } else {
        header.style.display = "block";
      }
    }
    document.addEventListener("DOMContentLoaded", checkHeaderVisibility);
    window.addEventListener("resize", checkHeaderVisibility);
    checkHeaderVisibility();

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", checkHeaderVisibility);
      };
    }
  }, []);

  return (
    <>
      <div id="headerDismissible" className="container-fluid position-relative">
        <button
          type="button"
          className="close-header-btn d-md-none"
          onClick={() => {
            const header = document.getElementById("headerDismissible");
            if (header) {
              header.style.display = "none";
              localStorage.setItem("headerDismissed", "true");
            }
          }}
          aria-label="Close header"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            fontSize: "1.4rem",
            lineHeight: 1,
            color: "#cbd5e1",
            cursor: "pointer",
            zIndex: 1050,
            padding: "4px 10px",
            borderRadius: "50%",
            transition: "all 0.3s",
          }}
        >
          &times;
        </button>
        <div className="header-logo-wrap">
          <img id="imcLogo" className="logos" src="/Content/images/site-logo/logo.webp" alt="IMC" />
          <img className="logos extra-logo" src="/Content/images/site-logo/logo2.png" alt="Partner Logo 1" />
        </div>
        <div className="header-title-wrap">
          <span className="header-title-main">
            <span className="it">I</span>ntelligent <span className="it">M</span>edia <span className="it">C</span>enter&nbsp;<span className="imc-badge">(IMC)</span>
          </span>
        </div>
        <div className="header-logo-wrap header-right-wrap">
          <img className="logos extra-logo" src="/Content/images/site-logo/logo3.png" alt="Partner Logo 2" />
          <div className="future-logo-slot" aria-hidden="true"></div>
        </div>
        <div className="header-spacer"></div>
      </div>

      <style>{`
        #headerDismissible {
          display: grid !important;
          grid-template-columns: auto 1fr auto !important;
          align-items: center !important;
          padding: 8px 24px !important;
          background: linear-gradient(180deg, #01153e 0%, #0a2454 100%) !important;
          box-shadow: 0 4px 20px rgba(1, 21, 62, 0.25) !important;
          border-bottom: 2px solid rgba(197, 165, 90, 0.3) !important;
          animation: headerSlideDown 0.7s ease both !important;
          margin-bottom: 0 !important;
        }
        #headerDismissible::before {
          content: "" !important;
          position: absolute !important;
          inset: 0 !important;
          background: transparent !important;
          pointer-events: none !important;
        }
        #headerDismissible > * {
          position: relative !important;
          z-index: 1 !important;
        }
        #headerDismissible .close-header-btn {
          position: absolute !important;
          z-index: 1050 !important;
        }
        .header-logo-wrap {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          justify-self: center !important;
          gap: 3px !important;
          min-width: 0 !important;
          width: clamp(120px, 15vw, 200px) !important;
        }
        .header-logo-wrap:not(.header-right-wrap) .extra-logo {
          margin-left: -6px !important;
        }
        .header-right-wrap .extra-logo {
          margin-left: -8px !important;
        }
        .header-right-wrap .future-logo-slot {
          margin-left: -6px !important;
        }
        .header-right-wrap {
          justify-self: end !important;
          gap: 3px !important;
          min-width: 0 !important;
          width: clamp(120px, 15vw, 200px) !important;
        }
        .header-title-wrap {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          text-align: center !important;
          justify-self: center !important;
          min-width: 0 !important;
          padding: 0 36px !important;
          flex: 1 1 auto !important;
          overflow: hidden !important;
        }
        .header-spacer { justify-self: end !important; width: 0 !important; }
        #headerDismissible .logos {
          height: clamp(48px, 6.5vw, 82px) !important;
          max-height: clamp(48px, 6.5vw, 82px) !important;
          width: auto !important;
          object-fit: contain !important;
          border-radius: 8px !important;
          filter: drop-shadow(0 2px 8px rgba(197, 165, 90, 0.3)) !important;
          transition: transform 0.3s ease, filter 0.3s ease !important;
        }
        #headerDismissible .extra-logo {
          object-fit: contain !important;
          border-radius: 8px !important;
          padding: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35)) !important;
        }
        .future-logo-slot {
          display: none !important;
        }
        .header-title-main .it {
          font-style: normal !important;
          font-weight: 700 !important;
          font-size: 1.08em !important;
          background: linear-gradient(160deg, #fffbe6 0%, #ffe680 25%, #fff8dc 45%, #ffd700 65%, #fff8dc 85%, #fffbe6 100%) !important;
          background-size: 200% auto !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          animation: headerGoldShine 4s linear infinite, itGlowPulse 2.2s ease-in-out infinite !important;
          filter: drop-shadow(0 0 14px rgba(255, 224, 130, 0.85)) drop-shadow(0 0 30px rgba(255, 200, 60, 0.45)) !important;
        }
        .header-title-main .imc-badge {
          font-style: normal !important;
          letter-spacing: 0.06em !important;
          font-size: 1em !important;
          vertical-align: baseline !important;
          margin-left: 0.15em !important;
        }
        .header-title-main {
          font-style: normal !important;
          background: linear-gradient(110deg, #b8860b 0%, #ffd700 18%, #fff8dc 34%, #ffd700 50%, #b8860b 68%, #ffd700 82%, #fff8dc 100%) !important;
          background-size: 250% auto !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          animation: headerGoldShine 4s linear infinite !important;
          letter-spacing: 0.04em !important;
          white-space: nowrap !important;
          font-size: clamp(1.6rem, 4.2vw, 2.9rem) !important;
          font-weight: 700 !important;
          font-family: 'Playfair Display', serif !important;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 18px rgba(212, 175, 55, 0.45)) !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
        }
        @keyframes itGlowPulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 224, 130, 0.6)) drop-shadow(0 0 22px rgba(255, 200, 60, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 224, 130, 1)) drop-shadow(0 0 42px rgba(255, 200, 60, 0.6)); }
        }
        @keyframes headerGoldShine {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes headerSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          #headerDismissible { padding: 10px 14px !important; grid-template-columns: auto 1fr !important; }
          #headerDismissible .logos { height: 44px !important; max-height: 44px !important; }
          #headerDismissible .extra-logo, #headerDismissible .future-logo-slot { display: none !important; }
          .header-title-wrap { transform: none !important; padding: 0 8px !important; }
          .header-title-main { font-size: clamp(0.8rem, 4vw, 1.05rem) !important; }
          .header-spacer { display: none !important; }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <a
          className="navbar-brand d-md-none d-flex align-items-center"
          href="/"
          style={{ fontWeight: 800, fontSize: "1.25rem", color: "#ffffff", textDecoration: "none" }}
        >
          <img
            src="/Content/images/site-logo/logo.webp"
            alt="IMC Logo"
            style={{
              height: 30,
              width: 30,
              objectFit: "contain",
              marginRight: 8,
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              padding: 2,
            }}
          />
          IMC
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                Members
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/members/professors">
                  Professors
                </Link>
                <Link className="dropdown-item" href="/members/students?tab=phd">
                  PhD Students
                </Link>
                <Link className="dropdown-item" href="/members/students?tab=ms">
                  MS Students
                </Link>
                <Link className="dropdown-item" href="/members/students?tab=ra">
                  Research Associates
                </Link>
                <Link className="dropdown-item" href="/alumni">
                  Alumni
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/publications">
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/datasets">
                Datasets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/open-source-code">
                Open-Source Code
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/hall-of-fame">
                Hall of Fame
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/join-us">
                Join Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

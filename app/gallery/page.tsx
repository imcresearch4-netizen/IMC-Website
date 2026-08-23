"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { galleryItems, type GalleryItem } from "@/lib/data/gallery";
import { mediaUrl } from "@/lib/media";
import { splitList, photoLabel } from "@/utils/string";
import { BAGUETTE_CSS_HREF, BAGUETTE_JS_SRC, EVENTS_CSS_HREF, PLAYFAIR_OUTFIT_CSS_HREF } from "@/config/assets";

const splitImages = (image: string): string[] => splitList(image).map(mediaUrl);

export default function GalleryPage() {
  const items: GalleryItem[] = galleryItems;
  const [scriptReady, setScriptReady] = useState(false);

  const years = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return Array.from(set).sort((a, b) => Number(b) - Number(a) || String(b).localeCompare(String(a)));
  }, [items]);

  const itemsByYear = useMemo(() => {
    const map: Record<string, GalleryItem[]> = {};
    items.forEach((item) => {
      if (!item.category) return;
      (map[item.category] = map[item.category] || []).push(item);
    });
    return map;
  }, [items]);

  const totalPhotos = useMemo(
    () => items.reduce((sum, item) => sum + splitImages(item.image).length, 0),
    [items]
  );

  useEffect(() => {
    const filterBtns = document.querySelectorAll(".ev-filter-btn");
    const yearSections = document.querySelectorAll(".ev-year-section");
    const dividers = document.querySelectorAll(".ev-year-divider");
    const filterBar = document.querySelector(".ev-filter-wrapper") as HTMLElement | null;

    const onFilterClick = (e: Event) => {
      e.preventDefault();
      const btn = e.currentTarget as HTMLElement;
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const yr = btn.getAttribute("data-year");
      yearSections.forEach((sec) => {
        const section = sec as HTMLElement;
        if (yr === "all" || section.getAttribute("data-year") === yr) {
          section.style.display = "";
          section.classList.add("ev-revealed");
          section.querySelectorAll(".ev-item").forEach((item, i) => {
            setTimeout(() => item.classList.add("ev-revealed"), i * 80);
          });
        } else {
          section.style.display = "none";
        }
      });
      dividers.forEach((d) => {
        (d as HTMLElement).style.display = yr === "all" ? "" : "none";
      });
      if (yr !== "all") {
        const target = document.querySelector('.ev-year-section[data-year="' + yr + '"]');
        if (target && filterBar) {
          const offset = filterBar.getBoundingClientRect().height + 20;
          const top = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      } else {
        const first = document.querySelector(".ev-year-section");
        if (first && filterBar) {
          const offset2 = filterBar.getBoundingClientRect().height + 20;
          const top2 = (first as HTMLElement).getBoundingClientRect().top + window.pageYOffset - offset2;
          window.scrollTo({ top: top2, behavior: "smooth" });
        }
      }
    };

    filterBtns.forEach((btn) => btn.addEventListener("click", onFilterClick));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("ev-revealed");
      });
    }, { threshold: 0.05 });
    document.querySelectorAll(".ev-item, .ev-year-section").forEach((el) => obs.observe(el));

    const onScroll = () => {
      const hero = document.querySelector(".ev-hero-bg") as HTMLElement | null;
      if (hero) hero.style.transform = "translateY(" + window.scrollY * 0.3 + "px)";
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      filterBtns.forEach((btn) => btn.removeEventListener("click", onFilterClick));
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items.length]);

  const addLightboxWow = () => {
    const overlay = document.getElementById("baguetteBox-overlay");
    if (!overlay) return;

    const old = overlay.querySelector(".ev-lb-counter");
    if (old) old.remove();

    const counter = document.createElement("div");
    counter.className = "ev-lb-counter";
    counter.style.cssText =
      "position:fixed;top:20px;left:50%;transform:translateX(-50%);background:rgba(1,21,62,0.7);backdrop-filter:blur(10px);border:1px solid rgba(197,165,90,0.3);color:#c5a55a;font-family:Outfit,sans-serif;font-size:0.82rem;font-weight:700;padding:8px 20px;border-radius:30px;z-index:99999;pointer-events:none;animation:lbCounterIn 0.4s ease both;letter-spacing:0.06em;";
    overlay.appendChild(counter);

    if (!document.getElementById("ev-lb-counter-style")) {
      const style = document.createElement("style");
      style.id = "ev-lb-counter-style";
      style.textContent =
        "@keyframes lbCounterIn{from{opacity:0;transform:translateX(-50%) translateY(-15px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}@keyframes lbCounterPulse{0%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-50%) scale(1.08)}100%{transform:translateX(-50%) scale(1)}}";
      document.head.appendChild(style);
    }

    updateLbCounter(counter);

    const slider = overlay.querySelector(".baguetteBox-slider");
    if (slider) {
      const mutObs = new MutationObserver(() => {
        updateLbCounter(counter);
        counter.style.animation = "none";
        counter.offsetHeight;
        counter.style.animation = "lbCounterPulse 0.35s ease";
      });
      mutObs.observe(slider, { childList: false, subtree: true, attributes: true, attributeFilter: ["class", "style"] });
    }
  };

  const updateLbCounter = (counter: HTMLElement) => {
    const imgs = document.querySelectorAll(".baguetteBox-slider > div");
    const total = imgs.length;
    let current = 1;
    imgs.forEach((div, i) => {
      const img = div.querySelector("img");
      if (img && img.offsetHeight > 0 && getComputedStyle(div).display !== "none") {
        current = i + 1;
      }
    });
    counter.innerHTML =
      '<i class="fas fa-images" style="margin-right:6px;opacity:0.7;"></i> ' + current + " / " + total;
  };

  const initCardNavigation = () => {
    document.querySelectorAll(".ev-item.gallery").forEach((card) => {
      const images = card.querySelectorAll(":scope > a");
      if (images.length <= 1) return;

      const total = images.length;
      let current = 0;

      const badge = document.createElement("div");
      badge.className = "ev-counter-badge";
      badge.innerHTML = '<i class="fas fa-images"></i> <span class="ev-counter-num">1/' + total + "</span>";
      card.appendChild(badge);

      const prev = document.createElement("div");
      prev.className = "ev-nav ev-nav-prev";
      prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
      card.appendChild(prev);

      const next = document.createElement("div");
      next.className = "ev-nav ev-nav-next";
      next.innerHTML = '<i class="fas fa-chevron-right"></i>';
      card.appendChild(next);

      const dotsWrap = document.createElement("div");
      dotsWrap.className = "ev-dots";
      for (let d = 0; d < total; d++) {
        const dot = document.createElement("div");
        dot.className = "ev-dot" + (d === 0 ? " active" : "");
        dot.setAttribute("data-idx", String(d));
        dotsWrap.appendChild(dot);
      }
      card.appendChild(dotsWrap);

      const showImage = (idx: number) => {
        images[current].setAttribute("style", "opacity:0;pointer-events:none;position:absolute;z-index:0;");
        current = idx;
        images[current].setAttribute("style", "opacity:1;pointer-events:auto;position:relative;z-index:1;");
        const numEl = badge.querySelector(".ev-counter-num");
        if (numEl) numEl.textContent = current + 1 + "/" + total;
        dotsWrap.querySelectorAll(".ev-dot").forEach((dot, i) => {
          dot.classList.toggle("active", i === current);
        });
      };

      showImage(0);

      prev.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showImage((current - 1 + total) % total);
      });

      next.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showImage((current + 1) % total);
      });

      dotsWrap.querySelectorAll(".ev-dot").forEach((dot) => {
        dot.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          showImage(parseInt(dot.getAttribute("data-idx") || "0", 10));
        });
      });
    });
  };

  useEffect(() => {
    if (!scriptReady || items.length === 0) return;
    const w = window as unknown as {
      baguetteBox?: { run: (sel: string, opts?: Record<string, unknown>) => void };
    };
    if (w.baguetteBox) {
      w.baguetteBox.run(".gallery", {
        animation: "slideIn",
        noScrollbars: true,
        afterShow: () => addLightboxWow(),
      });
    }
    initCardNavigation();
  }, [scriptReady, items.length]);

  return (
    <>
      <link rel="stylesheet" href={EVENTS_CSS_HREF} />
      <link rel="stylesheet" href={BAGUETTE_CSS_HREF} />
      <link href={PLAYFAIR_OUTFIT_CSS_HREF} rel="stylesheet" />

      <div className="ev-hero">
        <div className="ev-hero-bg"></div>
        <div className="ev-hero-content">
          <h1 className="ev-hero-title">
            Moments That <span className="ev-gold">Define</span> Our Journey
          </h1>
          <p className="ev-hero-sub">A visual chronicle of research milestones, team celebrations, and unforgettable experiences since 2017</p>
          <div className="ev-hero-stats">
            <div className="ev-stat">
              <span className="ev-stat-num">{items.length}</span>
              <span className="ev-stat-label">Events</span>
            </div>
            <div className="ev-stat-divider"></div>
            <div className="ev-stat">
              <span className="ev-stat-num">10</span>
              <span className="ev-stat-label">Years</span>
            </div>
            <div className="ev-stat-divider"></div>
            <div className="ev-stat">
              <span className="ev-stat-num">{totalPhotos}</span>
              <span className="ev-stat-label">Photos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ev-filter-wrapper">
        <div className="container">
          <div className="ev-filter-bar">
            <button type="button" className="ev-filter-btn active" data-year="all">
              <i className="fas fa-th"></i> All Years
            </button>
            {years.map((yr) => (
              <button type="button" className="ev-filter-btn" data-year={yr} key={yr}>
                {yr}
              </button>
            ))}
            <button type="button" className="ev-filter-btn" data-year="2016">
              2016
            </button>
          </div>
        </div>
      </div>

      <div className="ev-gallery-wrap">
        {years.map((yr, yi) => (
            <Fragment key={yr}>
              {yi > 0 && <div className="ev-year-divider"></div>}
              <div className="ev-year-section" data-year={yr}>
                <div className="ev-year-header">
                  <span className="ev-year-num">{yr}</span>
                  <span className="ev-year-line"></span>
                </div>
                <div className="ev-grid">
                  {(itemsByYear[yr] || []).map((item, idx) => {
                    const images = splitImages(item.image);
                    return (
                      <div
                        className="ev-item gallery"
                        data-year={yr}
                        key={item.id}
                        style={{ animationDelay: `${idx * 0.08}s` }}
                      >
                        {images.map((src, i) => (
                          <a key={i} href={src}>
                            <img src={src} alt="" loading="lazy" />
                          </a>
                        ))}
                        <div className="ev-overlay">
                          <div className="ev-overlay-inner">
                            <i className="fas fa-camera ev-overlay-icon"></i>
                            <span className="ev-overlay-count">
                              <i className="fas fa-images"></i> {photoLabel(images.length)}
                            </span>
                          </div>
                        </div>
                        <div className="ev-card-label">
                          <span className="ev-card-title">{item.title}</span>
                          <span className="ev-card-year">{yr}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          ))}
      </div>

      <Script
        src={BAGUETTE_JS_SRC}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <style>{`
        /* ── Persistent event label on card ── */
        .ev-card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px 10px 16px;
          background: linear-gradient(180deg, rgba(1,21,62,0) 0%, rgba(1,21,62,0.92) 55%, rgba(1,21,62,0.98) 100%);
          pointer-events: none;
          border-radius: 0 0 12px 12px;
          opacity: 0;
          transform: translateY(8px);
          animation: evLabelIn 0.5s ease forwards;
        }
        .ev-card-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          color: #ffffff;
          letter-spacing: 0.02em;
          line-height: 1.3;
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 75%;
        }
        .ev-card-year {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: 0.7rem;
          color: #c5a55a;
          background: rgba(1,21,62,0.6);
          border: 1px solid rgba(197,165,90,0.35);
          padding: 2px 10px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }
        @keyframes evLabelIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ev-item:hover .ev-card-label {
          background: linear-gradient(180deg, rgba(1,21,62,0) 0%, rgba(1,21,62,0.97) 60%, rgba(1,21,62,1) 100%);
        }
        .ev-item:hover .ev-card-title {
          max-width: 100%;
        }

        /* ── Year header wow animation ── */
        .ev-year-header {
          opacity: 0;
          transform: scale(0.85);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ev-year-section.ev-revealed .ev-year-header {
          opacity: 1;
          transform: scale(1);
        }
        .ev-year-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 900;
          font-size: 3.2rem;
          letter-spacing: 0.15em;
          background: linear-gradient(135deg, #01153e 0%, #c5a55a 45%, #01153e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: evYearShimmer 4s linear infinite;
          display: inline-block;
          text-shadow: none;
          filter: drop-shadow(0 2px 8px rgba(197,165,90,0.2));
        }
        @keyframes evYearShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* ── Staggered card entrance ── */
        .ev-item {
          opacity: 0;
          transform: translateY(30px) scale(0.96);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ev-item.ev-revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Card hover glow ── */
        .ev-item::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(197,165,90,0.4), rgba(1,21,62,0.3), rgba(197,165,90,0.4));
          opacity: 0;
          z-index: -1;
          transition: opacity 0.4s ease;
        }
        .ev-item:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

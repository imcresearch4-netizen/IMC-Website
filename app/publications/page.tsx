"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { publications as publicationData } from "@/lib/data/publications";
import { highlightAuthors, doiString } from "@/utils/publications";
import { splitVenue } from "@/utils/string";

export default function PublicationsPage() {
  const [currentCategory, setCurrentCategory] = useState("journal");
  const [currentYear, setCurrentYear] = useState<number | string>(
    Math.max(...publicationData.map((p) => p.year))
  );
  const totalCount = String(publicationData.length) + "+";

  const years = useMemo(() => {
    const ys: number[] = [];
    publicationData.forEach((p) => {
      if (ys.indexOf(p.year) === -1) ys.push(p.year);
    });
    if (ys.indexOf(2004) === -1) ys.push(2004);
    ys.sort((a, b) => b - a);
    return ys;
  }, []);

  const filtered = publicationData
    .filter(function (p) {
      if (currentCategory !== "all" && p.type !== currentCategory) return false;
      if (currentYear !== "all" && p.year !== currentYear) return false;
      return true;
    })
    .sort(function (a, b) {
      return b.year - a.year;
    });

  const half = Math.ceil(years.length / 2);
  const yearRow1 = years.slice(0, half);
  const yearRow2 = years.slice(half);

  return (
    <>
      <style>{`
        @keyframes pubFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pubGlow {
            0%, 100% { box-shadow: 0 0 6px rgba(197,165,90,0.3); }
            50% { box-shadow: 0 0 18px rgba(197,165,90,0.6); }
        }
        @keyframes pubSlideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        .wow-pub { animation: pubFadeUp 0.6s ease both; }
        .wow-pub-right { animation: pubSlideIn 0.5s ease both; }
        .wow-pub-glow { animation: pubGlow 2s ease infinite; }

        .page-title {
            max-width: 1560px; margin: 24px auto 50px; border-radius: 20px; overflow: hidden;
            box-shadow: 0 12px 36px rgba(15,30,60,0.25); position: relative; padding: 55px 0 !important;
            background: linear-gradient(135deg, #01153e 0%, #0a2547 50%, #003a6d 100%) !important;
        }
        .page-title::before {
            content: ''; position: absolute; inset: 0;
            background: radial-gradient(circle at 18% 20%, rgba(255,255,255,0.10), transparent 45%),
                        radial-gradient(circle at 82% 85%, rgba(197,165,90,0.30), transparent 50%);
            z-index: 1;
        }
        .page-title .container { position: relative; z-index: 2; }
        .page-title .content-box {
            background: rgba(255,255,255,0.10) !important; backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.22); border-radius: 16px;
            padding: 18px 64px 22px !important; box-shadow: 0 8px 24px rgba(0,30,80,0.18);
        }
        .page-title .title { font-size: 38px; font-weight: 700; color: #fff; margin-bottom: 10px; letter-spacing: -0.5px; border-bottom: 1px solid rgba(255,255,255,0.35) !important; }
        .page-title .bread-crumb {
            display: inline-flex; gap: 6px; align-items: center;
            background: rgba(255,255,255,0.18); backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.30); padding: 8px 20px;
            border-radius: 50px; list-style: none; margin: 0;
        }
        .page-title .bread-crumb li { color: rgba(255,255,255,0.92); font-size: 14px; font-weight: 500; }
        .page-title .bread-crumb li a { color: #fff; }
        .page-title .bread-crumb li:not(:last-child)::after { content: '/'; margin: 0 4px 0 8px; opacity: 0.5; }

        .pub-stats-row { display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap; }
        .pub-stat-chip { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(197,165,90,0.25); border-radius: 10px; padding: 8px 16px; }
        .pub-stat-chip .stat-num { font-size: 1.2rem; font-weight: 800; color: #c5a55a; }
        .pub-stat-chip .stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }

        .articles-section { padding: 30px 0 80px; background: #f8f9fa; }

        .category-tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; }
        .cat-tab-wrap { animation: pubFadeUp 0.5s ease both; }
        .cat-tab-wrap:nth-child(1) { animation-delay: 0.1s; }
        .cat-tab-wrap:nth-child(2) { animation-delay: 0.2s; }
        .cat-tab-wrap:nth-child(3) { animation-delay: 0.3s; }
        .category-tab {
            padding: 12px 28px; font-size: 14px; font-weight: 600; border-radius: 8px;
            cursor: pointer; transition: all 0.25s ease; background: #fff;
            border: 2px solid #01153e; color: #01153e; text-transform: uppercase;
            letter-spacing: 0.04em;
        }
        .category-tab:hover { background: #fff3d6; transform: translateY(-2px); box-shadow: 0 0 14px rgba(197,165,90,0.5); border-color: #c5a55a; color: #c5a55a; }
        .category-tab.active { background: #01153e; color: #fff; border-color: #01153e; box-shadow: 0 4px 14px rgba(1,21,62,0.3); }
        .category-tab.active:hover { background: #01153e; color: #fff; border-color: #01153e; box-shadow: 0 4px 20px rgba(1,21,62,0.5); }

        .year-filter-wrap { margin-bottom: 32px; }
        .year-filter-row {
            display: flex; justify-content: center; gap: 6px; flex-wrap: wrap;
            margin-bottom: 6px;
        }
        .year-btn {
            padding: 6px 14px; font-size: 13px; font-weight: 500; border-radius: 6px;
            cursor: pointer; transition: all 0.3s ease; background: #fff;
            border: 1px solid #d0d5dd; color: #4a4a4a;
            animation: pubFadeUp 0.5s ease both;
        }
        .year-btn:nth-child(1) { animation-delay: 0.05s; }
        .year-btn:nth-child(2) { animation-delay: 0.10s; }
        .year-btn:nth-child(3) { animation-delay: 0.15s; }
        .year-btn:nth-child(4) { animation-delay: 0.20s; }
        .year-btn:nth-child(5) { animation-delay: 0.25s; }
        .year-btn:nth-child(6) { animation-delay: 0.30s; }
        .year-btn:nth-child(7) { animation-delay: 0.35s; }
        .year-btn:nth-child(8) { animation-delay: 0.40s; }
        .year-btn:nth-child(9) { animation-delay: 0.45s; }
        .year-btn:nth-child(10) { animation-delay: 0.50s; }
        .year-btn:nth-child(11) { animation-delay: 0.55s; }
        .year-btn:hover { border-color: #c5a55a; color: #c5a55a; background: #fff3d6; transform: translateY(-2px); box-shadow: 0 4px 14px rgba(197,165,90,0.35); }
        .year-btn.active { background: #01153e; color: #fff; border-color: #01153e; }

        .pub-list { max-width: 1100px; margin: 0 auto; }
        .pub-card {
            display: flex; gap: 20px; align-items: stretch;
            background: #fff; border-radius: 10px; padding: 18px 22px; margin-bottom: 16px;
            border-left: 4px solid #01153e;
            box-shadow: 0 2px 10px rgba(1,21,62,0.07);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: pubFadeUp 0.6s ease both;
        }
        .pub-card:nth-child(1) { animation-delay: 0.05s; }
        .pub-card:nth-child(2) { animation-delay: 0.10s; }
        .pub-card:nth-child(3) { animation-delay: 0.15s; }
        .pub-card:nth-child(4) { animation-delay: 0.20s; }
        .pub-card:nth-child(5) { animation-delay: 0.25s; }
        .pub-card:nth-child(6) { animation-delay: 0.30s; }
        .pub-card:nth-child(7) { animation-delay: 0.35s; }
        .pub-card:nth-child(8) { animation-delay: 0.40s; }
        .pub-card:nth-child(9) { animation-delay: 0.45s; }
        .pub-card:nth-child(10) { animation-delay: 0.50s; }
        .pub-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(1,21,62,0.15); }
        .pub-card-body { flex: 1; min-width: 200px; display: flex; flex-direction: column; }
        .pub-card-title { font-size: 1rem; font-weight: 700; color: #01153e; line-height: 1.4; margin-bottom: 6px; }
        .pub-card-authors { font-size: 0.82rem; color: #5a6478; margin-bottom: 4px; line-height: 1.5; }
        .pub-card-authors .highlight-author { font-weight: 700; color: #01153e; }
        .pub-card-venue { font-size: 0.82rem; color: #2563eb; margin-bottom: 4px; line-height: 1.5; font-weight: 500; }
        .pub-card-meta { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-top: auto; padding-top: 8px; }
        .pub-doi-badge { display: inline-block; background: #f0f2f5; color: #4a4a4a; font-size: 0.7rem; padding: 3px 10px; border-radius: 6px; font-weight: 500; }
        .pub-citation-badge { display: inline-block; background: #e8f0fe; color: #01153e; font-size: 0.7rem; padding: 3px 10px; border-radius: 6px; font-weight: 600; }
        .pub-view-btn {
            display: inline-flex; align-items: center; gap: 6px; padding: 6px 16px;
            background: #01153e; color: #fff !important; border-radius: 6px;
            font-size: 0.78rem; font-weight: 600; text-decoration: none;
            transition: all 0.3s ease; margin-left: auto;
        }
        .pub-view-btn:hover { background: #c5a55a; transform: translateY(-1px) scale(1.04); box-shadow: 0 4px 14px rgba(197,165,90,0.4); color: #fff !important; text-decoration: none; }

        .pub-stat-chip { animation: pubFadeUp 0.6s ease both; }
        .pub-stat-chip:nth-child(1) { animation-delay: 0.1s; }
        .pub-stat-chip:nth-child(2) { animation-delay: 0.2s; }
        .pub-stat-chip:nth-child(3) { animation-delay: 0.3s; }

        .no-results { text-align: center; padding: 60px 20px; color: #888; }
        .no-results i { font-size: 3rem; color: #d0d5dd; margin-bottom: 16px; }

        @media (max-width: 768px) {
            .page-title { margin: 16px 12px 30px; padding: 40px 0 !important; }
            .page-title .title { font-size: 26px; }
            .page-title .content-box { padding: 12px 16px 16px !important; }
            .articles-section { padding: 20px 0 50px; }
            .pub-card { flex-direction: column; padding: 14px !important; }
            .category-tab { padding: 10px 18px; font-size: 12px; }
            .year-btn { padding: 5px 10px; font-size: 11px; }
            .pub-stat-chip { padding: 5px 10px; }
            .pub-stat-chip .stat-num { font-size: 0.9rem; }
        }
      `}</style>

      <section className="page-title centred">
        <div className="container">
          <div className="content-box">
            <div className="title">Publications</div>
            <ul className="bread-crumb">
              <li><Link href="/">Home</Link></li>
              <li>Publications</li>
            </ul>
            <div className="pub-stats-row">
              <div className="pub-stat-chip"><span className="stat-num" id="totalCount">{totalCount}</span><span className="stat-label">Total</span></div>
              <div className="pub-stat-chip"><span className="stat-num">19,576+</span><span className="stat-label">Citations</span></div>
              <div className="pub-stat-chip"><span className="stat-num">64</span><span className="stat-label">h-index</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="container">
          <div className="category-tabs" id="categoryTabs">
            <div className="cat-tab-wrap"><div className={"category-tab" + (currentCategory === "journal" ? " active" : "")} data-category="journal" onClick={() => setCurrentCategory("journal")}>International Journals</div></div>
            <div className="cat-tab-wrap"><div className={"category-tab" + (currentCategory === "conference" ? " active" : "")} data-category="conference" onClick={() => setCurrentCategory("conference")}>International Conferences</div></div>
            <div className="cat-tab-wrap"><div className={"category-tab" + (currentCategory === "patent" ? " active" : "")} data-category="patent" onClick={() => setCurrentCategory("patent")}>Patents</div></div>
          </div>

          <div className="year-filter-wrap" id="yearFilterWrap">
            <div className="year-filter-row" id="yearRow1">
              {yearRow1.map(function (y) {
                return (
                  <div key={y} className={"year-btn" + (currentYear === y ? " active" : "")} onClick={() => setCurrentYear(y)}>{y}</div>
                );
              })}
            </div>
            <div className="year-filter-row" id="yearRow2">
              {yearRow2.map(function (y) {
                return (
                  <div key={y} className={"year-btn" + (currentYear === y ? " active" : "")} onClick={() => setCurrentYear(y)}>{y}</div>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results" id="noResults">
              <i className="fas fa-search"></i>
              <div>No publications found for the selected filters.</div>
            </div>
          ) : (
            <div className="pub-list" id="pubList">
              {filtered.map(function (p, idx) {
                const venueMain = p.venue ? splitVenue(p.venue) : "";
                const doi = doiString(p.link);
                return (
                  <div className="pub-card" key={p.link + "-" + idx}>
                    <div className="pub-card-body">
                      <div className="pub-card-title">{p.title}</div>
                      <div className="pub-card-authors" dangerouslySetInnerHTML={{ __html: highlightAuthors(p.authors || "") }} />
                      <div className="pub-card-venue">{venueMain}</div>
                      <div className="pub-card-meta">
                        {doi && <span className="pub-doi-badge">{doi}</span>}
                        {p.citations && <span className="pub-citation-badge">{p.citations}</span>}
                        <a className="pub-view-btn" href={p.link.replace(/&amp;/g, "&")} target="_blank">View PDF</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

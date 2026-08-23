"use client";

import { hallOfFame } from "@/lib/data/hallOfFame";
import PageHeader from "@/components/ui/PageHeader";
import WowScript from "@/components/wrappers/WowScript";

export default function HallOfFamePage() {
  return (
    <>
      <PageHeader
        icon="fas fa-trophy"
        title="Hall of Fame"
        subtitle="Celebrating IMC graduates making an impact worldwide"
      />

      <div className="container page-content">
        <div className="row hof-grid" id="hofGrid">
          {hallOfFame.length === 0 ? (
            <div className="col-12">
              <p className="text-center text-grey" style={{ padding: "40px 0" }}>No alumni found.</p>
            </div>
          ) : (
            hallOfFame.map((a) => (
              <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={a.id}>
                <div className="hof-card wow-ph">
                  <div className="hof-card-img-wrap">
                    <img src={a.photo} alt={a.name} loading="lazy" decoding="async" />
                  </div>
                  <h5 className="hof-name">{a.name}</h5>
                  {a.position && <p className="hof-pos">{a.position}</p>}
                  {a.link && (
                    <a href={a.link} target="_blank" className="hof-rg-link">
                      <i className="fab fa-researchgate"></i> ResearchGate
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <WowScript />

      <style>{`
        @keyframes hofGlow {
            0%, 100% { box-shadow: 0 4px 15px rgba(1,21,62,0.08); }
            50% { box-shadow: 0 8px 30px rgba(197,165,90,0.20); }
        }
        @keyframes hofImgReveal {
            from { clip-path: circle(0% at 50% 50%); }
            to { clip-path: circle(100% at 50% 50%); }
        }

        .hof-grid { margin-top: 30px; }

        .wow-ph:nth-child(1) { animation-delay: 0.05s; }
        .wow-ph:nth-child(2) { animation-delay: 0.10s; }
        .wow-ph:nth-child(3) { animation-delay: 0.15s; }
        .wow-ph:nth-child(4) { animation-delay: 0.20s; }
        .wow-ph:nth-child(5) { animation-delay: 0.25s; }
        .wow-ph:nth-child(6) { animation-delay: 0.30s; }
        .wow-ph:nth-child(7) { animation-delay: 0.35s; }
        .wow-ph:nth-child(8) { animation-delay: 0.40s; }
        .wow-ph:nth-child(9) { animation-delay: 0.45s; }
        .wow-ph:nth-child(10) { animation-delay: 0.50s; }
        .wow-ph:nth-child(11) { animation-delay: 0.55s; }
        .wow-ph:nth-child(12) { animation-delay: 0.60s; }
        .wow-ph:nth-child(13) { animation-delay: 0.65s; }
        .wow-ph:nth-child(14) { animation-delay: 0.70s; }
        .wow-ph:nth-child(15) { animation-delay: 0.75s; }

        .hof-card {
            background: #ffffff;
            border: 1px solid #e6ecf5;
            border-radius: 16px;
            padding: 28px 18px 22px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(15,30,60,0.06);
            transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease, border-color 350ms ease;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        .hof-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #01153e, #c5a55a, #01153e);
            background-size: 200% 100%;
            transition: background-position 500ms ease;
        }
        .hof-card:hover::before { background-position: 100% 0; }
        .hof-card:hover {
            transform: translateY(-8px) scale(1.03);
            border-color: #c5a55a;
            box-shadow: 0 16px 40px rgba(1,21,62,0.14), 0 0 0 2px rgba(197,165,90,0.15);
            animation: hofGlow 2s ease-in-out infinite;
        }

        .hof-card-img-wrap {
            position: relative;
            display: inline-block;
            margin-bottom: 14px;
        }
        .hof-card img {
            width: 100px; height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #e6ecf5;
            padding: 3px;
            transition: border-color 350ms ease, transform 350ms ease;
            animation: hofImgReveal 0.6s ease both;
        }
        .hof-card:hover img {
            border-color: #c5a55a;
            transform: scale(1.08);
        }

        .hof-name {
            color: #01153e; font-weight: 700; font-size: 1rem;
            margin-bottom: 4px; line-height: 1.3;
            transition: color 300ms ease;
        }
        .hof-card:hover .hof-name { color: #1a3a6e; }

        .hof-pos {
            color: #5a6478; font-size: 0.82rem; font-weight: 500;
            margin-bottom: 12px; line-height: 1.35;
        }

        .hof-rg-link {
            display: inline-flex; align-items: center; gap: 6px;
            font-size: 0.78rem; font-weight: 600; color: #01153e;
            text-decoration: none !important;
            padding: 5px 14px;
            border: 1px solid #d4d9e2;
            border-radius: 20px;
            transition: all 300ms ease;
        }
        .hof-rg-link i { font-size: 12px; }
        .hof-card:hover .hof-rg-link {
            background: #01153e;
            color: #fff !important;
            border-color: #01153e;
            box-shadow: 0 3px 10px rgba(1,21,62,0.20);
        }

        @media (max-width: 768px) {
            .hof-card { padding: 22px 14px 18px; }
            .hof-card img { width: 80px; height: 80px; }
        }
      `}</style>
    </>
  );
}

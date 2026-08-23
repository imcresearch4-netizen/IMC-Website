"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects as allProjects } from "@/lib/data/projects";
import type { Project } from "@/types/content";
import { ANIMATE_CSS_HREF } from "@/config/assets";
import WowScript from "@/components/wrappers/WowScript";

type FeaturedProject = Pick<Project, "id" | "title"> & {
  num: string;
  subtitle: string;
  image: string;
  description: string;
  team: string[];
};

export default function ProjectsPage() {
  const [cur, setCur] = useState(0);

  const projects: FeaturedProject[] = allProjects
    .filter((p) => p.project_key === "featured")
    .map((p) => ({
      id: p.id,
      num: p.num || "",
      title: p.title,
      subtitle: p.subtitle || "",
      image: p.image || "",
      description: p.description || "",
      team: p.team ? String(p.team).split(",").map((t: string) => t.trim()) : [],
    }));

  useEffect(() => {
    const m = window.location.search.match(/id=(\d+)/);
    const idx = m ? Math.min(Math.max(parseInt(m[1]) - 1, 0), projects.length - 1) : 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCur(idx);
  }, [projects.length]);

  const p = projects[cur];

  return (
    <>
      <link rel="stylesheet" href={ANIMATE_CSS_HREF} />
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(25px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeScale { 0% { opacity: 0; transform: scale(0.92); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes goldLineAnim { 0% { width: 0; } 100% { width: 80px; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes titleGlow { 0%,100% { text-shadow: 0 0 20px rgba(197,165,90,0.1); } 50% { text-shadow: 0 0 40px rgba(197,165,90,0.3); } }
        @keyframes borderGlow { 0%,100% { border-color: rgba(197,165,90,0.2); box-shadow: 0 0 8px rgba(197,165,90,0.05); } 50% { border-color: rgba(197,165,90,0.5); box-shadow: 0 0 20px rgba(197,165,90,0.15); } }

        .page-title { max-width: 1560px; margin: 24px auto 50px; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 36px rgba(15,30,60,0.25); position: relative; padding: 55px 0 !important; background: linear-gradient(135deg, #01153e 0%, #0a2547 50%, #003a6d 100%) !important; }
        .page-title::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 18% 20%, rgba(255,255,255,0.10), transparent 45%), radial-gradient(circle at 82% 85%, rgba(197,165,90,0.30), transparent 50%); z-index: 1; }
        .page-title .container { position: relative; z-index: 2; }
        .page-title .content-box { background: rgba(255,255,255,0.10) !important; backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.22); border-radius: 16px; padding: 18px 64px 22px !important; box-shadow: 0 8px 24px rgba(0,30,80,0.18); }
        .page-title .title { font-size: 38px; font-weight: 700; color: #fff; margin-bottom: 10px; letter-spacing: -0.5px; }

        .proj-detail-wrap { max-width: 1100px; margin: 0 auto; padding: 0 15px 60px; }

        .proj-tabs { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 30px; }
        .proj-tab-row { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
        .proj-tab { padding: 7px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; color: #475569; background: #f1f5f9; border: 1px solid transparent; cursor: pointer; transition: all 0.25s ease; text-decoration: none; display: inline-block; }
        .proj-tab:hover { background: #e2e8f0; color: #01153e; transform: translateY(-2px); box-shadow: 0 2px 8px rgba(1,21,62,0.08); }
        .proj-tab.active { background: #01153e; color: #fff; border-color: #01153e; box-shadow: 0 3px 12px rgba(1,21,62,0.25); }

        .proj-title-wrap { text-align: center; padding: 30px 20px 20px; margin-bottom: 30px; }
        .proj-title-wrap .proj-number { display: inline-block; background: rgba(197,165,90,0.12); color: #c5a55a; font-size: 0.72rem; font-weight: 700; padding: 4px 16px; border-radius: 20px; letter-spacing: 0.08em; margin-bottom: 10px; border: 1px solid rgba(197,165,90,0.2); }
        .proj-title-wrap .proj-main-title { font-size: 1.8rem; font-weight: 800; color: #01153e; line-height: 1.3; margin-bottom: 4px; animation: titleGlow 3s ease infinite; letter-spacing: -0.3px; }
        .proj-title-wrap .proj-subtitle { font-size: 0.92rem; color: #94a3b8; font-weight: 400; }

        .detail-card { background: #fff; border-radius: 16px; padding: 28px 32px; box-shadow: 0 2px 16px rgba(1,21,62,0.06); border: 1px solid #eef2f6; margin-bottom: 24px; transition: all 0.4s ease; }
        .detail-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(1,21,62,0.12); border-color: rgba(197,165,90,0.3); }
        .detail-card .card-label { font-size: 0.9rem; font-weight: 700; color: #c5a55a; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; padding-bottom: 10px; border-bottom: 2px solid rgba(197,165,90,0.15); }
        .detail-card .card-label i { font-size: 1rem; }
        .detail-card-desc { font-size: 0.95rem; color: #475569; line-height: 1.8; text-align: center; max-width: 800px; margin: 0 auto; }

        .proj-image-wrap { max-width: 640px; margin: 0 auto; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 24px rgba(1,21,62,0.12); border: 1px solid rgba(197,165,90,0.15); }
        .proj-image-wrap img { width: 100%; height: auto; display: block; }
        .proj-image-wrap:hover { box-shadow: 0 10px 36px rgba(1,21,62,0.18); border-color: rgba(197,165,90,0.3); }

        .team-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 4px; }
        .team-member { background: #f8f9fa; border-radius: 10px; padding: 10px 16px; display: flex; align-items: center; gap: 10px; border: 1px solid #eef2f6; transition: all 0.25s ease; }
        .team-member:hover { border-color: #c5a55a; box-shadow: 0 2px 8px rgba(197,165,90,0.1); transform: translateY(-1px); }
        .team-member .tm-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #01153e, #0a2547); display: flex; align-items: center; justify-content: center; color: #c5a55a; font-size: 0.85rem; flex-shrink: 0; }
        .team-member.lead .tm-avatar { background: linear-gradient(135deg, #c5a55a, #d4b96e); color: #fff; box-shadow: 0 0 12px rgba(197,165,90,0.3); }
        .team-member .tm-name { font-size: 0.85rem; font-weight: 600; color: #1e293b; }
        .team-member .tm-role { font-size: 0.65rem; color: #c5a55a; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; }
        .team-member.lead { border-color: #c5a55a; border-width: 2px; background: #fffbf0; }

        @media (max-width: 768px) { .proj-hero-title .proj-main-title { font-size: 1.3rem; } .detail-card { padding: 20px; } .proj-tab { font-size: 0.72rem; padding: 5px 11px; } .page-title .title { font-size: 28px; } }
      `}</style>

      <section className="page-title centred">
        <div className="container">
          <div className="content-box">
            <div className="title wow animate__animated animate__fadeInDown">Ongoing Projects</div>
            <ul className="bread-crumb wow animate__animated animate__fadeInUp">
              <li><Link href="/">Home</Link></li>
              <li>Ongoing Projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="proj-detail-wrap">
          <div className="proj-tabs" id="ptabs">
            <div className="proj-tab-row" id="tabRow1">
              {projects.slice(0, 10).map(function (pr, i) {
                return (
                  <a key={pr.id} className={"proj-tab" + (i === cur ? " active" : "")} href="#" onClick={(e) => { e.preventDefault(); setCur(i); }}>Project {i + 1}</a>
                );
              })}
            </div>
            <div className="proj-tab-row" id="tabRow2">
              {projects.slice(10).map(function (pr, i) {
                return (
                  <a key={pr.id} className={"proj-tab" + (i + 10 === cur ? " active" : "")} href="#" onClick={(e) => { e.preventDefault(); setCur(i + 10); }}>Project {i + 11}</a>
                );
              })}
            </div>
          </div>

          {p && (
            <>
              <div className="proj-title-wrap">
                <div className="proj-main-title wow animate__animated animate__fadeInUp" id="pt">{p.title}</div>
                <div className="proj-subtitle wow animate__animated animate__fadeInUp" data-wow-delay="0.15s" id="ps">{p.subtitle}</div>
              </div>

              <div className="detail-card wow animate__animated animate__fadeInUp">
                <div className="card-label">Project Description</div>
                <div className="detail-card-desc wow animate__animated animate__fadeIn" data-wow-delay="0.2s" id="pd">{p.description}</div>
              </div>

              <div className="detail-card wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <div className="card-label">Project Architecture</div>
                <div className="proj-image-wrap wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                  <img id="pi" className="img-fluid" alt="Project Diagram" src={p.image} loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="detail-card wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <div className="card-label"><i className="fas fa-users"></i> Team Members</div>
                <div className="team-grid" id="tg">
                  {p.team.map(function (m, i) {
                    const ld = i === 0;
                    return (
                      <div key={i} className={"team-member" + (ld ? " lead" : "") + " wow animate__animated animate__fadeInUp"} style={{ animationDelay: i * 0.06 + "s" }}>
                        <div className="tm-avatar"><i className={"fas " + (ld ? "fa-crown" : "fa-user")}></i></div>
                        <div>
                          <div className="tm-name">{m}</div>
                          <div className="tm-role">{ld ? "Lead" : "Member"}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <WowScript offset={80} />
    </>
  );
}

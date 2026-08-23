"use client";

import { LAB_PAGES } from "@/lib/data/labProjects";
import { mediaUrl } from "@/lib/media";
import { ANIMATE_CSS_HREF } from "@/config/assets";
import TypedHeader from "@/components/ui/TypedHeader";
import WowScript from "@/components/wrappers/WowScript";

export default function LabProjectsView({ labKey }: { labKey: string }) {
  const config = LAB_PAGES[labKey];

  if (!config || "comingSoon" in config) return null;

  const totalMembers = config.projects.reduce((sum, p) => sum + p.team.length, 0);

  return (
    <>
      <link rel="stylesheet" href={ANIMATE_CSS_HREF} />
      <TypedHeader text={config.typing} />
      <div className="container" style={{ paddingBottom: "40px" }}>
        <div className="lab-hero wow animate__animated animate__fadeIn">
          <div className="lab-badge">{config.badge}</div>
          <h1>{config.title}</h1>
          <div className="hero-gold-line"></div>
          <p className="hero-subtitle">{config.subtitle}</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">{config.projects.length}</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">{totalMembers}</div>
              <div className="hero-stat-label">Team Members</div>
            </div>
          </div>
        </div>

        <div className="projects-section">
          <div className="proj-grid">
            {config.projects.map((p, i) => (
              <div
                key={p.id}
                className="proj-card wow animate__animated animate__fadeInUp"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img className="pc-img" src={mediaUrl(p.img)} alt={p.title} loading="lazy" decoding="async" />
                <div className="pc-body">
                  <div className="pc-title">{p.title}</div>
                  <div className="pc-sub">{p.sub}</div>
                  <div className="pc-desc">{p.desc}</div>
                  <div className="pc-team">
                    <div className="pc-team-label">
                      <i className="fas fa-users"></i> Team
                    </div>
                    <span className="pc-member lead">
                      <i className="fas fa-crown"></i> {p.team[0]}
                    </span>
                    {p.team.slice(1).map((m, mi) => (
                      <span key={mi} className="pc-member">
                        <i className="fas fa-user"></i> {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WowScript />
    </>
  );
}
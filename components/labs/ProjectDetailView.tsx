"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LAB_PAGES } from "@/lib/data/labProjects";
import { resolveLabProject, getArch, relatedPublications, PROJECT_AUTHOR_PATTERNS } from "@/lib/data/projectContent";
import { mediaUrl } from "@/lib/media";
import ArchDiagram from "./ArchDiagram";

export default function ProjectDetailView({ labKey, pid }: { labKey: string; pid: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const config = LAB_PAGES[labKey];
  if (!config || "comingSoon" in config) return <div className="pdv-container"><p>Lab not found.</p></div>;
  const project = resolveLabProject(labKey, pid);
  if (!project) return <div className="pdv-container"><p>Project not found.</p></div>;

  const arch = getArch(labKey, pid);
  const pubs = relatedPublications(labKey, project.title, pid);
  const projectKey = `${labKey}-${pid}`;
  const PROJECT_SPECIFIC_NAMES: Record<string, string> = {
    "imc-11": "Engr Asif Jamal",
    "imc3-7": "Kainat Iqbal",
    "imc3-12": "Kainat Iqbal",
  };
  const profName = PROJECT_SPECIFIC_NAMES[projectKey] || (config.typing.split(" - ")[1] || config.typing);

  const badgeColors: Record<string, string> = {
    imc: "#c5a55a", imc1: "#2dd4bf", imc2: "#60a5fa",
    imc3: "#a78bfa", imc4: "#fb7185", imc5: "#f59e0b",
  };
  const accent = badgeColors[labKey] || "#c5a55a";

  return (
    <>
      <div className="pdv-container">
        <div className="pdv-breadcrumb">
          <Link href="/" className="pdv-bc-link"><i className="fas fa-home" /> Home</Link>
          <i className="fas fa-chevron-right pdv-bc-sep" />
          <Link href={`/labs/${labKey}`} className="pdv-bc-link">{config.badge}</Link>
          <i className="fas fa-chevron-right pdv-bc-sep" />
          <span className="pdv-bc-current">Project {pid}</span>
        </div>

        <div className={`pdv-hero ${mounted ? "pdv-visible" : ""}`}>
          <div className="pdv-badge" style={{ background: accent }}>{config.badge}</div>
          <h1 className="pdv-title">{project.title}</h1>
          <p className="pdv-sub">{project.sub}</p>
          <div className="pdv-hero-divider" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
          <div className="pdv-team-row">
            {project.team.map((m: string, i: number) => (
              <span key={i} className={`pdv-member-chip ${i === 0 ? "pdv-lead" : ""}`}>
                <i className={`fas ${i === 0 ? "fa-crown" : "fa-user"}`} /> {m}
              </span>
            ))}
          </div>
        </div>

        <div className={`pdv-section pdv-overview ${mounted ? "pdv-visible" : ""}`}>
          <h2 className="pdv-section-title"><i className="fas fa-book-open" /> Project Overview</h2>
          <p className="pdv-desc">{project.desc}</p>
        </div>

        {arch && (
          <div className={`pdv-section pdv-arch ${mounted ? "pdv-visible" : ""}`}>
            <h2 className="pdv-section-title"><i className="fas fa-project-diagram" /> System Architecture</h2>
            <ArchDiagram arch={arch} />
          </div>
        )}

        {pubs.length > 0 && (
          <div className={`pdv-section pdv-pubs ${mounted ? "pdv-visible" : ""}`}>
            <h2 className="pdv-section-title"><i className="fas fa-file-alt" /> Related Publications ({pubs.length})</h2>
            <p className="pdv-pubs-note">Curated from publications by <strong>{profName}</strong></p>
            <div className="pdv-pub-grid">
              {pubs.map((pub, i) => (
                <div key={pub.id} className="pdv-pub-card" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="pdv-pub-top">
                    <span className="pdv-pub-year">{pub.year}</span>
                    <span className="pdv-pub-type">{pub.type}</span>
                  </div>
                  <h3 className="pdv-pub-title">{pub.title}</h3>
                  <p className="pdv-pub-authors">{pub.authors}</p>
                  {pub.venue && <p className="pdv-pub-venue"><i className="fas fa-landmark" /> {pub.venue}</p>}
                  {pub.citations != null && Number(pub.citations) > 0 && (
                    <p className="pdv-pub-cites"><i className="fas fa-quote-left" /> {pub.citations} citations</p>
                  )}
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pdv-pub-link">
                      <i className="fas fa-external-link-alt" /> View on Scholar
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pdv-actions">
          <Link href={`/labs/${labKey}`} className="pdv-btn pdv-btn-lab">
            <i className="fas fa-arrow-left" /> Back to {config.badge}
          </Link>
          <Link href="/" className="pdv-btn pdv-btn-home">
            <i className="fas fa-home" /> Home
          </Link>
        </div>
      </div>
    </>
  );
}
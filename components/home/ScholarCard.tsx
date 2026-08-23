"use client";

import { useEffect } from "react";
import { scholarStats } from "@/lib/data/scholarStats";
import { animateCountUp } from "@/utils/animate";
import type { ScholarCardConfig } from "@/constants/home";

export default function ScholarCard({ config }: { config: ScholarCardConfig }) {
  useEffect(() => {
    const stat = scholarStats.find((s) => s.id === config.statId);
    if (!stat) return;
    animateCountUp(`citations-${config.statId}`, stat.citations);
    animateCountUp(`hindex-${config.statId}`, stat.hIndex);
    animateCountUp(`i10-${config.statId}`, stat.i10Index);
  }, [config.statId]);

  return (
    <div className="col-md-4 mb-4 scholar-col">
      <div className="scholar-card scholar-reveal">
        <div className={`scholar-card-accent sc-accent-${config.accent}`}></div>
        <div className="lab-card-lab-id">{config.labId}</div>
        <h3 className="scholar-name" style={{ marginTop: 4 }}>
          {config.name}
        </h3>

        <div className="scholar-stats-grid">
          <div className="scholar-stat-box">
            <span className="scholar-stat-number" id={`citations-${config.statId}`}>
              --
            </span>
            <span className="scholar-stat-label">Citations</span>
          </div>
          <div className="scholar-stat-box">
            <span className="scholar-stat-number" id={`hindex-${config.statId}`}>
              --
            </span>
            <span className="scholar-stat-label">h-index</span>
          </div>
          <div className="scholar-stat-box">
            <span className="scholar-stat-number" id={`i10-${config.statId}`}>
              --
            </span>
            <span className="scholar-stat-label">i10-index</span>
          </div>
        </div>

        <div className="scholar-extra-grid">
          <div className="scholar-extra-item">
            <i className="fas fa-book-open"></i>
            <span className="scholar-extra-value">{config.extras.publications}</span>
            <span className="scholar-extra-label">Publications</span>
          </div>
          <div className="scholar-extra-item">
            <i className="fas fa-project-diagram"></i>
            <span className="scholar-extra-value">{config.extras.projects}</span>
            <span className="scholar-extra-label">Ongoing Projects</span>
          </div>
          <div className="scholar-extra-item">
            <i className="fas fa-quote-right"></i>
            <span className="scholar-extra-value">{config.extras.since}</span>
            <span className="scholar-extra-label">Since 2021</span>
          </div>
        </div>

        <a href={config.url} target="_blank" rel="noreferrer" className="scholar-btn">
          <i className="fab fa-google"></i> View Google Scholar Profile
        </a>
      </div>
    </div>
  );
}
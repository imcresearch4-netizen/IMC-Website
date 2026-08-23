"use client";

import { datasets as datasetData, type Dataset } from "@/lib/data/datasets";
import { mediaUrl } from "@/lib/media";
import PageHeader from "@/components/ui/PageHeader";
import { toHtml } from "@/utils/string";

const ICONS = ["fa-robot", "fa-database", "fa-chart-bar", "fa-home", "fa-map-marker-alt"];

function buildSpecRows(d: Dataset): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];
  if (d.specifications) {
    for (const line of d.specifications.split("\n")) {
      const i = line.indexOf(":");
      if (i > -1) {
        rows.push({ label: line.slice(0, i).trim(), value: line.slice(i + 1).trim() });
      } else if (line.trim()) {
        rows.push({ label: "", value: line.trim() });
      }
    }
  }
  if (d.dimensions) rows.push({ label: "Dimensions", value: d.dimensions });
  if (d.hardware) rows.push({ label: "Hardware", value: d.hardware });
  return rows;
}

function buildDownloadHtml(d: Dataset): string {
  if (!d.code_links) return "";
  return d.code_links
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const i = s.indexOf(":");
      if (i < 0) return null;
      const label = s.slice(0, i).trim();
      const url = s.slice(i + 1).trim();
      return label && url ? `<a href="${mediaUrl(url)}">${label}</a>` : null;
    })
    .filter((s): s is string => !!s)
    .join("&nbsp;|&nbsp;");
}

function buildSections(d: Dataset): { id: string; label: string; html: string }[] {
  const sections = [
    d.information && { id: `cInfo${d.id}`, label: "Information", html: toHtml(d.information) },
    d.citation && { id: `cCite${d.id}`, label: "Cite Following Papers", html: toHtml(d.citation) },
    d.applications && { id: `cApp${d.id}`, label: "Applications", html: toHtml(d.applications) },
    d.code_links && { id: `cDl${d.id}`, label: "Dataset Download", html: buildDownloadHtml(d) },
    d.visualization && { id: `cVis${d.id}`, label: "Data Visualization", html: toHtml(d.visualization) },
  ];
  return sections.filter((s): s is { id: string; label: string; html: string } => !!s);
}

export default function DatasetsPage() {
  const datasets: Dataset[] = datasetData;

  return (
    <>
      <PageHeader
        icon="fas fa-database"
        title="Datasets"
        subtitle="Publicly available research datasets for academic and scientific use"
      />

      {datasets.length === 0 && <div className="container"><p className="text-grey">No datasets available.</p></div>}

      <div className="container pb-5 page-content">
        {datasets.map((d, idx) => {
          const specRows = buildSpecRows(d);
          const sections = buildSections(d);
          return (
            <div className="ds-card wow-ph" key={d.id}>
              <div className="ds-card-header">
                <a className="ds-title-link" data-toggle="collapse" href={`#cD${d.id}`}>
                  <i className={`fas ${ICONS[idx % ICONS.length]} ds-card-icon`}></i>
                  <span>{d.title}</span>
                  <i className="fas fa-chevron-down ds-arrow"></i>
                </a>
                {d.download_url && (
                  <a className="ds-dl-btn" href={mediaUrl(d.download_url)}>
                    <i className="fa fa-download"></i> Download
                  </a>
                )}
              </div>
              <div className="collapse" id={`cD${d.id}`}>
                <div className="ds-card-body">
                  {specRows.length > 0 && (
                    <div className="ds-specs">
                      {specRows.map((s, i) => (
                        <div className="ds-spec" key={i}><span>{s.label}</span> {s.value}</div>
                      ))}
                    </div>
                  )}
                  {sections.map((s) => (
                    <div className="ds-section" key={s.id}>
                      <button className="ds-toggle-btn" data-toggle="collapse" data-target={`#${s.id}`}>{s.label}</button>
                      <div className="collapse show" id={s.id}>
                        <div className="ds-toggle-content" dangerouslySetInnerHTML={{ __html: s.html }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .ds-card {
            background: #ffffff;
            border: 1px solid #e6ecf5;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(15,30,60,0.05);
            transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease, border-color 350ms ease;
            margin-bottom: 20px; overflow: hidden; position: relative;
        }
        .ds-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #01153e, #c5a55a, #01153e);
            background-size: 200% 100%; transition: background-position 500ms ease; z-index: 1;
        }
        .ds-card:hover::before { background-position: 100% 0; }
        .ds-card:hover {
            transform: translateY(-4px);
            border-color: #c5a55a;
            box-shadow: 0 12px 35px rgba(1,21,62,0.12), 0 0 0 1px rgba(197,165,90,0.10);
        }

        .ds-card-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 16px 20px; position: relative; z-index: 0;
        }
        .ds-title-link {
            display: flex; align-items: center; gap: 10px;
            color: #01153e; font-weight: 700; font-size: 1rem;
            text-decoration: none !important; cursor: pointer;
            transition: color 300ms ease;
        }
        .ds-title-link:hover { color: #1a3a6e; }
        .ds-card-icon { font-size: 18px; color: #c5a55a; }
        .ds-arrow { font-size: 12px; color: #99a1b2; transition: transform 300ms ease; }
        .ds-title-link[aria-expanded="true"] .ds-arrow { transform: rotate(180deg); }

        .ds-dl-btn {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 7px 18px; background: #01153e; color: #fff !important;
            border-radius: 8px; font-size: 0.82rem; font-weight: 600;
            text-decoration: none !important; white-space: nowrap;
            transition: all 300ms ease; box-shadow: 0 3px 10px rgba(1,21,62,0.15);
        }
        .ds-dl-btn i { font-size: 13px; }
        .ds-dl-btn:hover { background: #c5a55a; color: #01153e !important; box-shadow: 0 4px 15px rgba(197,165,90,0.30); }

        .ds-card-body { padding: 0 20px 16px; }

        .ds-specs {
            background: #f8f9fc; border-radius: 10px; padding: 12px 16px;
            margin-bottom: 12px;
        }
        .ds-spec {
            font-size: 0.85rem; color: #4a5468; margin-bottom: 4px;
        }
        .ds-spec:last-child { margin-bottom: 0; }
        .ds-spec span { font-weight: 700; color: #01153e; display: inline-block; min-width: 110px; }

        .ds-section { margin-bottom: 8px; }
        .ds-toggle-btn {
            background: transparent; border: 1px solid #e6ecf5; border-radius: 8px;
            padding: 6px 16px; font-size: 0.82rem; font-weight: 600; color: #01153e;
            cursor: pointer; transition: all 250ms ease; width: 100%; text-align: left;
        }
        .ds-toggle-btn:hover { background: #f0f2f6; border-color: #c5a55a; }
        .ds-toggle-content {
            padding: 10px 14px; font-size: 0.84rem; color: #5a6478; line-height: 1.6;
        }
        .ds-toggle-content a { color: #01153e; font-weight: 600; }
        .ds-toggle-content a:hover { color: #c5a55a; }

        .ds-viz-img { max-width: 300px; border-radius: 8px; }

        @media (max-width: 768px) {
            .ds-card-header { flex-direction: column; align-items: flex-start; gap: 10px; }
            .ds-dl-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}

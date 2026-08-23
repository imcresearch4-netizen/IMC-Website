"use client";

import { repoItems, type RepoItem } from "@/lib/data/openSourceCode";
import PageHeader from "@/components/ui/PageHeader";

const langClass = (lang: string | null) => {
  const l = (lang || "").toLowerCase();
  if (l.includes("matlab") && l.includes("python")) return "lang-hybrid";
  if (l.includes("python")) return "lang-python";
  if (l.includes("matlab")) return "lang-matlab";
  return "lang-matlab";
};

export default function OpenSourceCodePage() {
  const items: RepoItem[] = repoItems;

  return (
    <>
      <PageHeader
        icon="fas fa-code"
        title="Open-Source Code & Repositories"
        subtitle="Explore our research implementations free for academic and research purposes"
      />

      <div className="container page-content">
        <div className="row mt-4">
          <div className="col-12 text-center mb-4">
            <p className="os-intro">Our research group maintains several open-source repositories for academic and research purposes. Below are key repositories with code implementations of our published work.</p>
          </div>
        </div>

        {items.length === 0 && <p className="text-center text-grey">No repositories found.</p>}

        <div className="row">
          {items.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="os-card wow-ph">
                <div className="os-card-top">
                  <span className={`os-lang ${langClass(item.language)}`}>{item.language}</span>
                </div>
                <h5 className="os-title">{item.title}</h5>
                <p className="os-desc">{item.description}</p>
                <div className="os-card-footer">
                  {item.repo_url ? (
                    <a href={item.repo_url} className="os-btn os-btn-gh" target="_blank"><i className="fab fa-github"></i> View on GitHub</a>
                  ) : item.download_url ? (
                    <a href={item.download_url} className="os-btn"><i className="fas fa-download"></i> Download Code</a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 mb-4">
          <div className="col-12 text-center">
            <div className="os-contact-card wow-ph">
              <h5>Need More Code or Datasets?</h5>
              <p>Additional implementations and datasets are available upon request. Reach out to us for collaboration.</p>
              <a href="mailto:ahmadjalal@mail.au.edu.pk" className="os-contact-btn"><i className="fas fa-paper-plane"></i> Contact Prof. Dr. Hafiz Ahmad Jalal</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes osGlow {
            0%, 100% { box-shadow: 0 4px 15px rgba(1,21,62,0.05); }
            50% { box-shadow: 0 8px 30px rgba(197,165,90,0.15); }
        }

        .os-intro {
            color: #5a6478; font-size: 0.95rem; max-width: 650px; margin: 0 auto; line-height: 1.7;
        }

        .os-card {
            background: #ffffff;
            border: 1px solid #e6ecf5;
            border-radius: 16px;
            padding: 24px 22px 20px;
            box-shadow: 0 4px 15px rgba(15,30,60,0.05);
            transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease, border-color 350ms ease;
            height: 100%;
            display: flex; flex-direction: column;
            position: relative; overflow: hidden;
        }
        .os-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #01153e, #c5a55a, #01153e);
            background-size: 200% 100%;
            transition: background-position 500ms ease;
        }
        .os-card:hover::before { background-position: 100% 0; }
        .os-card:hover {
            transform: translateY(-6px) scale(1.02);
            border-color: #c5a55a;
            box-shadow: 0 14px 35px rgba(1,21,62,0.12), 0 0 0 1px rgba(197,165,90,0.12);
            animation: osGlow 2s ease-in-out infinite;
        }

        .os-card-top {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 14px;
        }
        .os-lang {
            font-size: 0.7rem; font-weight: 700; padding: 3px 10px;
            border-radius: 6px; text-transform: uppercase; letter-spacing: 0.03em;
        }
        .lang-matlab { background: #fef3e2; color: #c57a1a; }
        .lang-python { background: #e8f0fe; color: #1a4a8a; }
        .lang-hybrid { background: #f0e6f7; color: #6e1a6e; }

        .os-title {
            color: #01153e; font-weight: 700; font-size: 1rem;
            margin-bottom: 8px; line-height: 1.35;
            transition: color 300ms ease;
        }
        .os-card:hover .os-title { color: #1a3a6e; }

        .os-desc {
            color: #5a6478; font-size: 0.85rem; line-height: 1.6;
            flex-grow: 1; margin-bottom: 16px;
        }

        .os-card-footer {
            margin-top: auto;
        }

        .os-btn {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 7px 18px;
            border: 1.5px solid #d4d9e2; border-radius: 20px;
            color: #01153e; font-size: 0.8rem; font-weight: 600;
            text-decoration: none !important;
            transition: all 300ms ease;
        }
        .os-btn i { font-size: 12px; }
        .os-btn:hover {
            background: #01153e; color: #fff !important; border-color: #01153e;
            box-shadow: 0 3px 10px rgba(1,21,62,0.15);
        }
        .os-btn-gh:hover {
            background: #24292e; border-color: #24292e;
        }

        .os-contact-card {
            background: linear-gradient(135deg, #01153e 0%, #1a3a6e 100%);
            border-radius: 16px; padding: 32px 28px; text-align: center;
            box-shadow: 0 8px 25px rgba(1,21,62,0.15);
        }
        .os-contact-card h5 {
            color: #fff; font-weight: 700; font-size: 1.15rem; margin-bottom: 8px;
        }
        .os-contact-card p {
            color: rgba(255,255,255,0.75); font-size: 0.88rem; max-width: 450px; margin: 0 auto 16px;
        }
        .os-contact-btn {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 10px 24px; background: #c5a55a; color: #01153e !important;
            border-radius: 8px; font-weight: 700; font-size: 0.88rem;
            text-decoration: none !important;
            transition: all 300ms ease; box-shadow: 0 4px 12px rgba(197,165,90,0.30);
        }
        .os-contact-btn:hover { background: #d4b96e; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(197,165,90,0.40); }

        @media (max-width: 768px) {
            .os-card { padding: 20px 16px 16px; }
        }
      `}</style>
    </>
  );
}

"use client";

import { useState } from "react";
import { newsItems, type NewsItem } from "@/lib/data/news";
import { mediaUrl } from "@/lib/media";
import PageHeader from "@/components/ui/PageHeader";

const IMG_ICONS: Record<string, string> = {
  ranking: "fa-trophy",
  "global recognition": "fa-globe",
  publication: "fa-file-alt",
  conference: "fa-award",
  connect: "fa-link",
};

export default function NewsPage() {
  const items: NewsItem[] = newsItems;
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggleNews = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const splitContent = (content: string | null): string[] =>
    content
      ? content
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean)
      : [];

  return (
    <>
      <PageHeader
        icon="fas fa-newspaper"
        title="News & Updates"
        subtitle="Latest achievements, research breakthroughs, and lab announcements"
      />

      <div className="container page-content">
        <div className="row mt-4">
          <div className="col-12">
            {items.length === 0 && <p>No news found.</p>}

            {items.map((item) => {
              const hasImage = !!item.image;
              const icon = IMG_ICONS[(item.img_badge || "").toLowerCase()] || "fa-star";
              const fullId = `newsFull${item.id}`;
              const paragraphs = splitContent(item.content);

              return (
                <div className="news-card wow-ph" key={item.id}>
                  <div className="news-card-inner">
                    {hasImage && (
                      <div className="news-img-col">
                        <div className="news-img-wrap">
                          <img src={mediaUrl(item.image)} alt={item.title} loading="lazy" decoding="async" />
                          {item.img_badge && (
                            <div className="news-img-badge"><i className={`fas ${icon}`}></i> {item.img_badge}</div>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="news-content-col" style={hasImage ? undefined : { width: "100%" }}>
                      <div className="news-meta">
                        <span className={`news-badge ${item.badge_class || "badge-announcement"}`}>{item.badge_label || item.category || "News"}</span>
                        <span className="news-date"><i className="far fa-calendar-alt"></i> {item.date}</span>
                      </div>
                      <h3 className="news-title">{item.title}</h3>
                      {paragraphs.length > 0 ? (
                        <>
                          <div className="news-excerpt">
                            <p>{item.excerpt}</p>
                          </div>
                          <div className="news-full" id={fullId} style={{ display: open[fullId] ? "block" : "none", maxHeight: open[fullId] ? "none" : "0" }}>
                            {paragraphs.map((p, pi) => (
                              <p key={pi}>{p}</p>
                            ))}
                          </div>
                          <button className="news-read-more" onClick={() => toggleNews(fullId)}>
                            {open[fullId] ? <>Read Less <i className="fas fa-chevron-up"></i></> : <>Read More <i className="fas fa-chevron-down"></i></>}
                          </button>
                        </>
                      ) : (
                        <p className="news-excerpt">{item.excerpt}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes newsImgReveal {
            from { clip-path: inset(0 100% 0 0); }
            to { clip-path: inset(0 0 0 0); }
        }

        .news-card {
            background: #ffffff;
            border: 1px solid #e6ecf5;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(15,30,60,0.05);
            transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease, border-color 350ms ease;
            margin-bottom: 22px;
            overflow: hidden;
            position: relative;
        }
        .news-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #01153e, #c5a55a, #01153e);
            background-size: 200% 100%;
            transition: background-position 500ms ease; z-index: 1;
        }
        .news-card:hover::before { background-position: 100% 0; }
        .news-card:hover {
            transform: translateY(-4px);
            border-color: #c5a55a;
            box-shadow: 0 12px 35px rgba(1,21,62,0.12), 0 0 0 1px rgba(197,165,90,0.10);
        }

        .news-card-inner {
            display: flex; align-items: stretch;
            padding: 0;
        }

        .news-img-col {
            flex: 0 0 260px; max-width: 260px;
            position: relative; overflow: hidden;
        }
        .news-img-wrap {
            height: 100%; position: relative;
            overflow: hidden;
        }
        .news-img-wrap img {
            width: 100%; height: 100%;
            object-fit: cover; display: block;
            transition: transform 500ms ease;
            animation: newsImgReveal 0.8s ease both;
        }
        .news-card:hover .news-img-wrap img { transform: scale(1.08); }

        .news-img-badge {
            position: absolute; bottom: 10px; left: 10px;
            background: rgba(1,21,62,0.85);
            color: #fff; font-size: 0.7rem; font-weight: 700;
            padding: 4px 10px; border-radius: 6px;
            display: inline-flex; align-items: center; gap: 4px;
            backdrop-filter: blur(4px);
        }
        .news-img-badge i { font-size: 10px; color: #c5a55a; }

        .news-content-col {
            flex: 1; padding: 22px 26px 18px;
            display: flex; flex-direction: column;
        }

        .news-meta {
            display: flex; align-items: center; gap: 10px;
            margin-bottom: 8px; flex-wrap: wrap;
        }

        .news-badge {
            display: inline-block; padding: 3px 12px;
            border-radius: 6px; font-size: 0.72rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.04em;
        }
        .badge-achievement { background: #e8f0fe; color: #1a3a6e; }
        .badge-global { background: #e6f7e6; color: #1a6e3a; }
        .badge-research { background: #f0e6f7; color: #6e1a6e; }
        .badge-conference { background: #fef3e2; color: #a86e1a; }
        .badge-announcement { background: #e6f0fa; color: #1a4a6e; }
        .badge-student { background: #f0f0f0; color: #4a4a4a; }
        .badge-award { background: #fdf0e0; color: #a86e1a; }

        .news-date {
            font-size: 0.78rem; color: #99a1b2; font-weight: 500;
        }
        .news-date i { margin-right: 4px; font-size: 11px; }

        .news-title {
            color: #01153e; font-weight: 700; font-size: 1.1rem;
            margin-bottom: 8px; line-height: 1.4;
            transition: color 300ms ease;
        }
        .news-card:hover .news-title { color: #1a3a6e; }

        .news-excerpt {
            color: #5a6478; font-size: 0.88rem; line-height: 1.6;
            margin-bottom: 0; flex-grow: 1;
        }
        .news-excerpt p { margin-bottom: 0; }

        .news-full {
            color: #4a5468; font-size: 0.85rem; line-height: 1.7;
            margin-top: 10px; padding-top: 12px;
            border-top: 1px solid #eef1f5;
            max-height: 0; overflow: hidden;
            transition: max-height 0.4s ease;
        }
        .news-full p { margin-bottom: 10px; }
        .news-full p:last-child { margin-bottom: 0; }

        .news-read-more {
            display: inline-flex; align-items: center; gap: 6px;
            margin-top: 12px; padding: 6px 18px;
            background: transparent; border: 1.5px solid #d4d9e2;
            border-radius: 20px; color: #01153e;
            font-size: 0.8rem; font-weight: 600; cursor: pointer;
            transition: all 300ms ease; align-self: flex-start;
        }
        .news-read-more:hover {
            background: #01153e; color: #fff; border-color: #01153e;
            box-shadow: 0 3px 10px rgba(1,21,62,0.15);
        }
        .news-read-more i { font-size: 10px; transition: transform 300ms ease; }

        @media (max-width: 768px) {
            .news-card-inner { flex-direction: column; }
            .news-img-col { flex: 0 0 200px; max-width: 100%; }
            .news-img-wrap { height: 200px; }
            .news-content-col { padding: 16px 18px 14px; }
        }
      `}</style>
    </>
  );
}

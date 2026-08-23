"use client";

import { alumni } from "@/lib/data/alumni";
import { PLAYFAIR_OUTFIT_CSS_HREF } from "@/config/assets";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AlumniPage() {
  return (
    <>
      <link rel="stylesheet" href={PLAYFAIR_OUTFIT_CSS_HREF} />
      <div className="container" style={{ padding: "20px 15px 40px" }}>
        <SectionHeader
          title="Alumni"
          descriptions={[
            "Our distinguished graduates who have gone on to shape the future of research and industry",
            "A proud legacy of scholarly achievement and professional excellence",
          ]}
        />
        <div className="alumni-card-grid">
          {alumni.length === 0 ? (
            <p className="text-center text-grey">No alumni found.</p>
          ) : (
            alumni.map((a) => (
              <div className="ms-card" key={a.id}>
                <img
                  className="ms-card-img"
                  src={a.photo || "/Content/images/male-icon.webp"}
                  alt={a.name}
                  loading="lazy"
                  decoding="async"
                />
                <div className="ms-card-name">{a.name}</div>
                {a.degree && (
                  <div className="ms-card-topic-label" style={{ marginTop: "4px" }}>
                    {a.degree}
                  </div>
                )}
                {a.current_position && (
                  <>
                    <div className="ms-card-topic-label" style={{ marginTop: "6px" }}>
                      Research Topic
                    </div>
                    <div className="ms-card-topic">{a.current_position}</div>
                  </>
                )}
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "8px",
                      fontSize: "0.72rem",
                      color: "#60a5fa",
                      textDecoration: "none",
                    }}
                  >
                    <i className="fab fa-researchgate" /> ResearchGate
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .alumni-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1050px;
          margin: 0 auto;
        }
        @media (max-width: 850px) {
          .alumni-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
          .alumni-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

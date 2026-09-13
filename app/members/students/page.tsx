"use client";

import Script from "next/script";
import { members as allMembers, type Member } from "@/lib/data/members";
import { alumni } from "@/lib/data/alumni";
import { MEMBER_ROLES } from "@/constants/roles";
import { JQUERY_UI_CSS_HREF, JQUERY_UI_JS_SRC, TABS_CSS_HREF, STUDENTS_CSS_HREF } from "@/config/assets";
import { useTabs } from "@/hooks/useTabs";
import MemberCard from "@/components/members/MemberCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function StudentsPage() {
  const members: Member[] = allMembers;

  const initTabs = useTabs(members.length);

  const phd = members.filter((m) => m.role === MEMBER_ROLES.phd);
  const ms = members.filter((m) => m.role === MEMBER_ROLES.ms);
  const ra = members.filter((m) => m.role === MEMBER_ROLES.researchAssistant);

  const loading = members.length === 0;

  return (
    <>
      <link rel="stylesheet" href={JQUERY_UI_CSS_HREF} />
      <link rel="stylesheet" href={TABS_CSS_HREF} />
      <link href={STUDENTS_CSS_HREF} rel="stylesheet" />
      <div className="container">
        <div id="tabs">
          <ul className="mx-auto">
            <li><a href="#tabs-1">Ph.D. Students</a></li>
            <li><a href="#tabs-2">MS Students</a></li>
            <li><a href="#tabs-3">Research Associates</a></li>
            <li><a href="#tabs-4">Alumni</a></li>
          </ul>
          <div id="tabs-1">
            <SectionHeader
              title="PhD Students"
              descriptions={[
                "Doctoral researchers advancing the frontiers of intelligent computing",
                "Innovating through rigorous research and scholarly excellence",
              ]}
            />
            <div className="phd-card-grid">
              {loading ? (
                <p className="text-center text-grey">Loading...</p>
              ) : (
                phd.map((m) => <MemberCard member={m} key={m.id} />)
              )}
            </div>
          </div>

          <div id="tabs-2">
            <SectionHeader
              title="MS Students"
              descriptions={[
                "Empowering the next generation of researchers in intelligent multimedia computing",
              ]}
            />
            <div className="ms-card-grid">
              {loading ? (
                <p className="text-center text-grey">Loading...</p>
              ) : (
                ms.map((m) => <MemberCard member={m} key={m.id} />)
              )}
            </div>
          </div>

          <div id="tabs-3">
            <SectionHeader
              title="Research Associates"
              descriptions={[
                "Dedicated researchers contributing to cutting-edge projects and knowledge advancement",
                "Bridging the gap between academia and real-world impact",
              ]}
            />
            <div className="ug-card-grid">
              {loading ? (
                <p className="text-center text-grey">Loading...</p>
              ) : (
                ra.map((m) => <MemberCard member={m} key={m.id} />)
              )}
            </div>
          </div>

          <div id="tabs-4">
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
        </div>
      </div>
      <Script
        src={JQUERY_UI_JS_SRC}
        strategy="afterInteractive"
        onLoad={initTabs}
      />
      <style>{`
        .ms-card-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            max-width: 960px;
            margin: 0 auto;
        }
        @media (max-width: 991px) {
            .ms-card-grid { grid-template-columns: repeat(2, 1fr); }
            .phd-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
            .ms-card-grid { grid-template-columns: 1fr; }
            .phd-card-grid { grid-template-columns: 1fr; }
        }
        .phd-card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            max-width: 900px;
            margin: 0 auto;
        }
        .phd-card-grid .ms-card {
            padding: 20px 14px;
        }
        .alumni-card-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            max-width: 1050px;
            margin: 0 auto;
        }
        @media (max-width: 1099px) {
            .alumni-card-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 850px) {
            .alumni-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
            .alumni-card-grid { grid-template-columns: 1fr; }
        }
        .ug-card-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 600px;
            margin: 0 auto;
        }
        @media (max-width: 575px) {
            .ug-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

"use client";

import { members as allMembers, type Member } from "@/lib/data/members";
import { memberPhoto } from "@/utils/member-photo";
import { MEMBER_ROLES } from "@/constants/roles";
import { PROFESSORS_CSS_HREF, ANIMATE_CSS_HREF } from "@/config/assets";
import WowScript from "@/components/wrappers/WowScript";

export default function ProfessorsPage() {
  const members: Member[] = allMembers;

  const professors = members.filter((m) => m.role === MEMBER_ROLES.professor);
  const teamLead = professors[0];
  const others = professors.slice(1);
  const rows: Member[][] = [];
  for (let i = 0; i < others.length; i += 2) rows.push(others.slice(i, i + 2));

  return (
    <>
      <link rel="stylesheet" href={PROFESSORS_CSS_HREF} />
      <link rel="stylesheet" href={ANIMATE_CSS_HREF} />
      <div
        className="container pageheader-container"
        style={{ textAlign: "center", padding: "40px 0 10px 0" }}
      >
        <span
          id="typing"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2.6rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "linear-gradient(135deg, #01153e 0%, #c5a55a 50%, #01153e 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "tl-shimmer 3s linear infinite",
          }}
        >
          Professors
        </span>
      </div>
      <div className="container">
        {members.length === 0 ? (
          <p className="text-center text-grey" style={{ padding: "40px 0" }}>
            No professors found.
          </p>
        ) : (
          <>
            {teamLead && (
              <div className="team-lead-wrapper">
                <div className="team-lead-badge">Team Lead</div>
                <div className="row professor-row align-items-stretch no-gutters wow animate__animated animate__fadeInUp">
                  <div className="col-xs-12 col-md-5 prof-img-container">
                    <img
                      className="img-fluid mx-auto d-block"
                      src={memberPhoto(teamLead)}
                      alt={teamLead.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="col-xs-12 col-md-7 professor-info"
                    style={{ padding: "20px 20px 20px 16px" }}
                  >
                    <h4
                      className="professor-name font-weight-bold mb-1"
                      style={{ color: "#01153e", fontSize: "1.05rem", whiteSpace: "nowrap" }}
                    >
                      {teamLead.name}
                    </h4>
                    {teamLead.bio && (
                      <p className="font-weight-500 mb-1">{teamLead.bio}</p>
                    )}
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                      {teamLead.scholar_id && (
                        <a
                          target="_blank"
                          href={`https://scholar.google.com/citations?user=${teamLead.scholar_id}&hl=en`}
                          className="btn btn-sm btn-outline-custom btn-faculty"
                        >
                          <i className="fab fa-google mr-1"></i> Google Scholar Profile
                        </a>
                      )}
                      {teamLead.email && (
                        <a
                          href={`mailto:${teamLead.email}`}
                          className="btn btn-sm btn-outline-custom btn-faculty"
                        >
                          <i className="fa fa-paper-plane mr-1"></i> Contact
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {rows.length > 0 && (
              <>
                <div className="section-divider">
                  <span className="divider-diamond">&#9670;</span>
                </div>
                {rows.map((pair, rowIdx) => (
                  <div className="professors-grid row" key={rowIdx}>
                    {pair.map((m, i) => (
                      <div className="col-md-6" key={m.id}>
                        <div
                          className="prof-card wow animate__animated animate__fadeInUp"
                          data-wow-delay={`${(0.1 * (rowIdx * 2 + i + 1)).toFixed(1)}s`}
                        >
                          <div className="prof-card-img">
                            <img
                              src={memberPhoto(m)}
                              alt={m.name}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <h4 className="prof-card-name">{m.name}</h4>
                          {m.bio && <p className="prof-card-title">{m.bio}</p>}
                          {m.email && (
                            <p className="prof-card-email">
                              <i className="fa fa-envelope"></i>{" "}
                              <a href={`mailto:${m.email}`}>{m.email}</a>
                            </p>
                          )}
                          {m.scholar_id && (
                            <div className="prof-card-actions">
                              <a
                                target="_blank"
                                href={`https://scholar.google.com/citations?user=${m.scholar_id}&hl=en`}
                                className="btn btn-sm btn-outline-custom"
                              >
                                <i className="fab fa-google mr-1"></i> Google Scholar
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
      <WowScript />
      <style>{`
        .professor-row {
            margin-bottom: 10px;
            padding: 0;
            background: #ffffff;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 2px 12px rgba(1,21,62,0.08);
        }
        .professor-info p {
            margin-bottom: 2px;
            line-height: 1.3;
            color: #01153e;
            font-size: 0.88rem;
        }
        .professor-info p i {
            width: 20px;
            color: #01153e;
        }
        .btn-faculty {
            margin-right: 8px;
            margin-bottom: 8px;
        }
        .prof-img-container {
            display: flex;
            align-items: stretch;
            overflow: hidden;
            min-height: 100%;
            border-radius: 12px 0 0 12px;
        }
        .prof-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
        }
        .team-lead-wrapper {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            text-align: center;
        }
        .team-lead-badge {
            display: block;
            text-align: center;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 1.6rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            margin: 0 auto 16px auto;
            width: fit-content;
            background: linear-gradient(135deg, #01153e 0%, #c5a55a 50%, #01153e 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: tl-shimmer 3s linear infinite;
            position: relative;
        }
        .team-lead-badge::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #c5a55a, transparent);
        }
        @keyframes tl-shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }
        .section-divider {
            text-align: center;
            margin: 40px auto 32px auto;
            position: relative;
            max-width: 500px;
        }
        .section-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #c5a55a, transparent);
        }
        .divider-diamond {
            position: relative;
            display: inline-block;
            background: #f5f5f5;
            padding: 0 16px;
            color: #c5a55a;
            font-size: 1.2rem;
        }
        .professors-grid {
            max-width: 960px;
            margin: 0 auto 20px auto;
        }
        .prof-card {
            background: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(1,21,62,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
        }
        .prof-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 24px rgba(1,21,62,0.12);
        }
        .prof-card-img img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid #c5a55a;
            padding: 3px;
            margin-bottom: 12px;
        }
        .prof-card-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: #01153e;
            margin-bottom: 4px;
        }
        .prof-card-title {
            font-size: 0.82rem;
            color: #555;
            margin-bottom: 4px;
            line-height: 1.4;
        }
        .prof-card-affil {
            font-size: 0.78rem;
            color: #888;
            margin-bottom: 8px;
        }
        .prof-card-email {
            font-size: 0.8rem;
            margin-bottom: 10px;
        }
        .prof-card-email a {
            color: #01153e;
        }
        .prof-card-actions {
            margin-top: 6px;
        }
      `}</style>
    </>
  );
}

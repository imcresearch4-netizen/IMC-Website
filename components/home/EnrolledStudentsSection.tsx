"use client";

import { ENROLLED_GROUPS } from "@/constants/home";

const semHtml = (sem: string): string => sem.replace(/(st|nd|rd|th)/, "<sup>$1</sup>");

export default function EnrolledStudentsSection() {
  return (
    <div className="row enrolled-students-section">
      <div className="col-12">
        <h2 className="vm-title text-center enrolled-title">
          <i className="fas fa-user-graduate enrolled-icon"></i> Currently Enrolled Students
        </h2>
        <div className="row enrolled-row">
          {ENROLLED_GROUPS.map((g) => (
            <div className="col-md-4 enrolled-col" key={g.label}>
              <div className={`enrolled-card ${g.cardClass}`}>
                <div className="enrolled-card-header">
                  <span className={`enrolled-badge ${g.badgeClass}`}>
                    <i className={g.icon}></i> {g.label}
                  </span>
                  <span className="enrolled-count">{g.count} Students</span>
                </div>
                <div className="enrolled-list">
                  {g.students.slice(0, 4).map((s) => (
                    <div className="enrolled-item" key={s.num}>
                      <span className="enrolled-num">{s.num}</span> {s.name}{" "}
                      {s.sem && (
                        <span
                          className="enrolled-sem"
                          dangerouslySetInnerHTML={{ __html: semHtml(s.sem) }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {g.students.length > 4 && (
                  <>
                    <div className="enrolled-extra collapse" id={g.collapseId}>
                      {g.students.slice(4).map((s) => (
                        <div className="enrolled-item" key={s.num}>
                          <span className="enrolled-num">{s.num}</span> {s.name}
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="enrolled-readmore"
                      data-toggle="collapse"
                      data-target={`#${g.collapseId}`}
                      onClick={(e) => {
                        const t = e.currentTarget;
                        t.textContent = t.textContent.includes("Show More")
                          ? "Show Less"
                          : "Show More";
                      }}
                    >
                      <i className="fas fa-chevron-down"></i> Show More
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
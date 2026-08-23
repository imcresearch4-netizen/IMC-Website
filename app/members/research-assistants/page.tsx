"use client";

import Script from "next/script";
import { members as allMembers, type Member } from "@/lib/data/members";
import { memberPhoto } from "@/utils/member-photo";
import { MEMBER_ROLES } from "@/constants/roles";
import { JQUERY_UI_CSS_HREF, JQUERY_UI_JS_SRC, TABS_CSS_HREF, STUDENTS_CSS_HREF } from "@/config/assets";
import TypedHeader from "@/components/ui/TypedHeader";
import { useTabs } from "@/hooks/useTabs";

export default function ResearchAssistantsPage() {
  const members: Member[] = allMembers;

  const initTabs = useTabs(members.length);

  const assistants = members.filter((m) => m.role === MEMBER_ROLES.researchAssistant);

  return (
    <>
      <link rel="stylesheet" href={JQUERY_UI_CSS_HREF} />
      <link rel="stylesheet" href={TABS_CSS_HREF} />
      <link href={STUDENTS_CSS_HREF} rel="stylesheet" />
      <TypedHeader text="Research Associate" />
      <div className="container">
        <div id="tabs">
          <ul className="mx-auto">
            <li><a href="#tabs-1">Research Associates</a></li>
          </ul>
          <div id="tabs-1">
            {members.length === 0 ? (
              <p className="text-center text-grey" style={{ padding: "40px 0" }}>
                No research associates found.
              </p>
            ) : (
              assistants.map((m) => (
                <div className="row student-row" key={m.id}>
                  <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 align-middle">
                    <img
                      className="student-image img-fluid rounded-circle"
                      src={memberPhoto(m)}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                    <div className="row bg-default div-record">
                      <div className="col-10 text-justify student-name p-1 text-white bg bg-custom">
                        {m.name}
                      </div>
                      <div className="col-2 text-justify student-name p-1 text-white bg bg-secondary">
                        Name
                      </div>
                    </div>
                    {m.education && (
                      <div className="row bg-default div-record">
                        <div className="col-10 text-justify student-education p-1 text-white bg bg-custom">
                          {m.education}
                        </div>
                        <div className="col-2 text-justify p-1 text-white bg bg-secondary">
                          Education
                        </div>
                      </div>
                    )}
                    {m.email && (
                      <div className="row bg-default div-record">
                        <div className="col-10 text-justify student-mail p-1 text-white bg bg-custom">
                          {m.email}
                        </div>
                        <div className="col-2 text-justify student-mail p-1 text-white bg bg-secondary">
                          Email Address
                        </div>
                      </div>
                    )}
                    {m.research_area && (
                      <div className="row bg-default div-record">
                        <div className="col-10 text-justify student-name p-1 text-white bg bg-custom">
                          {m.research_area}
                        </div>
                        <div className="col-2 text-justify student-name p-1 text-white bg bg-secondary">
                          Research Area
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Script
        src={JQUERY_UI_JS_SRC}
        strategy="afterInteractive"
        onLoad={initTabs}
      />
      <style>{`
        .div-record {
            margin-top: 2px;
        }
      `}</style>
    </>
  );
}

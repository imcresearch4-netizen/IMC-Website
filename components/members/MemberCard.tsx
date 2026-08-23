import type { Member } from "@/lib/data/members";
import { memberPhoto } from "@/utils/member-photo";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="ms-card">
      <img
        className="ms-card-img"
        src={memberPhoto(member)}
        alt={member.name}
        loading="lazy"
        decoding="async"
      />
      <div className="ms-card-name">{member.name}</div>
      {member.email && <div className="ms-card-email">{member.email}</div>}
      {member.education && (
        <>
          <div className="ms-card-topic-label">Education</div>
          <div className="ms-card-topic">{member.education}</div>
        </>
      )}
      {member.research_area && (
        <>
          <div
            className="ms-card-topic-label"
            style={member.education ? { marginTop: "4px" } : undefined}
          >
            Research Area
          </div>
          <div className="ms-card-topic">{member.research_area}</div>
        </>
      )}
    </div>
  );
}
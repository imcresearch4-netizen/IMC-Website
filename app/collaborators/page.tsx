"use client";

import { collaborators, type Collaborator } from "@/lib/data/collaborators";
import { groupBy } from "@/utils/group-by";
import { COLORS } from "@/config/theme";
import TypedHeader from "@/components/ui/TypedHeader";

export default function CollaboratorsPage() {
  const groups: Record<string, Collaborator[]> = groupBy(
    collaborators,
    (c) => c.role || "Partners"
  );

  return (
    <>
      <TypedHeader text="Collaborators & Partners" />
      <div className="container page-content">
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-grey">IMC actively collaborates with national and international research institutions, industry partners, and academic organizations.</p>
          </div>
        </div>

        {collaborators.length === 0 && <p className="text-grey">No collaborators found.</p>}

        {Object.entries(groups).map(([group, items]) => (
          <div key={group}>
            <h4 className="mt-4 mb-3" style={{ color: COLORS.navy }}>{group}</h4>
            <div className="row">
              {items.map((c) => (
                <div className="col-md-4 mb-4" key={c.id}>
                  <div className="collab-card">
                    <h5>{c.name}</h5>
                    {c.affiliation && <p className="text-grey">{c.affiliation}</p>}
                    {c.description && <p className="small">{c.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

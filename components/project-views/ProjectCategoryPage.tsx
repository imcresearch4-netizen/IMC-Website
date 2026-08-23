import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { getProjectCategory } from "@/constants/projects";
import { PROJECTS_CSS_HREF } from "@/config/assets";
import { projectCoverUrl } from "@/utils/projects";
import TypedHeader from "@/components/ui/TypedHeader";

export function ProjectCategoryPage({ categoryKey }: { categoryKey: string }) {
  const category = getProjectCategory(categoryKey);
  const heading = category?.heading ?? categoryKey;
  const rows = projects.filter((p) => p.project_key === categoryKey);

  return (
    <>
      <link rel="stylesheet" href={PROJECTS_CSS_HREF} />
      <TypedHeader text={heading} />
      <div className="container">
        {rows.map((p) => (
          <Link
            className="project-holder"
            href={`/project-views/${categoryKey}/${p.id}`}
            key={p.id}
          >
            <div className="row project-row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  className="project-cover img-fluid img-rounded"
                  src={projectCoverUrl(p.image)}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="row bg-default">
                  <div className="col-12 text-justify proj-title">{p.title}</div>
                  {p.team && (
                    <div className="col-12 text-justify proj-auth">{p.team}</div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

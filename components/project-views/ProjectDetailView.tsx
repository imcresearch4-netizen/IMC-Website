import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { getProjectCategory } from "@/constants/projects";

export function ProjectDetailView({
  categoryKey,
  id,
}: {
  categoryKey: string;
  id: string;
}) {
  const category = getProjectCategory(categoryKey);
  const backLabel = category?.backLabel ?? categoryKey;
  const p =
    projects.find((r) => r.project_key === categoryKey && r.id === Number(id)) ||
    null;
  if (!p) notFound();

  return (
    <div className="container">
      <div className="row cat-back-link text-right">
        <Link
          className="btn m-2 text-white btn-custom"
          href={p.link || `/project-views/${categoryKey}`}
        >
          <i className="fa fa-angle-left"></i> &nbsp; {backLabel}
        </Link>
      </div>
      <div className="oTitle text-justify">{p.title}</div>
      <div className="oTDuration">Duration</div>
      <div className="oDuration">{p.duration}</div>
      {p.supported && p.supported.toUpperCase() !== "NONE" && (
        <>
          <div className="oTSupported">Supported by</div>
          <div className="oSupported text-justify">{p.supported}</div>
        </>
      )}
      <div className="oTProjDes">Project Description</div>
      <div className="oProjDes text-justify">{p.description}</div>
      <div className="oProjFlow mx-auto">
        <img
          src={p.image || ""}
          alt={p.image_alt || p.title}
          className="img-fluid d-block mx-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

"use client";

import { courses, type Course } from "@/lib/data/courses";
import { mediaUrl } from "@/lib/media";
import { groupBy } from "@/utils/group-by";
import TypedHeader from "@/components/ui/TypedHeader";

export default function LecturesPage() {
  const groups: Record<string, Course[]> = groupBy(courses, (c) => c.course_name);

  return (
    <>
      <TypedHeader text="Lectures" />
      <div className="container page-content">
        {Object.entries(groups).length === 0 && (
          <h1 className="text-center" style={{ margin: "20px" }}>No lectures available.</h1>
        )}

        {Object.entries(groups).map(([course, items]) => (
          <div key={course}>
            <h1 className="text-center" style={{ margin: "20px" }}>
              {course}
            </h1>
            <div className="row" style={{ marginTop: "20px" }}>
              {items.map((c) => (
                <div className="col-md-12" key={c.id}>
                  <a href={mediaUrl(c.file_url)}>{c.lecture_title}</a>
                </div>
              ))}
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

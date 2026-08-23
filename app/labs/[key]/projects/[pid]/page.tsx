"use client";

import { useParams } from "next/navigation";
import ProjectDetailView from "@/components/labs/ProjectDetailView";

export default function ProjectDetailPage() {
  const params = useParams();
  const key = params.key as string;
  const pid = Number(params.pid);
  return <ProjectDetailView labKey={key} pid={pid} />;
}
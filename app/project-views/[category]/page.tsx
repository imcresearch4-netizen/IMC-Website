import { notFound } from "next/navigation";
import { ProjectCategoryPage } from "@/components/project-views/ProjectCategoryPage";
import { PROJECT_CATEGORIES } from "@/constants/projects";

export function generateStaticParams() {
  return PROJECT_CATEGORIES.map((c) => ({ category: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = PROJECT_CATEGORIES.find((x) => x.key === category);
  return { title: c ? c.title : "Projects" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!PROJECT_CATEGORIES.some((c) => c.key === category)) notFound();
  return <ProjectCategoryPage categoryKey={category} />;
}
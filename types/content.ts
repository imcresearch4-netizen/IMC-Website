export type PhotoSource = { name?: string; photo?: string | null };

export interface Project {
  id: number;
  project_key: string;
  num: string | null;
  title: string;
  subtitle: string | null;
  duration: string | null;
  supported: string | null;
  description: string | null;
  image: string | null;
  image_alt: string | null;
  video: string | null;
  team: string | null;
  link: string | null;
  sort_order: number;
}

export interface LabProject {
  id: number;
  title: string;
  sub: string;
  img: string;
  desc: string;
  team: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  category: string | null;
  badge_class: string | null;
  badge_label: string | null;
  img_badge: string | null;
  date: string | null;
  image: string | null;
  excerpt: string | null;
  content: string | null;
  link: string | null;
  created_at: string | null;
  sort_order: number;
}

export interface Member {
  id: number;
  name: string;
  photo: string | null;
  email: string | null;
  role: string;
  category: string | null;
  education: string | null;
  research_area: string | null;
  bio: string | null;
  scholar_id: string | null;
  created_at: string | null;
  sort_order: number;
}

export interface Alumni {
  id: number;
  name: string;
  degree: string | null;
  year: string | number | null;
  photo: string | null;
  current_position: string | null;
  link: string | null;
  sort_order: number;
}

export interface Publication {
  id: number;
  year: number;
  type: string;
  title: string;
  authors: string;
  venue: string | null;
  citations: string | null;
  link: string;
  created_at: string | null;
}

export interface Dataset {
  id: number;
  title: string;
  download_url: string | null;
  specifications: string | null;
  dimensions: string | null;
  hardware: string | null;
  information: string | null;
  citation: string | null;
  applications: string | null;
  code_links: string | null;
  visualization: string | null;
  sort_order: number;
}

export interface Course {
  id: number;
  course_name: string;
  course_code: string | null;
  lecture_title: string | null;
  file_url: string;
  sort_order: number;
}

export interface GalleryItem {
  id: number;
  title: string | null;
  category: string | null;
  image: string;
  thumb: string | null;
  video: string | null;
  sort_order: number;
}

export interface Collaborator {
  id: number;
  name: string;
  role: string | null;
  affiliation: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
  sort_order: number;
}

export interface RepoItem {
  id: number;
  title: string;
  description: string | null;
  language: string | null;
  download_url: string | null;
  repo_url: string | null;
  sort_order: number;
}

export interface ScholarStats {
  id: number;
  user: string;
  name: string;
  citations: number;
  hIndex: number;
  i10Index: number;
}

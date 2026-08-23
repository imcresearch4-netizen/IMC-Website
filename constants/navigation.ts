export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href?: string;
  dropdown?: NavLink[];
};

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Members",
    dropdown: [
      { label: "Professors", href: "/members/professors" },
      { label: "PhD Students", href: "/members/students?tab=phd" },
      { label: "MS Students", href: "/members/students?tab=ms" },
      { label: "Research Associates", href: "/members/students?tab=ra" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  { label: "Publications", href: "/publications" },
  { label: "Ongoing Projects", href: "/projects" },
  { label: "Datasets", href: "/datasets" },
  { label: "Open-Source Code", href: "/open-source-code" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Hall of Fame", href: "/hall-of-fame" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Ongoing Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Datasets", href: "/datasets" },
  { label: "Open-Source Code", href: "/open-source-code" },
  { label: "Faculty", href: "/members/professors" },
  { label: "Alumni", href: "/alumni" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];
import { SCHOLAR_IDS } from "@/constants/scholars";

export type FacultyMember = {
  id: string;
  name: string;
  scholarId: string;
  scholarRegion?: "pk";
  email: string;
  linkedin: string;
};

export const FACULTY: FacultyMember[] = [
  {
    id: "jalal",
    name: "Prof. Dr. Hafiz Ahmad Jalal",
    scholarId: SCHOLAR_IDS.jalal,
    email: "ahmjal@yahoo.com",
    linkedin: "https://www.linkedin.com/in/ahmad-jalal-66973540/",
  },
  {
    id: "najam",
    name: "Dr. Shaheryar Najam",
    scholarId: SCHOLAR_IDS.najamAlternate,
    scholarRegion: "pk",
    email: "shaheryar.najam@riphah.edu.pk",
    linkedin: "https://www.linkedin.com/in/shaheryar-najam-95648843/",
  },
  {
    id: "rafique",
    name: "Dr. Adnan Ahmad Rafique",
    scholarId: SCHOLAR_IDS.rafique,
    scholarRegion: "pk",
    email: "adnanahmadrafique@gmail.com",
    linkedin: "https://www.linkedin.com/in/adnan-ahmad-rafique-05586643/",
  },
];
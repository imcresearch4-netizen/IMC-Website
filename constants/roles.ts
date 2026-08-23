export const MEMBER_ROLES = {
  professor: "professor",
  phd: "phd",
  ms: "ms",
  researchAssistant: "research_assistant",
  alumni: "alumni",
} as const;

export type MemberRole = (typeof MEMBER_ROLES)[keyof typeof MEMBER_ROLES];
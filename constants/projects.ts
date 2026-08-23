export type ProjectCategory = {
  key: string;
  title: string;
  heading: string;
  backLabel: string;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { key: "aerial-det", title: "Object Detection in Aerial Images", heading: "Scene Understanding and Object Recognition", backLabel: "Human Activity Recognition" },
  { key: "behavior-rec", title: "ICT - Human Activity Recognition", heading: "Human Activity/Behavior Recognition", backLabel: "Human Activity Recognition" },
  { key: "facial-rec", title: "ICT - Facial Expression Recognition", heading: "Facial Expression Recognition", backLabel: "Facial Expression Recognition" },
  { key: "human-inter", title: "ICT - Human to Human Interaction", heading: "Human-Human Human-Object Interation", backLabel: "H-H H-O Interaction" },
  { key: "nat-img", title: "Object Detection and Classification", heading: "Object Detection and Classification", backLabel: "Human Activity Recognition" },
  { key: "posture-est", title: "ICT - Human Posture Estimation", heading: "Human Posture Estimation", backLabel: "Human Posture Estimation" },
  { key: "scene-rec", title: "ICT - Scene Understanding and Object Recognition", heading: "Scene Understanding and Object Recognition", backLabel: "Scene Recognition" },
  { key: "security-enh", title: "ICT - Security Enhancement", heading: "Security Enhancement", backLabel: "Security Enhancements" },
  { key: "veh-det", title: "ICT - Wearable Sensors and Signal Processing", heading: "Wearable Sensors and Signal Processing", backLabel: "Human Activity Recognition" },
  { key: "video-codec", title: "ICT - Video Compression/Codec", heading: "Video Codec/ Compression", backLabel: "Video Codec/ Compression" },
  { key: "wearable-sensors", title: "ICT - Wearable Sensors and Signal Processing", heading: "Wearable Sensors and Signal Processing", backLabel: "Wearable Sensors and Signal Processing" },
];

export const PROJECT_CATEGORY_KEYS = PROJECT_CATEGORIES.map((c) => c.key);

export function getProjectCategory(key: string): ProjectCategory | null {
  return PROJECT_CATEGORIES.find((c) => c.key === key) || null;
}
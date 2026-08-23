import {
  imcProjects,
  imc1Projects,
  imc2Projects,
  imc3Projects,
  imc4Projects,
  imc5Projects,
  LAB_PAGES,
  type LabProject,
} from "./labProjects";
import { publications } from "./publications";

const BP = "/Content/images/docx_images/";

const EXTRA_PROJECTS: LabProject[] = [
  {
    id: 20,
    title: "Video Compression & Codec for Real-Time Surveillance Streams",
    sub: "Adaptive Bitrate Encoding for Low-Latency Monitoring",
    img: BP + "image18.webp",
    desc: "An intelligent video compression pipeline for real-time surveillance, employing region-of-interest encoding and adaptive bitrate control to maintain visual fidelity on critical regions while minimizing bandwidth for background areas.",
    team: ["Dr Shahryar Najam"],
  },
  {
    id: 21,
    title: "Drone & Aerial Capturing for Disaster Response",
    sub: "UAV-Enabled Situational Awareness & Rescue Mapping",
    img: BP + "image4.webp",
    desc: "A drone-based aerial capturing and analysis framework for disaster response operations, providing real-time situational awareness, damage assessment, and rescue priority mapping through onboard perception pipelines.",
    team: ["Eng Asif Jamal"],
  },
  {
    id: 22,
    title: "Human Activity Recognition from Depth Video",
    sub: "Spatiotemporal Multi-Fused Feature Pipeline",
    img: BP + "image16.webp",
    desc: "A depth-camera-based human activity recognition pipeline that fuses spatiotemporal features across multiple depth streams using multi-fused descriptors for robust activity classification in smart environments.",
    team: ["Eng Asif Jamal"],
  },
];

const ALL_ENTRIES: LabProject[] = [
  ...imcProjects,
  ...imc1Projects,
  ...imc2Projects,
  ...imc3Projects,
  ...imc4Projects,
  ...imc5Projects,
  ...EXTRA_PROJECTS,
];

const CATALOG: Record<number, LabProject> = {};
for (const p of ALL_ENTRIES) {
  if (!CATALOG[p.id]) CATALOG[p.id] = p;
}

export function resolveLabProject(labKey: string, pid: number): LabProject | undefined {
  const cfg = LAB_PAGES[labKey];
  if (!cfg || "comingSoon" in cfg) return undefined;
  const local = cfg.projects.find((p) => p.id === pid);
  if (local) return local;
  return CATALOG[pid];
}

export type ArchNode = { icon: string; label: string; note?: string };
export type ProjectArch = { inputs: ArchNode[]; stages: ArchNode[]; outputs: ArchNode[] };

const PIPELINES: Record<number, ProjectArch> = {
  1: {
    inputs: [{ icon: "fa-microchip", label: "IMU Sensors", note: "Accel + Gyro" }, { icon: "fa-video", label: "RGB Video" }],
    stages: [{ icon: "fa-wave-square", label: "Signal Preprocessing" }, { icon: "fa-dna", label: "Genetic Feature Selection" }, { icon: "fa-layer-group", label: "Hierarchical Fusion" }, { icon: "fa-brain", label: "Deep ConvLSTM" }],
    outputs: [{ icon: "fa-tag", label: "Activity Label" }, { icon: "fa-percent", label: "Confidence" }],
  },
  2: {
    inputs: [{ icon: "fa-image", label: "RGB Image" }],
    stages: [{ icon: "fa-vector-square", label: "Panoptic Segmentation" }, { icon: "fa-project-diagram", label: "Scene-Graph Decoder" }, { icon: "fa-code-branch", label: "Dual-Branch Fusion" }, { icon: "fa-comment-alt", label: "Caption Generator" }],
    outputs: [{ icon: "fa-quote-right", label: "Contextual Caption" }, { icon: "fa-sitemap", label: "Scene Graph" }],
  },
  3: {
    inputs: [{ icon: "fa-microchip", label: "Wearable IMU" }, { icon: "fa-video", label: "RGB-D Camera" }],
    stages: [{ icon: "fa-brain", label: "DeepConvLSTM" }, { icon: "fa-project-diagram", label: "Graph Modeling" }, { icon: "fa-users", label: "Inter-Person Fusion" }, { icon: "fa-clipboard-check", label: "Activity Decoder" }],
    outputs: [{ icon: "fa-flag-checkered", label: "Group Activity" }, { icon: "fa-users-cog", label: "Role Classification" }],
  },
  4: {
    inputs: [{ icon: "fa-satellite", label: "Aerial Footage" }, { icon: "fa-child", label: "Pose Frames" }],
    stages: [{ icon: "fa-bolt", label: "Attention Module" }, { icon: "fa-layer-group", label: "Hierarchical Fusion" }, { icon: "fa-brain", label: "ConvLSTM Network" }, { icon: "fa-code-branch", label: "Multi-Task Head" }],
    outputs: [{ icon: "fa-exclamation-triangle", label: "Disaster Type" }, { icon: "fa-user-check", label: "Victim Pose" }],
  },
  5: {
    inputs: [{ icon: "fa-video", label: "CCTV Stream" }],
    stages: [{ icon: "fa-vector-square", label: "Semantic Segmentation" }, { icon: "fa-brain", label: "Neuro-Fuzzy Classifier" }, { icon: "fa-crosshairs", label: "Crowd Tracker" }, { icon: "fa-bolt", label: "Anomaly Detector" }],
    outputs: [{ icon: "fa-route", label: "Crowd Flow Map" }, { icon: "fa-bell", label: "Anomaly Alert" }],
  },
  6: {
    inputs: [{ icon: "fa-video", label: "Multi-Cam Video" }],
    stages: [{ icon: "fa-running", label: "Player Detection" }, { icon: "fa-project-diagram", label: "GraphSAGE" }, { icon: "fa-brain", label: "GRU Temporal" }, { icon: "fa-chess-board", label: "Formation Decoder" }],
    outputs: [{ icon: "fa-flag", label: "Team Formation" }, { icon: "fa-trophy", label: "Role Classification" }],
  },
  7: {
    inputs: [{ icon: "fa-mobile-alt", label: "Accel + Gyro" }, { icon: "fa-heartbeat", label: "Heart Rate" }],
    stages: [{ icon: "fa-filter", label: "Signal Denoising" }, { icon: "fa-wave-square", label: "Feature Extraction" }, { icon: "fa-brain", label: "DL Classifier" }, { icon: "fa-layer-group", label: "Decision Fusion" }],
    outputs: [{ icon: "fa-bell", label: "Fall Alert" }, { icon: "fa-file-medical", label: "Health Report" }],
  },
  8: {
    inputs: [{ icon: "fa-image", label: "RGB Image" }, { icon: "fa-vector-square", label: "Segmentation Map" }],
    stages: [{ icon: "fa-cubes", label: "Structural Encoder" }, { icon: "fa-eye", label: "CNN Appearance" }, { icon: "fa-layer-group", label: "Feature Fusion" }, { icon: "fa-brain", label: "Scene Classifier" }],
    outputs: [{ icon: "fa-tag", label: "Scene Class" }, { icon: "fa-percent", label: "Confidence" }],
  },
  9: {
    inputs: [{ icon: "fa-leaf", label: "Leaf Images" }],
    stages: [{ icon: "fa-magic", label: "Preprocessing" }, { icon: "fa-brain", label: "CNN Transfer Learning" }, { icon: "fa-sliders-h", label: "Fine-tuning" }, { icon: "fa-th-large", label: "Feature Pooling" }],
    outputs: [{ icon: "fa-seedling", label: "Species Label" }, { icon: "fa-chart-bar", label: "Classification Report" }],
  },
  10: {
    inputs: [{ icon: "fa-video", label: "RGB Video" }],
    stages: [{ icon: "fa-th-large", label: "HOG Descriptor" }, { icon: "fa-border-all", label: "LBP Texture" }, { icon: "fa-wind", label: "Optical Flow" }, { icon: "fa-network-wired", label: "Multi-Class SVM" }],
    outputs: [{ icon: "fa-running", label: "Activity Class" }, { icon: "fa-percent", label: "Confidence" }],
  },
  11: {
    inputs: [{ icon: "fa-satellite", label: "UAV Video" }],
    stages: [{ icon: "fa-vector-square", label: "Semantic Segmentation" }, { icon: "fa-crosshairs", label: "Particle Filter" }, { icon: "fa-compass", label: "Motion Compensation" }],
    outputs: [{ icon: "fa-car", label: "Vehicle Tracks" }, { icon: "fa-chart-line", label: "Traffic Stats" }],
  },
  12: {
    inputs: [{ icon: "fa-camera", label: "RGB-D Sensor" }, { icon: "fa-microchip", label: "Wearables" }],
    stages: [{ icon: "fa-child", label: "Skeletal Extraction" }, { icon: "fa-chart-line", label: "Exercise Quality" }, { icon: "fa-cloud", label: "Cloud Streaming" }],
    outputs: [{ icon: "fa-desktop", label: "Therapist Dashboard" }, { icon: "fa-comments", label: "Feedback" }],
  },
  13: {
    inputs: [{ icon: "fa-satellite", label: "Aerial RGB" }, { icon: "fa-wifi", label: "IoT Sensors" }],
    stages: [{ icon: "fa-search-plus", label: "Scale Handling" }, { icon: "fa-layer-group", label: "Multimodal Fusion" }, { icon: "fa-brain", label: "DL Recognition" }],
    outputs: [{ icon: "fa-running", label: "Action Labels" }, { icon: "fa-bell", label: "SAR Alerts" }],
  },
  14: {
    inputs: [{ icon: "fa-camera", label: "RGB-D Frames" }],
    stages: [{ icon: "fa-hand-paper", label: "Hand Pose Estimation" }, { icon: "fa-cube", label: "Object Recognition" }, { icon: "fa-lightbulb", label: "Intent Understanding" }],
    outputs: [{ icon: "fa-robot", label: "Manipulation Plan" }, { icon: "fa-handshake", label: "Safe Interaction" }],
  },
  15: {
    inputs: [{ icon: "fa-brain", label: "EEG" }, { icon: "fa-wind", label: "Airflow + SpO2" }],
    stages: [{ icon: "fa-bolt", label: "Self-Attention" }, { icon: "fa-wave-square", label: "Spectral Features" }, { icon: "fa-code-branch", label: "Classification Head" }],
    outputs: [{ icon: "fa-bed", label: "Sleep Stages" }, { icon: "fa-bell", label: "Apnea Events" }],
  },
  16: {
    inputs: [{ icon: "fa-heartbeat", label: "Echo" }, { icon: "fa-x-ray", label: "MRI" }],
    stages: [{ icon: "fa-wave-square", label: "Feature Extraction" }, { icon: "fa-layer-group", label: "Attention Fusion" }, { icon: "fa-brain", label: "Classifier" }],
    outputs: [{ icon: "fa-file-medical", label: "MI Diagnosis" }, { icon: "fa-percent", label: "Risk Score" }],
  },
  17: {
    inputs: [{ icon: "fa-x-ray", label: "Multi-Region MRI" }],
    stages: [{ icon: "fa-dna", label: "Biomarker Extraction" }, { icon: "fa-atom", label: "Quantum Optimization" }, { icon: "fa-brain", label: "Analytics Engine" }],
    outputs: [{ icon: "fa-notes-medical", label: "Diagnosis" }, { icon: "fa-map", label: "Region Maps" }],
  },
  18: {
    inputs: [{ icon: "fa-brain", label: "EEG" }, { icon: "fa-heartbeat", label: "ECG" }],
    stages: [{ icon: "fa-clock", label: "Temporal Alignment" }, { icon: "fa-wave-square", label: "Spectral + HRV" }, { icon: "fa-layer-group", label: "Deep Fusion" }],
    outputs: [{ icon: "fa-smile", label: "Emotional State" }, { icon: "fa-chart-pie", label: "Wellness Index" }],
  },
  19: {
    inputs: [{ icon: "fa-x-ray", label: "Thoracic CT" }],
    stages: [{ icon: "fa-vector-square", label: "Anatomical Segmentation" }, { icon: "fa-cubes", label: "Multi-View Radiomics" }, { icon: "fa-brain", label: "Subtype Classifier" }],
    outputs: [{ icon: "fa-bullseye", label: "Nodule Map" }, { icon: "fa-file-medical", label: "Cancer Subtype" }],
  },
  20: {
    inputs: [{ icon: "fa-video", label: "Surveillance Streams" }],
    stages: [{ icon: "fa-crop", label: "ROI Encoding" }, { icon: "fa-film", label: "Codec Engine" }, { icon: "fa-sliders-h", label: "Bitrate Control" }],
    outputs: [{ icon: "fa-cloud", label: "Compressed Stream" }, { icon: "fa-play-circle", label: "Real-Time Playback" }],
  },
  21: {
    inputs: [{ icon: "fa-satellite", label: "Drone Imagery" }, { icon: "fa-map-marker-alt", label: "GPS Telemetry" }],
    stages: [{ icon: "fa-th-large", label: "Image Mosaic" }, { icon: "fa-search", label: "Damage Assessment" }, { icon: "fa-map-marked-alt", label: "Response Mapping" }],
    outputs: [{ icon: "fa-map", label: "Situation Map" }, { icon: "fa-first-aid", label: "Rescue Priority" }],
  },
  22: {
    inputs: [{ icon: "fa-camera", label: "Depth Camera" }],
    stages: [{ icon: "fa-cubes", label: "Spatiotemporal Features" }, { icon: "fa-layer-group", label: "Multi-Fusion Descriptor" }, { icon: "fa-brain", label: "Classifier" }],
    outputs: [{ icon: "fa-running", label: "Activity Label" }, { icon: "fa-percent", label: "Confidence" }],
  },
};

export function getArch(labKey: string, pid: number): ProjectArch | undefined {
  const proj = resolveLabProject(labKey, pid);
  if (!proj) return undefined;
  if (PIPELINES[pid]) return PIPELINES[pid];
  return {
    inputs: [{ icon: "fa-database", label: "Input Data" }],
    stages: [{ icon: "fa-cogs", label: "Processing Pipeline" }, { icon: "fa-brain", label: "Deep Learning Model" }],
    outputs: [{ icon: "fa-check-circle", label: "Output" }],
  };
}

export const LAB_AUTHOR_PATTERNS: Record<string, RegExp[]> = {
  imc: [/\ba\.?\s*jalal\b/i, /\bahmad\s+jalal\b/i, /\bj\.?\s*ahmad\b/i],
  imc1: [/\ba\.?\s*rafique\b/i, /\badnan\s+ahmad\b/i, /\badnan\b/i],
  imc2: [/\bn\.?\s*shaheryar\b/i, /\bs\.?\s*najam\b/i, /\bshaheryar\b/i, /\bshahryar\b/i],
  imc3: [/\bk\.?\s*khan\b/i, /\bkifayat\b/i],
  imc4: [/\bm\.?a\.?\s*jamal\b/i, /\bmuhammad\s+asif\b/i, /\basif\s+jamal\b/i],
  imc5: [/\ba\.?\s*nadeem\b/i, /\bamir\s+nadeem\b/i, /\baamir\s+nadeem\b/i],
};

export const PROJECT_AUTHOR_PATTERNS: Record<string, RegExp[]> = {
  "imc-11": [/\bm\.?a\.?\s*jamal\b/i, /\bmuhammad\s+asif\b/i, /\basif\s+jamal\b/i],
  "imc3-7": [/\bkainat\b/i, /\bi\.?\s*kainat\b/i, /\bk\.?\s*iqbal\b/i],
  "imc3-12": [/\bkainat\b/i, /\bi\.?\s*kainat\b/i, /\bk\.?\s*iqbal\b/i],
};

function extractKeywords(text: string): string[] {
  const stops = new Set(["the","a","an","and","or","of","in","for","to","with","on","at","by","from","using","via","based","through","under","between","into","that","this","is","are","are","as","its","their","they","has","have","been","which","not","can","will","also","than","but","all","any","each","our","we","for","non","multi"]);
  return [...new Set(text.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(w=>w.length>3 && !stops.has(w)))].slice(0,15);
}

export function relatedPublications(labKey: string, projectTitle: string, projectId?: number): Array<typeof publications[0] & { score: number; authorIdx: number }> {
  const projectKey = projectId ? `${labKey}-${projectId}` : "";
  const projectPatterns = PROJECT_AUTHOR_PATTERNS[projectKey];
  const labPatterns = LAB_AUTHOR_PATTERNS[labKey] || [];
  const patterns = projectPatterns || labPatterns;
  const keywords = extractKeywords(projectTitle);
  const results: Array<typeof publications[0] & { score: number; authorIdx: number }> = [];
  for (const pub of publications) {
    const authLower = (pub.authors || "").toLowerCase();
    const hasAuthor = patterns.some(p => p.test(authLower || ""));
    if (!hasAuthor) continue;
    let matchedPatternIdx = 0;
    patterns.forEach((p, i) => { if (p.test(authLower || "")) matchedPatternIdx = i; });
    const titleLower = (pub.title || "").toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (titleLower.includes(kw)) score += kw.length;
    }
    results.push({ ...pub, score, authorIdx: matchedPatternIdx });
  }
  results.sort((a, b) => (b.score - a.score) || (b.year - a.year));
  return results.slice(0, 8);
}

export { PIPELINES, CATALOG, EXTRA_PROJECTS };
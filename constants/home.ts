import { SCHOLAR_IDS, scholarProfileUrl, scholarStatsUrl } from "@/constants/scholars";

export type VmCard = {
  icon: string;
  alt: string;
  title: string;
  projects: string[];
};

export const VM_CARDS: VmCard[] = [
  {
    icon: "/Content/images/vm_icons/Medical Imaging technology.webp",
    alt: "Medical Imaging",
    title: "Medical Imaging Technology",
    projects: [
      "Multi-Modal Feature Fusion Pipeline for Myocardial Infarction Detection from Echo/MRI",
      "An Integrated AI Framework for Lung Cancer Segmentation & Subtype Classification Using Thoracic Imaging",
      "Facial Expression Recognition in Video Sequences Using 1D Transform & Gabor Wavelet Transform",
      "Human Posture Estimation from RGB-D Video Data",
    ],
  },
  {
    icon: "/Content/images/vm_icons/Multi sensor healthcare system.webp",
    alt: "Multicare Healthcare",
    title: "Multicare Healthcare System",
    projects: [
      "Multimodal Intelligent Biosensors Framework for Fall Detection & Healthcare Monitoring",
      "IoT & Cloud-Based RGB+D Telerehabilitation",
      "Attention-Driven Multimodal Framework for Sleep Staging & Obstructive Apnea Screening",
      "Multimodal EEG-ECG Pipeline for Emotion Recognition (Robotic Perception)",
    ],
  },
  {
    icon: "/Content/images/vm_icons/Neurovision AI.webp",
    alt: "NeuroVision AI",
    title: "NeuroVision AI",
    projects: [
      "NeuroVisionAI: Intelligent Multi-Region MRI Analytics for Neurological Disorder Diagnosis",
      "Human Gait Activity & Behavior Recognition",
      "Scene Understanding for Intelligent Visual Perception",
      "Multi Object Monitoring & Tracking Systems",
    ],
  },
  {
    icon: "/Content/images/vm_icons/Humanoid robots drones survillance system.webp",
    alt: "Humanoid Robot Drones",
    title: "Humanoid Robot / Drones Surveillance",
    projects: [
      "Multimodal Humanoid Robotic Activity Recognition",
      "Enhancing Vehicle Detection & Tracking in UAV Imagery via Pixel Labeling & Particle Filter",
      "Intelligent Human Action Recognition: A Multimodal IoT-Enabled Framework with Quantum-Optimized Intelligence for UAV/Drone-Based Crowd Scenarios",
      "RGB-D Robotic Perception Pipeline for Hand-Object Interaction & Scene Understanding",
    ],
  },
  {
    icon: "/Content/images/vm_icons/object detection and context awareness.webp",
    alt: "Object Detection",
    title: "Object Detection & Context Awareness",
    projects: [
      "A Dual-Branch Visual-Textual Model for Contextual Scene Awareness",
      "Multimodal Scene Recognition Using Semantic Segmentation & Deep Learning Integration",
      "Leaf Classification for Sustainable Agriculture & In-Depth Species Analysis",
      "Vision Sensor for Human Activity Recognition via Hybrid Features & Multi-Class SVM",
    ],
  },
  {
    icon: "/Content/images/vm_icons/floods and disaster events.webp",
    alt: "Floods Disaster",
    title: "Floods & Disaster Events",
    projects: [
      "DisasterNet: Attention-Driven Framework for Disaster Event & Human Pose Recognition",
      "Smart Surveillance for Disaster Risk Assessment & Monitoring",
      "Security Enhancement Using Intelligent Video Analytics",
      "Drone & Aerial Capturing for Disaster Response",
    ],
  },
  {
    icon: "/Content/images/vm_icons/crowd tracking and anomly detection.webp",
    alt: "Crowd Tracking",
    title: "Crowd Tracking & Anomaly Detection",
    projects: [
      "Semantic Segmentation based Crowd Tracking & Anomaly Detection",
      "Human Activity Recognition from Depth Video Using Spatiotemporal Multi-Fused Features",
      "Video Compression & Codec for Real-Time Surveillance Streams",
      "Wearable Sensors & Signal Processing for Behavioral Anomaly Detection",
    ],
  },
  {
    icon: "/Content/images/vm_icons/Group interaction monitorring.webp",
    alt: "Group Interaction",
    title: "Group Interaction Monitoring",
    projects: [
      "Wearable Sensing: Intelligent Multi-Participant Activity Recognition Using DeepConvLSTM & Graph Modeling",
      "GraphSAGE-GRU Spatio-Temporal Modeling for Collective Sports Activity Recognition",
      "Human-Object & Human-Human Interaction Recognition",
      "Vehicle Detection & Tracking for Multi-Agent Traffic Monitoring",
    ],
  },
];

export const HOME_KPI_FALLBACKS = {
  publications: 445,
  impactFactor: "478.28",
  citations: "19,570",
  projects: 15,
  hIndex: 79,
} as const;

export type EnrolledStudent = {
  num: number;
  name: string;
  sem?: string;
};

export type EnrolledGroup = {
  label: string;
  icon: string;
  badgeClass: string;
  count: number;
  cardClass: string;
  collapseId: string;
  students: EnrolledStudent[];
};

export const ENROLLED_GROUPS: EnrolledGroup[] = [
  {
    label: "PhD",
    icon: "fas fa-graduation-cap",
    badgeClass: "enrolled-badge-phd",
    count: 8,
    cardClass: "enrolled-card-phd",
    collapseId: "phdExtra",
    students: [
      { num: 1, name: "Ayesha Naseer", sem: "5th Sem" },
      { num: 2, name: "Muhammad Waqas Ahmed", sem: "4th Sem" },
      { num: 3, name: "Aymen Siddique", sem: "2nd Sem" },
      { num: 4, name: "Mehpara Saghir" },
      { num: 5, name: "Anam Naseer" },
      { num: 6, name: "Zaryab Shaker" },
      { num: 7, name: "Muhammad Adeel Ahmed Tahir" },
      { num: 8, name: "Fakhra Nazar" },
    ],
  },
  {
    label: "MS",
    icon: "fas fa-user-graduate",
    badgeClass: "enrolled-badge-ms",
    count: 13,
    cardClass: "enrolled-card-ms",
    collapseId: "msExtra",
    students: [
      { num: 1, name: "Rehana Bibi" },
      { num: 2, name: "Ishrat Zahra" },
      { num: 3, name: "Aimen Sana Khan" },
      { num: 4, name: "Junaid Javed" },
      { num: 5, name: "Muhammad Hanzla" },
      { num: 6, name: "Muhammad Hanzla" },
      { num: 7, name: "Aleena Kamal" },
      { num: 8, name: "Harris Shahid" },
      { num: 9, name: "Shahzaib Ali" },
      { num: 10, name: "Izda Bashir" },
      { num: 11, name: "Ayesha Qaiser Hashmi" },
      { num: 12, name: "Zarnab Kausar" },
      { num: 13, name: "Munazza Aziz" },
      { num: 14, name: "Mahnoor Iftikhar" },
    ],
  },
  {
    label: "Undergraduate",
    icon: "fas fa-user",
    badgeClass: "enrolled-badge-ug",
    count: 10,
    cardClass: "enrolled-card-ug",
    collapseId: "ugExtra",
    students: [
      { num: 1, name: "Zaara Shahid" },
      { num: 2, name: "Aaman Shahid" },
      { num: 3, name: "Affia Ahmed" },
      { num: 4, name: "Haleema Rehman" },
      { num: 5, name: "Abdullah Iftikhar" },
      { num: 6, name: "Ghulam Sarwar" },
      { num: 7, name: "Zainab Nasir" },
      { num: 8, name: "Fatima" },
      { num: 9, name: "Arandas Sheikh" },
      { num: 10, name: "Esha" },
    ],
  },
];

export type GallerySlide = {
  img: string;
  alt: string;
  title: string;
  caption: string;
};

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    img: "/Content/images/slider/team.webp",
    alt: "IMC Team",
    title: "IMC Research Team",
    caption:
      "Our dedicated team of researchers working on core Artificial Intelligence and Computer Vision.",
  },
  {
    img: "/Content/images/slider/tour1.webp",
    alt: "Ayubia Tour",
    title: "Ayubia Group Tour",
    caption:
      "Fostering collaboration and team bonding through recreational activities and trips.",
  },
  {
    img: "/Content/images/slider/Conf.webp",
    alt: "IEEE Conference",
    title: "IEEE Conference & Awards",
    caption:
      "Usman presenting and winning the Best Paper Award at the MCS-NUST comTech Conference.",
  },
  {
    img: "/Content/images/slider/Air_University2.webp",
    alt: "Air University",
    title: "Air University Campus",
    caption:
      "The state-of-the-art campus housing the Intelligent Media Center lab space.",
  },
  {
    img: "/Content/images/3rd ranking.webp",
    alt: "Prof. Jalal Ranked 3rd",
    title: "Prof. Dr. Ahmad Jalal Ranked 3rd in Pakistan",
    caption:
      "Recognized among Pakistan's leading Computer Science scientists in national research rankings.",
  },
];

export const NEWS_FALLBACKS = {
  ticker: [
    "IMC Lab achieves massive success with 19 papers at 2nd IEEE Karachi HTC 2026",
    "CrowdVoxel-Net published in Egyptian Informatics Journal",
    "Prof. Dr. Ahmad Jalal ranked 3rd among Pakistan's leading CS scientists",
  ],
  latest:
    "IMC Lab achieved massive success at 2nd IEEE Karachi HTC 2026 with 19 peer-reviewed papers accepted.",
  announcement: {
    badge: "Admissions / Openings",
    text: "Positions for MS & Ph.D. students are open in the Intelligent Media Center. Please contact the director or visit the office.",
  },
} as const;

export type ScholarExtras = {
  publications: string;
  projects: string;
  since: string;
};

export type ScholarCardConfig = {
  statId: number;
  labId: string;
  name: string;
  accent: number;
  url: string;
  extras: ScholarExtras;
};

export const SCHOLAR_CARDS: ScholarCardConfig[] = [
  {
    statId: 1,
    labId: "IMC",
    name: "Professor Dr. Hafiz Ahmad Jalal",
    accent: 1,
    url: scholarProfileUrl(SCHOLAR_IDS.jalal),
    extras: { publications: "739+", projects: "15", since: "7,200+" },
  },
  {
    statId: 3,
    labId: "IMC 1",
    name: "Dr. Adnan Ahmad Rafique",
    accent: 3,
    url: scholarProfileUrl(SCHOLAR_IDS.rafique, "pk"),
    extras: { publications: "40", projects: "2", since: "150+" },
  },
  {
    statId: 2,
    labId: "IMC 2",
    name: "Dr. Shaheryar Najam",
    accent: 2,
    url: scholarStatsUrl(SCHOLAR_IDS.najam),
    extras: { publications: "76", projects: "7", since: "1,800+" },
  },
];
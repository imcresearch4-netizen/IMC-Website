import { DOCX_IMAGES_BASE } from "@/constants/paths";
import type { LabProject } from "@/types/content";
export type { LabProject };

const BP = DOCX_IMAGES_BASE;

export const imcProjects: LabProject[] = [
  {
    id: 1,
    title: "Multimodal Humanoid Robotic Activity Recognition",
    sub: "Hierarchical IMU-RGB Feature Fusion with Genetic Optimization and Deep ConvLSTM",
    img: BP + "image1.webp",
    desc: "A hierarchical fusion framework for robust humanoid activity recognition using IMU and RGB modalities, enhanced with genetic optimization for feature selection and Deep ConvLSTM for temporal modeling. Single-modality recognition collapses under occlusion and sensor drift — humanoids need redundant perception.",
    team: ["Ahmad Jalal", "Hanzla"],
  },
  {
    id: 2,
    title: "A Dual-Branch Visual-Textual Model for Contextual Scene Awareness",
    sub: "Integrating Panoptic Segmentation and Scene-Graph Decoding",
    img: BP + "image2.webp",
    desc: "Conventional captioners name objects but not the relationships between them. This model reasons over structure before it writes a word using panoptic segmentation for pixel-level scene parsing and scene-graph decoding for relational understanding. The dual-branch architecture simultaneously processes visual features and textual semantics for contextually rich captions.",
    team: ["Ahmad Jalal", "Aymen Siddique"],
  },
  {
    id: 3,
    title: "Intelligent Multi-Participant Activity Recognition",
    sub: "Using DeepConvLSTM and Graph Modeling",
    img: BP + "image3.webp",
    desc: "Treating participants as graph nodes lets the model recognize shared and interacting activities that per-person classifiers cannot see. The framework employs DeepConvLSTM for spatiotemporal feature extraction and graph neural networks for inter-person relationship modeling, enabling accurate recognition of group activities and collaborative tasks in multi-person environments.",
    team: ["Ahmad Jalal", "Hanzla", "Mina", "Mahpara Saghir", "Sudais ur Rehman"],
  },
  {
    id: 4,
    title: "DisasterNet: Disaster Event & Human Pose Recognition",
    sub: "Attention-Driven Framework with Hierarchical Feature Fusion",
    img: BP + "image4.webp",
    desc: "An attention-driven framework for simultaneous disaster event classification and human pose estimation in emergency scenes using hierarchical feature fusion with deep ConvLSTM. The system processes multi-scale features through attention mechanisms for real-time identification of disaster types and victim poses.",
    team: ["Ahmad Jalal", "Ishrat Zahra"],
  },
  {
    id: 5,
    title: "Semantic Segmentation based Crowd Tracking & Anomaly Detection",
    sub: "Neuro-Fuzzy Classifier in Smart Surveillance System",
    img: BP + "image6.webp",
    desc: "A neuro-fuzzy classifier-based surveillance system for semantic segmentation driven crowd tracking and anomaly detection in crowded public spaces. The framework integrates pixel-level semantic understanding with fuzzy inference rules to track individual movements and detect anomalous behaviors such as running, fighting, or crowding.",
    team: ["Ahmad Jalal", "Bisma Batool"],
  },
  {
    id: 6,
    title: "GraphSAGE-GRU Spatio-Temporal Sports Activity Recognition",
    sub: "Graph Neural Network + GRU for Collective Sports Modeling",
    img: BP + "image8.webp",
    desc: "Combines Graph Neural Networks with Gated Recurrent Units for collective sports activity modeling. The GraphSAGE architecture samples and aggregates neighborhood features while GRU layers model sequential dependencies, enabling accurate recognition of team formations, player roles, and tactical movements in team sports.",
    team: ["Ahmad Jalal", "Ishrat Zahra", "Saleha Kamal", "Zaryab"],
  },
  {
    id: 7,
    title: "Multimodal Biosensors Framework for Fall Detection & Healthcare",
    sub: "Wearable IoT Framework for Elderly Patient Safety",
    img: BP + "image10.webp",
    desc: "A wearable IoT framework integrating multimodal biosensors with intelligent signal processing for fall detection and remote health monitoring of elderly patients. The system fuses accelerometer, gyroscope, and heart rate data through deep learning models to distinguish between falls and daily activities.",
    team: ["Ahmad Jalal", "Iqra Abro", "Aimen Sana Khan", "Sana Malik"],
  },
  {
    id: 8,
    title: "Multimodal Scene Recognition via Semantic Segmentation",
    sub: "Fusing Pixel-Level Structural Features with CNN Appearance Features",
    img: BP + "image12.webp",
    desc: "Fusing pixel-level structural features from semantic segmentation with deep CNN appearance features for robust scene classification in robotics and autonomous navigation. The multimodal approach combines geometric layout information with visual texture patterns for accurate scene understanding across diverse environments including indoor spaces, urban landscapes, and natural terrains under varying lighting conditions.",
    team: ["Ahmad Jalal", "Waqas Ahmad", "Ayesha"],
  },
  {
    id: 9,
    title: "Leaf Classification for Sustainable Agriculture & Species Analysis",
    sub: "Deep Learning-Based Plant Identification for Precision Agriculture",
    img: BP + "image14.webp",
    desc: "Deep learning-based plant identification using leaf images for precision agriculture, weed management, and biodiversity monitoring. The framework employs convolutional neural networks with transfer learning to classify plant species from leaf morphology, vein patterns, and textural features.",
    team: ["Ahmad Jalal", "Sara Mumtaz"],
  },
  {
    id: 10,
    title: "Vision Sensor for Human Activity Recognition via Hybrid Features",
    sub: "HOG + LBP + Optical Flow with Multi-Class SVM",
    img: BP + "image16.webp",
    desc: "HOG, LBP and Optical Flow hybrid features with multi-class SVM for vision-based human activity recognition from RGB cameras. The system extracts complementary descriptors capturing shape, texture, and motion information for recognizing activities such as walking, running, sitting, and gesturing.",
    team: ["Ahmad Jalal", "Saleha Kamal", "Junaid Javid"],
  },
  {
    id: 11,
    title: "Vehicle Detection & Tracking in UAV Imagery",
    sub: "Aerial Surveillance with Semantic Segmentation and Particle Filter",
    img: BP + "image18.webp",
    desc: "Aerial surveillance system for real-time vehicle detection and tracking from UAV video using pixel-level semantic segmentation and particle filter tracking. The system segments vehicles from aerial views and maintains robust tracking through occlusions and camera motion, enabling traffic monitoring, disaster assessment, and military reconnaissance.",
    team: ["Ahmad Jalal", "Mujtaba", "Bisma", "Rimsha"],
  },
];

export const imc2Projects: LabProject[] = [
  {
    id: 12,
    title: "IoT & Cloud-Based RGB+D Telerehabilitation",
    sub: "Multi-Modal Perception for Remote Patient Monitoring",
    img: BP + "image20.webp",
    desc: "An IoT and cloud-based telerehabilitation framework using RGB-Depth sensors for remote patient monitoring and rehabilitation assessment. The system captures 3D skeletal data and RGB video to analyze exercise quality, range of motion, and treatment adherence, providing real-time feedback to patients and progress reports to therapists via secure cloud infrastructure for at-home rehabilitation programs.",
    team: ["Dr Shahryar Najam", "Aleena Kamal", "Harris Shahid", "Shahzaib Ali", "Zaara Shahi"],
  },
  {
    id: 13,
    title: "Intelligent Human Action Recognition for UAV/Drone Scenarios",
    sub: "Multimodal IoT-Enabled Framework",
    img: BP + "image21.webp",
    desc: "A multimodal IoT-enabled framework for human action recognition in UAV/drone-based crowd and multi-person scenarios. The system integrates aerial RGB video with IoT sensor data through deep learning pipelines to recognize human actions from elevated viewpoints, addressing challenges of scale variation, occlusion, and dynamic camera motion in real-time surveillance and search-and-rescue operations.",
    team: ["Dr Shahryar Najam", "Harris Shahid", "Aaman Shahid", "Izda Bashir"],
  },
  {
    id: 14,
    title: "RGB-D Robotic Perception for Hand-Object Interaction",
    sub: "Perception Pipeline for Scene Understanding and Robotic Manipulation",
    img: BP + "image22.webp",
    desc: "An RGB-D robotic perception pipeline for hand-object interaction analysis and scene understanding in human-centric environments for natural human-robot collaboration. The system fuses color and depth data to track hand poses, recognize grasped objects, and understand manipulation intents, enabling robots to assist humans in shared tasks with contextual awareness and safe physical interaction.",
    team: ["Dr Shahryar Najam", "Zarnab Kausar", "Ghulam Sarwar", "Munazza Aziz", "Zainab Nasir", "Fatima", "Arandas Sheikh", "Esha"],
  },
  {
    id: 15,
    title: "Attention-Driven Framework for Sleep Staging & Apnea Screening",
    sub: "Integrating EEG and Multimodal Signals for Sleep Assessment",
    img: BP + "image23.webp",
    desc: "An attention-driven multimodal framework for sleep staging and obstructive apnea screening using EEG and physiological signals for accurate sleep assessment. The system employs self-attention mechanisms to identify key temporal patterns across EEG channels, airflow, and oxygen saturation, enabling automated classification of sleep stages and detection of apneic events for clinical sleep disorder diagnosis.",
    team: ["Dr Shahryar Najam", "Aleena Kamal"],
  },
  {
    id: 16,
    title: "Multi-Modal Feature Fusion for Myocardial Infarction Detection",
    sub: "Echo/MRI-Based Pipeline for Cardiac Abnormality Detection",
    img: BP + "image24.webp",
    desc: "A multi-modal feature fusion pipeline for myocardial infarction detection from echocardiogram and MRI sequences using deep learning. The system extracts complementary features from both imaging modalities, fuses them through attention-guided mechanisms, and classifies cardiac abnormalities with high sensitivity and specificity, enabling early detection of heart attacks and improved patient outcomes in clinical cardiology.",
    team: ["Dr Shahryar Najam", "Ayesha Qaiser Hashmi", "Affia Ahmed", "Haleema Rehman", "Abdullah Iftikhar"],
  },
  {
    id: 17,
    title: "NeuroVisionAI: Multi-Region MRI Analytics for Neurological Diagnosis",
    sub: "Anatomical Biomarkers with Quantum-Optimized Fusion",
    img: BP + "image25.webp",
    desc: "An intelligent multi-region MRI analytics framework for neurological disorder diagnosis using anatomical biomarkers and quantum-optimized feature fusion. The system analyzes multiple brain regions simultaneously, extracts volumetric and textural biomarkers, and employs quantum-inspired optimization for feature selection, enabling accurate classification of neurological conditions including Alzheimer disease, brain tumors, and multiple sclerosis from structural MRI scans.",
    team: ["Dr Shahryar Najam", "Ayesha Qaiser Hashmi", "Affia Ahmed"],
  },
  {
    id: 18,
    title: "Multimodal EEG-ECG Pipeline for Emotion Recognition",
    sub: "Integrating Brain and Cardiac Signals for Affective Computing",
    img: BP + "image26.webp",
    desc: "A multimodal EEG-ECG pipeline for emotion recognition, integrating brain and cardiac signal analysis for affective computing and mental health monitoring. The system synchronizes electroencephalogram and electrocardiogram signals through temporal alignment, extracts spectral and HRV features, and employs deep fusion networks to classify emotional states such as happiness, sadness, stress, and relaxation for human-computer interaction and mental wellness applications.",
    team: ["Dr Shahryar Najam", "Aleena Kamal", "Mahnoor Iftikhar"],
  },
  {
    id: 19,
    title: "AI Framework for Lung Cancer Segmentation & Classification",
    sub: "Anatomically Guided Segmentation Using Thoracic CT Imaging",
    img: BP + "image27.webp",
    desc: "An integrated AI framework for anatomically guided lung cancer segmentation and subtype classification using thoracic CT with multi-view deep learning. The system performs precise lung nodule segmentation guided by anatomical priors, extracts radiomic features from multiple viewing planes, and classifies cancer subtypes including adenocarcinoma, squamous cell carcinoma, and small cell carcinoma for computer-aided diagnosis in pulmonary oncology.",
    team: ["Dr Shahryar Najam", "Ayesha Qaiser Hashmi", "Affia Ahmed", "Abdullah Iftikhar"],
  },
];

export type LabPageConfig = {
  typing: string;
  badge: string;
  title: string;
  subtitle: string;
  projects: LabProject[];
};

export type LabComingSoonConfig = {
  typing: string;
  comingSoon: true;
};

export const imc5Projects: LabProject[] = [
  {
    id: 12,
    title: "IoT & Cloud-Based RGB+D Telerehabilitation",
    sub: "Multi-Modal Perception for Remote Patient Monitoring",
    img: BP + "image20.webp",
    desc: "An IoT and cloud-based telerehabilitation framework using RGB-Depth sensors for remote patient monitoring and rehabilitation assessment. The system captures 3D skeletal data and RGB video to analyze exercise quality, range of motion, and treatment adherence, providing real-time feedback to patients and progress reports to therapists via secure cloud infrastructure for at-home rehabilitation programs.",
    team: ["Amir Nadeem"],
  },
  {
    id: 13,
    title: "Intelligent Human Action Recognition for UAV/Drone Scenarios",
    sub: "Multimodal IoT-Enabled Framework",
    img: BP + "image21.webp",
    desc: "A multimodal IoT-enabled framework for human action recognition in UAV/drone-based crowd and multi-person scenarios. The system integrates aerial RGB video with IoT sensor data through deep learning pipelines to recognize human actions from elevated viewpoints, addressing challenges of scale variation, occlusion, and dynamic camera motion in real-time surveillance and search-and-rescue operations.",
    team: ["Amir Nadeem"],
  },
  {
    id: 16,
    title: "Multi-Modal Feature Fusion for Myocardial Infarction Detection",
    sub: "Echo/MRI-Based Pipeline for Cardiac Abnormality Detection",
    img: BP + "image24.webp",
    desc: "A multi-modal feature fusion pipeline for myocardial infarction detection from echocardiogram and MRI sequences using deep learning. The system extracts complementary features from both imaging modalities, fuses them through attention-guided mechanisms, and classifies cardiac abnormalities with high sensitivity and specificity, enabling early detection of heart attacks and improved patient outcomes in clinical cardiology.",
    team: ["Amir Nadeem"],
  },
];

export const imc1Projects: LabProject[] = [
  {
    id: 6,
    title: "GraphSAGE-GRU Spatio-Temporal Sports Activity Recognition",
    sub: "Graph Neural Network + GRU for Collective Sports Modeling",
    img: BP + "image8.webp",
    desc: "Combines Graph Neural Networks with Gated Recurrent Units for collective sports activity modeling. The GraphSAGE architecture samples and aggregates neighborhood features while GRU layers model sequential dependencies, enabling accurate recognition of team formations, player roles, and tactical movements in team sports.",
    team: ["Dr Adnan", "Zaryab"],
  },
  {
    id: 9,
    title: "Leaf Classification for Sustainable Agriculture & Species Analysis",
    sub: "Deep Learning-Based Plant Identification for Precision Agriculture",
    img: BP + "image14.webp",
    desc: "Deep learning-based plant identification using leaf images for precision agriculture, weed management, and biodiversity monitoring. The framework employs convolutional neural networks with transfer learning to classify plant species from leaf morphology, vein patterns, and textural features.",
    team: ["Dr Adnan", "Anam Naseer"],
  },
  {
    id: 11,
    title: "Vehicle Detection & Tracking in UAV Imagery",
    sub: "Aerial Surveillance with Semantic Segmentation and Particle Filter",
    img: BP + "image18.webp",
    desc: "Aerial surveillance system for real-time vehicle detection and tracking from UAV video using pixel-level semantic segmentation and particle filter tracking. The system segments vehicles from aerial views and maintains robust tracking through occlusions and camera motion, enabling traffic monitoring, disaster assessment, and military reconnaissance.",
    team: ["Dr Adnan", "Adeel"],
  },
  {
    id: 7,
    title: "Multimodal Biosensors Framework for Fall Detection & Healthcare",
    sub: "Wearable IoT Framework for Elderly Patient Safety",
    img: BP + "image10.webp",
    desc: "A wearable IoT framework integrating multimodal biosensors with intelligent signal processing for fall detection and remote health monitoring of elderly patients. The system fuses accelerometer, gyroscope, and heart rate data through deep learning models to distinguish between falls and daily activities.",
    team: ["Dr Adnan", "Seerat", "Sunbul", "Zahra"],
  },
];

export const imc3Projects: LabProject[] = [
  {
    id: 7,
    title: "Multimodal Biosensors Framework for Fall Detection & Healthcare",
    sub: "Wearable IoT Framework for Elderly Patient Safety",
    img: BP + "image10.webp",
    desc: "A wearable IoT framework integrating multimodal biosensors with intelligent signal processing for fall detection and remote health monitoring of elderly patients. The system fuses accelerometer, gyroscope, and heart rate data through deep learning models to distinguish between falls and daily activities.",
    team: ["Dr Kifayat Khan", "Kainat Iqbal"],
  },
  {
    id: 12,
    title: "IoT & Cloud-Based RGB+D Telerehabilitation",
    sub: "Multi-Modal Perception for Remote Patient Monitoring",
    img: BP + "image20.webp",
    desc: "An IoT and cloud-based telerehabilitation framework using RGB-Depth sensors for remote patient monitoring and rehabilitation assessment. The system captures 3D skeletal data and RGB video to analyze exercise quality, range of motion, and treatment adherence, providing real-time feedback to patients and progress reports to therapists via secure cloud infrastructure for at-home rehabilitation programs.",
    team: ["Dr Kifayat Khan", "Kainat Iqbal"],
  },
];

export const imc4Projects: LabProject[] = [
  {
    id: 13,
    title: "Intelligent Human Action Recognition for UAV/Drone Scenarios",
    sub: "Multimodal IoT-Enabled Framework",
    img: BP + "image21.webp",
    desc: "A multimodal IoT-enabled framework for human action recognition in UAV/drone-based crowd and multi-person scenarios. The system integrates aerial RGB video with IoT sensor data through deep learning pipelines to recognize human actions from elevated viewpoints, addressing challenges of scale variation, occlusion, and dynamic camera motion in real-time surveillance and search-and-rescue operations.",
    team: ["Eng Asif Jamal"],
  },
];

export const LAB_PAGES: Record<string, LabPageConfig | LabComingSoonConfig> = {
  imc: {
    typing: "IMC - Professor Dr. Hafiz Ahmad Jalal",
    badge: "IMC Lab",
    title: "Computer Vision, Pattern Recognition & Deep Learning",
    subtitle:
      "Advancing the frontiers of intelligent visual computing through deep learning, pattern analysis, and real-world perception systems. Led by Professor Dr. Hafiz Ahmad Jalal.",
    projects: imcProjects,
  },
  imc2: {
    typing: "IMC 2 - Dr. Shaheryar Najam",
    badge: "IMC 2 Lab",
    title: "Medical Imaging, IoT Healthcare & Affective Computing",
    subtitle:
      "Advancing healthcare through intelligent systems — from telerehabilitation and medical imaging to emotion recognition and robotic perception. Led by Dr. Shaheryar Najam.",
    projects: imc2Projects,
  },
  imc5: {
    typing: "IMC 5 - Aamir Nadeem",
    badge: "IMC 5 Lab",
    title: "Neural Networks & Cognitive Computing",
    subtitle:
      "Advancing AI for Healthcare, Robotics & Intelligent Systems. Led by Aamir Nadeem.",
    projects: imc5Projects,
  },
  imc1: {
    typing: "IMC 1 - Dr. Adnan Ahmad Rafique",
    badge: "IMC 1 Lab",
    title: "Applied AI for Vision, Agriculture & Smart Monitoring",
    subtitle:
      "Advancing applied artificial intelligence across sports analytics, precision agriculture, aerial surveillance, and smart healthcare. Led by Dr. Adnan Ahmad Rafique.",
    projects: imc1Projects,
  },
  imc3: {
    typing: "IMC 3 - Dr. Kifayat Khan",
    badge: "IMC 3 Lab",
    title: "Smart Health, Biosensing & Rehabilitation Systems",
    subtitle:
      "Advancing intelligent healthcare through wearable biosensors, remote monitoring, and telerehabilitation technologies. Led by Dr. Kifayat Khan.",
    projects: imc3Projects,
  },
  imc4: {
    typing: "IMC 4 - Engr Asif Jamal",
    badge: "IMC 4 Lab",
    title: "UAV Vision, IoT & Intelligent Surveillance",
    subtitle:
      "Advancing intelligent perception for drones, aerial surveillance, and real-world automation. Led by Engr Asif Jamal.",
    projects: imc4Projects,
  },
};
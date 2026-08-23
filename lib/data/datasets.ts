// AUTO-GENERATED from imc_database_full.sql - do not edit by hand
import type { Dataset } from "@/types/content";

export type { Dataset };

export const datasets: Dataset[] = [
  {
    "id": 1,
    "title": "Automated Part-based Model",
    "download_url": "/Content/dataset/Part Detection Model.zip",
    "specifications": null,
    "dimensions": null,
    "hardware": null,
    "information": "We have introduced a new part-based model for identifying twelve body parts from the extracted human silhouettes. According to this approach, the segmented silhouettes are first converted into binary silhouettes and then their contours are obtained. Further, convex hulls are drawn around the contours. Points on the convex hull that are also part of the original contours are thus identified. Then, only five such points are chosen since having more than one point on the same body part is useless. In cases, where multiple points are detected on the same body part, only one is selected through a point elimination technique based on Euclidean distance. Furthermore, a sixth point is obtained by finding the centroid of the contour. Using the obtained six points, six additional key points are then extracted.",
    "citation": "Waheed, M., Jalal, A., Alarfaj, M., Ghadi, Y. Y., Al Shloul, T., Kamal, S., & Kim, D. S. (2021). An LSTM-Based Approach for Understanding Human Interactions Using Hybrid Feature Descriptors Over Depth Sensors. IEEE Access, 9, 167434-167446.Waheed, M., Javeed, M., & Jalal, A. (2021, November). A Novel Deep Learning Model for Understanding Two-Person Interactions Using Depth Sensors. In 2021 International Conference on Innovative Computing (ICIC) (pp. 1-8). IEEE.",
    "applications": "Human Activity Recognition (HAR), Human Interaction Recognition (HIR), Human-Object Interaction Recognition (HOIR), Human Motion Tracking.",
    "code_links": "Download Automated Part-based Model: /Content/dataset/Part Detection Model.zip",
    "visualization": null,
    "sort_order": 1
  },
  {
    "id": 2,
    "title": "IM-IntensityInteractive7 Dataset",
    "download_url": "/Content/dataset/IM-IntensityInteractive7.zip",
    "specifications": "Specifications: 13 humans (11 male, 2 female) +� 7 Interactions\\nDimensions: 512 +� 424",
    "dimensions": null,
    "hardware": null,
    "information": "We build a new online continuous interaction dataset (IM-IntensityInteractive7) with depth sensor. The dataset is designed to cover human daily interactions collected in an indoor environmental setting. There are seven types of interactions: handshake, fight, push, punch, greet, kick and hug. Most of the interactions in the dataset are highly similar to each other, which make this dataset quite challenging. Dataset includes 12 segmented videos sequences of each human interaction for training and 8 un-segmented continuous videos sequences for testing. For training the system we used 9 subjects who performed different human interactions in pairs. In the testing sets, we used 8 un-segmented continuous interaction videos sequences from 4 new subjects. Each subject performed 4 un-segmented videos sequences. Format: .avi, .jpeg files. Camera: Bumble Bee Camera.",
    "citation": "A. Jalal, M. Mahmood and A. S. Hasan \\\"Multi-features descriptors for human activity tracking and recognition in Indoor-outdoor environments,\\\" IEEE International Conference on Applied Sciences and Technology, 2019.A. Jalal and M. Mahmood, \\\"Students\\' Behavior Mining in E-learning Environment Using Cognitive Processes with Information Technologies,\\\" Education and Information Technologies, Springer, 2019.",
    "applications": "Human Interaction Recognition, Human to Human Relation, Human Motion Tracking.",
    "code_links": "Download IM-IntensityInteractive7 Dataset: /Content/dataset/IM-IntensityInteractive7.zip, kernel sliding perceptron: /Content/code/kernelSlidingPerceptron.rar",
    "visualization": null,
    "sort_order": 2
  },
  {
    "id": 3,
    "title": "IM-SportingBehaviors Dataset",
    "download_url": "/Content/dataset/IMSB dataset.zip",
    "specifications": "Specifications: 20 Subjects (12 males, 8 female) +� 6 Behaviors\\nDimensions: Variable",
    "dimensions": null,
    "hardware": null,
    "information": "We have introduced a Sporting Behaviors dataset (IM-SportingBehaviors) using triaxial accelerometers attached to the subject\\'s wrist, knee, and below neck region to capture important aspects of human motion. The dataset represents motion data captured while subjects are involved in performing 6 sporting behaviors: badminton, basketball, cycling, football, skipping, and table tennis. Format: .txt files. Naming: [GENDER]-[VOLUNTEER]-[DATED]",
    "citation": "A. Jalal, Majid A. K. Quaid, and A. S. Hasan, \\\"Wearable Sensor-Based Human Behavior Understanding and Recognition in Daily Life for Smart Environments,\\\" IEEE FIT, 2018.A. Jalal, M. A. K. Quaid and M. A. Sidduqi \\\"A Triaxial acceleration-based human motion detection for ambient smart home system,\\\" IEEE ICAST, 2019.",
    "applications": "Human Behavior Recognition, Human Movement Tracking.",
    "code_links": "Download IM-SportingBehaviors Dataset: /Content/dataset/IMSB dataset.zip, RGA: /Content/code/rga.zip",
    "visualization": null,
    "sort_order": 3
  },
  {
    "id": 4,
    "title": "IM-Wearable Smart Home Activities (IM-WSHA) Dataset",
    "download_url": "/Content/dataset/IM-WSHA_Dataset.7z",
    "specifications": "Specifications: 10 Subjects (5 females, 5 male) +� 11 Activities\\nDimensions: Variable\\nHardware: 3 IMU (MPU-9250), 4 Arduino UNO, 4 NRF24L01, 9V batteries",
    "dimensions": null,
    "hardware": null,
    "information": "Smart home dataset using three triaxial IMU sensors attached to wrist, chest, and thigh. 11 activities: Using Computer, phone conversation, vacuum cleaning, reading book, watching tv, ironing, walking, exercise, cooking, drinking, brushing hair. Format: .txt files.",
    "citation": "Tahir, S.B.; Jalal, A.; Kim, K. \\\"Wearable Inertial Sensors for Daily Activity Analysis Based on Adam Optimization and the Maximum Entropy Markov Model\\\", Entropy, 2020.Tahir, S.B.; Jalal, A.; Batool, \\\"M. Wearable Sensors for Activity Analysis Using SMO-based Random Forest over Smart home and Sports Datasets\\\", IEEE ICACS, 2020.",
    "applications": "Wearable Sensors, Healthcare monitoring, Smart Homes, Human Activity Recognition.",
    "code_links": "Download IM-WSHA Dataset: /Content/dataset/IM-WSHA_Dataset.7z, : /Content/dataset/1.jpg",
    "visualization": "<a href=\\'/Content/dataset/1.jpg\\'><img src=\\'/Content/dataset/1.jpg\\'/></a>",
    "sort_order": 4
  },
  {
    "id": 5,
    "title": "ieSense: Sensor Based Real Time Pervasive Indoor Position and Environment-Type Detection",
    "download_url": "/Content/dataset/IESense DataSets.zip",
    "specifications": null,
    "dimensions": null,
    "hardware": null,
    "information": null,
    "citation": null,
    "applications": null,
    "code_links": "Download ieSense Dataset: /Content/dataset/IESense DataSets.zip",
    "visualization": null,
    "sort_order": 5
  }
];


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { publications as allPublications } from "@/lib/data/publications";
import { projects as allProjects } from "@/lib/data/projects";
import { members as allMembers } from "@/lib/data/members";
import { newsItems as allNews } from "@/lib/data/news";
import { scholarStats as allScholarStats } from "@/lib/data/scholarStats";

export default function HomePage() {
  const pubCount = allPublications.length;
  const projCount = allProjects.filter((p: any) => p.project_key === "featured").length;
  const professors = allMembers.filter((m: any) => m.role === "professor");
  const latestPubs = allPublications
    .filter((p: any) => p.type === "journal")
    .slice()
    .sort((a: any, b: any) => b.year - a.year)
    .slice(0, 5);
  const newsItems = allNews;

  useEffect(() => {
    const vmSection = document.getElementById("vmSection");
    if (vmSection) {
      function animateVm() {
        const reveals = vmSection!.querySelectorAll(".vm-reveal, .vm-group-reveal, .vm-mini-card");
        const winH = window.innerHeight;
        for (let i = 0; i < reveals.length; i++) {
          const top = reveals[i].getBoundingClientRect().top;
          if (top < winH - 80) {
            reveals[i].classList.add("vm-visible");
          }
        }
      }
      window.addEventListener("scroll", animateVm);
      animateVm();
      return () => window.removeEventListener("scroll", animateVm);
    }
  }, []);

  useEffect(() => {
    const kpiSection = document.getElementById("kpiSection");
    if (!kpiSection) return;
    let animated = false;
    function animateKpi() {
      if (animated) return;
      const rect = kpiSection!.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        animated = true;
        const items = kpiSection!.querySelectorAll(".kpi-reveal");
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add("kpi-visible"), i * 100);
        });
      }
    }
    window.addEventListener("scroll", animateKpi);
    animateKpi();
    return () => window.removeEventListener("scroll", animateKpi);
  }, []);

  useEffect(() => {
    const labsSection = document.getElementById("labsSection");
    if (!labsSection) return;
    function animateLabs() {
      const rect = labsSection!.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        labsSection!.classList.add("labs-visible");
      }
    }
    window.addEventListener("scroll", animateLabs);
    animateLabs();
    const observer = new MutationObserver(() => {
      if (labsSection.classList.contains("labs-visible")) {
        const cards = labsSection.querySelectorAll(".lab-card-reveal");
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add("lab-card-visible"), i * 150);
        });
      }
    });
    observer.observe(labsSection, { attributes: true, attributeFilter: ["class"] });
    return () => window.removeEventListener("scroll", animateLabs);
  }, []);

  useEffect(() => {
    const impactSection = document.getElementById("impactSection");
    if (!impactSection) return;
    function animateImpact() {
      const rect = impactSection!.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        impactSection!.classList.add("impact-visible");
      }
    }
    window.addEventListener("scroll", animateImpact);
    animateImpact();
    const observer = new MutationObserver(() => {
      if (impactSection.classList.contains("impact-visible")) {
        const cards = impactSection.querySelectorAll(".scholar-reveal");
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add("scholar-visible"), i * 180);
        });
      }
    });
    observer.observe(impactSection, { attributes: true, attributeFilter: ["class"] });
    return () => window.removeEventListener("scroll", animateImpact);
  }, []);

  useEffect(() => {
    const tick = () => {
      (window as any).$(".news-ticker-list li:first").slideUp(600, function (this: any) {
        (window as any).$(this).appendTo((window as any).$(".news-ticker-list")).show();
      });
    };
    const btnTick = () => {
      (window as any).$(".btn-ticker-list li:first").slideUp(500, function (this: any) {
        (window as any).$(this).appendTo((window as any).$(".btn-ticker-list")).show();
      });
    };
    const tickInterval = setInterval(tick, 3000);
    const btnTickInterval = setInterval(btnTick, 3000);

    let activeIdx = 0;
    const images = (window as any).$(".gallery-preview-img");
    const rotateInterval = setInterval(() => {
      images.eq(activeIdx).css("opacity", 0);
      activeIdx = (activeIdx + 1) % images.length;
      images.eq(activeIdx).css("opacity", 1);
    }, 3000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(btnTickInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <>
      <section className="full-video-section">
        <div className="full-video-grid">
          <div className="full-video-cell">
            <video autoPlay muted loop playsInline className="full-video-player">
              <source src="/Content/videos/telerehabilation.webm" type="video/webm" />
            </video>
          </div>
          <div className="full-video-cell">
            <video autoPlay muted loop playsInline className="full-video-player">
              <source src="/Content/videos/Vehicle_analytics.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="full-video-cell">
            <video autoPlay muted loop playsInline className="full-video-player">
              <source src="/Content/videos/sleepcode.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="full-video-cell">
            <video autoPlay muted loop playsInline className="full-video-player">
              <source src="/Content/videos/Heart.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <div className="section-golden-line"></div>

      <div className="container" style={{ paddingTop: 2, paddingBottom: 5 }}>
        <div className="vm-section" id="vmSection">
          <div className="vm-header">
            <h2 className="vm-title">
              Vision <span className="vm-amp">&amp;</span> Mission
            </h2>
            <p className="vm-tagline-text">
              To advance intelligent media technologies through cutting-edge research in computer vision, AI, and smart
              systems - empowering society with innovative solutions that bridge academia and real-world impact.
            </p>
            <div className="vm-divider"></div>
          </div>

          <div className="vm-projects-heading-wrap">
            <h3 className="vm-projects-heading">Research Projects</h3>
          </div>

          <div className="golden-box">
            <div className="vm-cards-grid vm-reveal">
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-1"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/Medical Imaging technology.webp"
                  alt="Medical Imaging" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Medical Imaging Technology</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>Multi-Modal Feature Fusion Pipeline for Myocardial Infarction Detection from Echo/MRI</li>
                  <li>
                    An Integrated AI Framework for Lung Cancer Segmentation &amp; Subtype Classification Using Thoracic
                    Imaging
                  </li>
                  <li>Facial Expression Recognition in Video Sequences Using 1D Transform &amp; Gabor Wavelet Transform</li>
                  <li>Human Posture Estimation from RGB-D Video Data</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-2"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/Multi sensor healthcare system.webp"
                  alt="Multicare Healthcare" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Multicare Healthcare System</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>Multimodal Intelligent Biosensors Framework for Fall Detection &amp; Healthcare Monitoring</li>
                  <li>IoT &amp; Cloud-Based RGB+D Telerehabilitation</li>
                  <li>Attention-Driven Multimodal Framework for Sleep Staging &amp; Obstructive Apnea Screening</li>
                  <li>Multimodal EEG-ECG Pipeline for Emotion Recognition (Robotic Perception)</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-3"></div>
                <img className="vm-custom-icon" src="/Content/images/vm_icons/Neurovision AI.webp" alt="NeuroVision AI" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">NeuroVision AI</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>NeuroVisionAI: Intelligent Multi-Region MRI Analytics for Neurological Disorder Diagnosis</li>
                  <li>Human Gait Activity &amp; Behavior Recognition</li>
                  <li>Scene Understanding for Intelligent Visual Perception</li>
                  <li>Multi Object Monitoring &amp; Tracking Systems</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-4"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/Humanoid robots drones survillance system.webp"
                  alt="Humanoid Robot Drones" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Humanoid Robot / Drones Surveillance</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>Multimodal Humanoid Robotic Activity Recognition</li>
                  <li>
                    Enhancing Vehicle Detection &amp; Tracking in UAV Imagery via Pixel Labeling &amp; Particle Filter
                  </li>
                  <li>
                    Intelligent Human Action Recognition: A Multimodal IoT-Enabled Framework with Quantum-Optimized
                    Intelligence for UAV/Drone-Based Crowd Scenarios
                  </li>
                  <li>RGB-D Robotic Perception Pipeline for Hand-Object Interaction &amp; Scene Understanding</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-5"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/object detection and context awareness.webp"
                  alt="Object Detection" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Object Detection &amp; Context Awareness</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>A Dual-Branch Visual-Textual Model for Contextual Scene Awareness</li>
                  <li>Multimodal Scene Recognition Using Semantic Segmentation &amp; Deep Learning Integration</li>
                  <li>Leaf Classification for Sustainable Agriculture &amp; In-Depth Species Analysis</li>
                  <li>Vision Sensor for Human Activity Recognition via Hybrid Features &amp; Multi-Class SVM</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-6"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/floods and disaster events.webp"
                  alt="Floods Disaster" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Floods &amp; Disaster Events</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>DisasterNet: Attention-Driven Framework for Disaster Event &amp; Human Pose Recognition</li>
                  <li>Smart Surveillance for Disaster Risk Assessment &amp; Monitoring</li>
                  <li>Security Enhancement Using Intelligent Video Analytics</li>
                  <li>Drone &amp; Aerial Capturing for Disaster Response</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-7"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/crowd tracking and anomly detection.webp"
                  alt="Crowd Tracking" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Crowd Tracking &amp; Anomaly Detection</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>Semantic Segmentation based Crowd Tracking &amp; Anomaly Detection</li>
                  <li>Human Activity Recognition from Depth Video Using Spatiotemporal Multi-Fused Features</li>
                  <li>Video Compression &amp; Codec for Real-Time Surveillance Streams</li>
                  <li>Wearable Sensors &amp; Signal Processing for Behavioral Anomaly Detection</li>
                </ul>
              </div>
              <div className="vm-mini-card">
                <div className="vm-mini-accent vm-mc-8"></div>
                <img
                  className="vm-custom-icon"
                  src="/Content/images/vm_icons/Group interaction monitorring.webp"
                  alt="Group Interaction" loading="lazy" decoding="async" />
                <h5 className="vm-mini-title">
                  <span className="vm-title-shimmer">Group Interaction Monitoring</span>
                </h5>
                <ul className="vm-mini-projects">
                  <li>
                    Wearable Sensing: Intelligent Multi-Participant Activity Recognition Using DeepConvLSTM &amp; Graph
                    Modeling
                  </li>
                  <li>GraphSAGE-GRU Spatio-Temporal Modeling for Collective Sports Activity Recognition</li>
                  <li>Human-Object &amp; Human-Human Interaction Recognition</li>
                  <li>Vehicle Detection &amp; Tracking for Multi-Agent Traffic Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section id="kpiSection" style={{ padding: "10px 0", position: "relative" }}>
          <div className="container">
            <div className="golden-box">
              <div className="kpi-grid-cvl">
                <div className="kpi-item kpi-reveal">
                  <span className="kpi-big-num">
                    {pubCount || 445}<span className="kpi-plus-top">+</span>
                  </span>
                  <span className="kpi-small-label">Publications</span>
                </div>
                <div className="kpi-item kpi-reveal">
                  <span className="kpi-big-num">
                    478.28<span className="kpi-plus-top">+</span>
                  </span>
                  <span className="kpi-small-label">Impact Factor</span>
                </div>
                <div className="kpi-item kpi-reveal">
                  <span className="kpi-big-num">
                    19,570<span className="kpi-plus-top">+</span>
                  </span>
                  <span className="kpi-small-label">Citations</span>
                </div>
                <div className="kpi-item kpi-reveal">
                  <span className="kpi-big-num">{projCount || 15}</span>
                  <span className="kpi-small-label">Ongoing Projects</span>
                </div>
                <div className="kpi-item kpi-reveal">
                  <span className="kpi-big-num">79</span>
                  <span className="kpi-small-label">h-index</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="labsSection" style={{ padding: "4px 0", position: "relative" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 4 }}>
              <h2 className="vm-title">Explore Our Research Labs</h2>
            </div>

            <div className="golden-box">
              <div className="row" id="labCards">
                {professors.length > 0 &&
                  professors.slice(0, 3).map((p: any, i: number) => (
                    <div className="col-md-4 mb-3 lab-card-wrap" key={p.id}>
                      <div className="lab-card lab-card-reveal">
                        <div className={`lab-card-accent lab-accent-${i + 1}`}></div>
                        <div className="lab-card-lab-id">{i === 0 ? "IMC" : `IMC ${i}`}</div>
                        <div className="lab-card-photo-wrap">
                          <img
                            className="lab-card-photo"
                            src={p.photo || (i === 0 ? "/Content/images/members/prof/eAhmad.webp" : i === 1 ? "/Content/images/members/prof/eAdnan.webp" : "/Content/images/members/prof/esha.webp")}
                            alt={p.name} loading="lazy" decoding="async" />
                          <div className="lab-card-photo-ring"></div>
                        </div>
                        <h3 className="lab-card-name lab-name-prominent">{p.name}</h3>

                        <div className="lab-card-projects-preview">
                          {i === 0 ? (
                            <>
                              <Link href="/labs/imc/projects/7" className="lab-proj-preview">
                                <span className="neon-dot neon-active"></span>
                                <span className="proj-text-green">Multicare Healthcare System</span>
                              </Link>
                              <Link href="/labs/imc/projects/1" className="lab-proj-preview">
                                <span className="neon-dot neon-blue"></span>
                                <span className="proj-text-blue">Humanoid Robot / Drones Surveillance</span>
                              </Link>
                              <Link href="/labs/imc/projects/2" className="lab-proj-preview">
                                <span className="neon-dot neon-gold"></span>
                                <span className="proj-text-gold">Object Detection &amp; Context Awareness</span>
                              </Link>
                              <Link href="/labs/imc/projects/4" className="lab-proj-preview">
                                <span className="neon-dot neon-violet"></span>
                                <span className="proj-text-violet">Floods &amp; Disaster Events</span>
                              </Link>
                              <Link href="/labs/imc/projects/5" className="lab-proj-preview">
                                <span className="neon-dot neon-rose"></span>
                                <span className="proj-text-rose">Crowd Tracking &amp; Anomaly Detection</span>
                              </Link>
                            </>
                          ) : i === 1 ? (
                            <>
                              <Link href="/labs/imc1/projects/7" className="lab-proj-preview">
                                <span className="neon-dot neon-gold"></span>
                                <span className="proj-text-gold">Wearable Sensors</span>
                              </Link>
                              <Link href="/labs/imc/projects/10" className="lab-proj-preview">
                                <span className="neon-dot neon-violet"></span>
                                <span className="proj-text-violet">Signal Processing</span>
                              </Link>
                              <Link href="/labs/imc3/projects/12" className="lab-proj-preview">
                                <span className="neon-dot neon-active"></span>
                                <span className="proj-text-green">Healthcare Systems</span>
                              </Link>
                              <Link href="/labs/imc/projects/5" className="lab-proj-preview">
                                <span className="neon-dot neon-blue"></span>
                                <span className="proj-text-blue">Crowd Tracking &amp; Anomaly Detection</span>
                              </Link>
                              <Link href="/labs/imc1/projects/6" className="lab-proj-preview">
                                <span className="neon-dot neon-rose"></span>
                                <span className="proj-text-rose">Group Interaction Monitoring</span>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link href="/labs/imc2/projects/16" className="lab-proj-preview">
                                <span className="neon-dot neon-gold"></span>
                                <span className="proj-text-gold">Medical Imaging Technology</span>
                              </Link>
                              <Link href="/labs/imc2/projects/17" className="lab-proj-preview">
                                <span className="neon-dot neon-blue"></span>
                                <span className="proj-text-blue">NeuroVision AI</span>
                              </Link>
                              <Link href="/labs/imc/projects/5" className="lab-proj-preview">
                                <span className="neon-dot neon-violet"></span>
                                <span className="proj-text-violet">Crowd Tracking &amp; Anomaly Detection</span>
                              </Link>
                              <Link href="/labs/imc/projects/3" className="lab-proj-preview">
                                <span className="neon-dot neon-rose"></span>
                                <span className="proj-text-rose">Group Interaction Monitoring</span>
                              </Link>
                              <Link href="/labs/imc2/projects/20" className="lab-proj-preview">
                                <span className="neon-dot neon-active"></span>
                                <span className="proj-text-green">Video Compression</span>
                              </Link>
                            </>
                          )}
                        </div>

                        <div className="lab-card-info">
                          <div className="lab-card-info-item">
                            <div>
                              <Link href={i === 0 ? "/labs/imc" : `/labs/imc${i}`} className="lab-readmore">
                                Ongoing Projects <i className="fas fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="row" style={{ justifyContent: "center" }}>
                {professors.length > 0 &&
                  professors.slice(3, 5).map((p: any, i: number) => (
                    <div className="col-md-4 mb-3 lab-card-wrap" key={p.id}>
                      <div className="lab-card lab-card-reveal">
                        <div className={`lab-card-accent lab-accent-${i + 4}`}></div>
                        <div className="lab-card-lab-id">IMC {i + 3}</div>
                        <div className="lab-card-photo-wrap">
                          <img
                            className="lab-card-photo"
                            src={p.photo || (i === 0 ? "/Content/images/members/prof/eKifayat.webp" : "/Content/images/members/prof/eAsif.webp")}
                            alt={p.name} loading="lazy" decoding="async" />
                          <div className="lab-card-photo-ring"></div>
                        </div>
                        <h3 className="lab-card-name lab-name-prominent">{p.name}</h3>

                        {i === 0 && (
                          <div className="lab-card-projects-preview">
                            <Link href="/labs/imc3/projects/7" className="lab-proj-preview">
                              <span className="neon-dot neon-gold"></span>
                              <span className="proj-text-gold">Biosensors Framework for Fall Detection</span>
                            </Link>
                            <Link href="/labs/imc3/projects/12" className="lab-proj-preview">
                              <span className="neon-dot neon-blue"></span>
                              <span className="proj-text-blue">IoT &amp; Cloud-Based RGB+D Telerehabilitation</span>
                            </Link>
                            <Link href="/labs/imc2/projects/18" className="lab-proj-preview">
                              <span className="neon-dot neon-violet"></span>
                              <span className="proj-text-violet">Wearable Sensors &amp; Signal Processing</span>
                            </Link>
                          </div>
                        )}
                        {i === 1 && (
                          <div className="lab-card-projects-preview">
                            <Link href="/labs/imc4/projects/13" className="lab-proj-preview">
                              <span className="neon-dot neon-gold"></span>
                              <span className="proj-text-gold">Intelligent Human Action Recognition for UAV/Drone</span>
                            </Link>
                            <Link href="/labs/imc/projects/11" className="lab-proj-preview">
                              <span className="neon-dot neon-blue"></span>
                              <span className="proj-text-blue">Vehicle Detection &amp; Tracking in UAV Imagery</span>
                            </Link>
                            <Link href="/labs/imc4/projects/21" className="lab-proj-preview">
                              <span className="neon-dot neon-violet"></span>
                              <span className="proj-text-violet">Drone &amp; Aerial Capturing for Disaster Response</span>
                            </Link>
                            <Link href="/labs/imc4/projects/22" className="lab-proj-preview">
                              <span className="neon-dot neon-rose"></span>
                              <span className="proj-text-rose">Human Activity Recognition from Depth Video</span>
                            </Link>
                          </div>
                        )}

                        <div className="lab-card-info">
                          <div className="lab-card-info-item">
                            <div>
                              <Link href={`/labs/imc${i + 3}`} className="lab-readmore">
                                Ongoing Projects <i className="fas fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="col-md-4 mb-3 lab-card-wrap">
                  <div className="lab-card lab-card-reveal">
                    <div className="lab-card-accent lab-accent-6"></div>
                    <div className="lab-card-lab-id">IMC 5</div>
                    <div className="lab-card-photo-wrap">
                      <img
                        className="lab-card-photo"
                        src="/Content/images/members/prof/amir-nadeem.webp"
                        alt="Aamir Nadeem" loading="lazy" decoding="async" />
                      <div className="lab-card-photo-ring"></div>
                    </div>
                    <h3 className="lab-card-name lab-name-prominent">Aamir Nadeem</h3>

                    <div className="lab-card-projects-preview">
                      <Link href="/labs/imc5/projects/12" className="lab-proj-preview">
                        <span className="neon-dot neon-gold"></span>
                        <span className="proj-text-gold">IoT & Cloud-Based RGB+D Telerehabilitation</span>
                      </Link>
                      <Link href="/labs/imc5/projects/13" className="lab-proj-preview">
                        <span className="neon-dot neon-blue"></span>
                        <span className="proj-text-blue">Intelligent Human Action Recognition for UAV/Drone</span>
                      </Link>
                      <Link href="/labs/imc5/projects/16" className="lab-proj-preview">
                        <span className="neon-dot neon-violet"></span>
                        <span className="proj-text-violet">Multi-Modal Feature Fusion for Myocardial Infarction</span>
                      </Link>
                    </div>

                    <div className="lab-card-info">
                      <div className="lab-card-info-item">
                        <div>
                          <Link href="/labs/imc5" className="lab-readmore">
                            Ongoing Projects <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impactSection" style={{ padding: "4px 0", position: "relative" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 4 }}>
              <h2 className="vm-title">Research Impact</h2>
            </div>

            <div className="golden-box">
              <div className="row" id="scholarCards">
                <div className="col-md-4 mb-4 scholar-col">
                  <div className="scholar-card scholar-reveal">
                    <div className="scholar-card-accent sc-accent-1"></div>
                    <div className="lab-card-lab-id">IMC</div>
                    <h3 className="scholar-name" style={{ marginTop: 4 }}>
                      Professor Dr. Hafiz Ahmad Jalal
                    </h3>

                    <div className="scholar-stats-grid">
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 1)?.citations.toLocaleString()}
                        </span>
                        <span className="scholar-stat-label">Citations</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 1)?.hIndex}
                        </span>
                        <span className="scholar-stat-label">h-index</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 1)?.i10Index}
                        </span>
                        <span className="scholar-stat-label">i10-index</span>
                      </div>
                    </div>

                    <div className="scholar-extra-grid">
                      <div className="scholar-extra-item">
                        <i className="fas fa-book-open"></i>
                        <span className="scholar-extra-value">739+</span>
                        <span className="scholar-extra-label">Publications</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-project-diagram"></i>
                        <span className="scholar-extra-value">15</span>
                        <span className="scholar-extra-label">Ongoing Projects</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-quote-right"></i>
                        <span className="scholar-extra-value">7,200+</span>
                        <span className="scholar-extra-label">Since 2021</span>
                      </div>
                    </div>

                    <a
                      href="https://scholar.google.com/citations?user=BIRC9XEAAAAJ&hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="scholar-btn"
                    >
                      <i className="fab fa-google"></i> View Google Scholar Profile
                    </a>
                  </div>
                </div>

                <div className="col-md-4 mb-4 scholar-col">
                  <div className="scholar-card scholar-reveal">
                    <div className="scholar-card-accent sc-accent-3"></div>
                    <div className="lab-card-lab-id">IMC 1</div>
                    <h3 className="scholar-name" style={{ marginTop: 4 }}>
                      Dr. Adnan Ahmad Rafique
                    </h3>

                    <div className="scholar-stats-grid">
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 3)?.citations.toLocaleString()}
                        </span>
                        <span className="scholar-stat-label">Citations</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 3)?.hIndex}
                        </span>
                        <span className="scholar-stat-label">h-index</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 3)?.i10Index}
                        </span>
                        <span className="scholar-stat-label">i10-index</span>
                      </div>
                    </div>

                    <div className="scholar-extra-grid">
                      <div className="scholar-extra-item">
                        <i className="fas fa-book-open"></i>
                        <span className="scholar-extra-value">40</span>
                        <span className="scholar-extra-label">Publications</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-project-diagram"></i>
                        <span className="scholar-extra-value">2</span>
                        <span className="scholar-extra-label">Ongoing Projects</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-quote-right"></i>
                        <span className="scholar-extra-value">150+</span>
                        <span className="scholar-extra-label">Since 2021</span>
                      </div>
                    </div>

                    <a
                      href="https://scholar.google.com.pk/citations?user=o5UkbAQAAAAJ&hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="scholar-btn"
                    >
                      <i className="fab fa-google"></i> View Google Scholar Profile
                    </a>
                  </div>
                </div>

                <div className="col-md-4 mb-4 scholar-col">
                  <div className="scholar-card scholar-reveal">
                    <div className="scholar-card-accent sc-accent-2"></div>
                    <div className="lab-card-lab-id">IMC 2</div>
                    <h3 className="scholar-name" style={{ marginTop: 4 }}>
                      Dr. Shaheryar Najam
                    </h3>

                    <div className="scholar-stats-grid">
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 2)?.citations.toLocaleString()}
                        </span>
                        <span className="scholar-stat-label">Citations</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 2)?.hIndex}
                        </span>
                        <span className="scholar-stat-label">h-index</span>
                      </div>
                      <div className="scholar-stat-box">
                        <span className="scholar-stat-number">
                          {allScholarStats.find(s => s.id === 2)?.i10Index}
                        </span>
                        <span className="scholar-stat-label">i10-index</span>
                      </div>
                    </div>

                    <div className="scholar-extra-grid">
                      <div className="scholar-extra-item">
                        <i className="fas fa-book-open"></i>
                        <span className="scholar-extra-value">76</span>
                        <span className="scholar-extra-label">Publications</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-project-diagram"></i>
                        <span className="scholar-extra-value">7</span>
                        <span className="scholar-extra-label">Ongoing Projects</span>
                      </div>
                      <div className="scholar-extra-item">
                        <i className="fas fa-quote-right"></i>
                        <span className="scholar-extra-value">1,800+</span>
                        <span className="scholar-extra-label">Since 2021</span>
                      </div>
                    </div>

                    <a
                      href="https://scholar.google.com/citations?hl=en&user=knkMZhQAAAAJ&view_op=list_works&sortby=pubdate"
                      target="_blank"
                      rel="noreferrer"
                      className="scholar-btn"
                    >
                      <i className="fab fa-google"></i> View Google Scholar Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="publications-section-modern" id="latestPubsSection">
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 className="section-title">Latest Publications</h2>
              <div className="title-underline"></div>
            </div>

            <div className="publications-grid">
              {latestPubs.length === 0 ? (
                <p className="text-center text-grey" style={{ padding: "20px 0" }}>
                  Loading publications...
                </p>
              ) : (
                latestPubs.map((p: any, i: number) => (
                  <div className="publication-card" key={p.id ?? i}>
                    <div className="publication-content">
                      <h3 className="publication-title">
                        <Link href="/publications">{p.title}</Link>
                      </h3>
                      <div className="publication-meta">
                        {p.venue && <span className="journal">{p.venue.split("|")[0].trim()}</span>}
                        {p.venue && <span className="separator">&bull;</span>}
                        {p.year && <span className="date">{p.year}</span>}
                      </div>
                      <div className="publication-link">
                        <a href={p.link || "#"} target="_blank" rel="noreferrer">
                          <i className="fas fa-external-link-alt"></i> View Paper
                        </a>
                      </div>
                      <div className="publication-authors">{p.authors ? `${p.authors.split(",")[0]}, et al.` : "IMC Research Team"}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="view-all-wrapper">
              <Link href="/publications" className="view-all-btn">
                View All Publications <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <div className="row enrolled-students-section">
          <div className="col-12">
            <h2 className="vm-title text-center enrolled-title">
              <i className="fas fa-user-graduate enrolled-icon"></i> Currently Enrolled Students
            </h2>
            <div className="row enrolled-row">
              <div className="col-md-4 enrolled-col">
                <div className="enrolled-card enrolled-card-phd">
                  <div className="enrolled-card-header">
                    <span className="enrolled-badge enrolled-badge-phd">
                      <i className="fas fa-graduation-cap"></i> PhD
                    </span>
                    <span className="enrolled-count">8 Students</span>
                  </div>
                  <div className="enrolled-list">
                    <div className="enrolled-item">
                      <span className="enrolled-num">1</span> Ayesha Naseer{" "}
                      <span className="enrolled-sem">
                        5<sup>th</sup> Sem
                      </span>
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">2</span> Muhammad Waqas Ahmed{" "}
                      <span className="enrolled-sem">
                        4<sup>th</sup> Sem
                      </span>
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">3</span> Aymen Siddique{" "}
                      <span className="enrolled-sem">
                        2<sup>nd</sup> Sem
                      </span>
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">4</span> Mehpara Saghir
                    </div>
                  </div>
                  <div className="enrolled-extra collapse" id="phdExtra">
                    <div className="enrolled-item">
                      <span className="enrolled-num">5</span> Anam Naseer
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">6</span> Zaryab Shaker
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">7</span> Muhammad Adeel Ahmed Tahir
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">8</span> Fakhra Nazar
                    </div>
                  </div>
                  <button
                    type="button"
                    className="enrolled-readmore"
                    data-toggle="collapse"
                    data-target="#phdExtra"
                    onClick={(e) => {
                      const t = e.currentTarget;
                      t.textContent = t.textContent.includes("Show More") ? "Show Less" : "Show More";
                    }}
                  >
                    <i className="fas fa-chevron-down"></i> Show More
                  </button>
                </div>
              </div>
              <div className="col-md-4 enrolled-col">
                <div className="enrolled-card enrolled-card-ms">
                  <div className="enrolled-card-header">
                    <span className="enrolled-badge enrolled-badge-ms">
                      <i className="fas fa-user-graduate"></i> MS
                    </span>
                    <span className="enrolled-count">13 Students</span>
                  </div>
                  <div className="enrolled-list">
                    <div className="enrolled-item">
                      <span className="enrolled-num">1</span> Rehana Bibi
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">2</span> Ishrat Zahra
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">3</span> Aimen Sana Khan
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">4</span> Junaid Javed
                    </div>
                  </div>
                  <div className="enrolled-extra collapse" id="msExtra">
                    <div className="enrolled-item">
                      <span className="enrolled-num">5</span> Muhammad Hanzla
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">6</span> Muhammad Hanzla
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">7</span> Aleena Kamal
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">8</span> Harris Shahid
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">9</span> Shahzaib Ali
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">10</span> Izda Bashir
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">11</span> Ayesha Qaiser Hashmi
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">12</span> Zarnab Kausar
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">13</span> Munazza Aziz
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">14</span> Mahnoor Iftikhar
                    </div>
                  </div>
                  <button
                    type="button"
                    className="enrolled-readmore"
                    data-toggle="collapse"
                    data-target="#msExtra"
                    onClick={(e) => {
                      const t = e.currentTarget;
                      t.textContent = t.textContent.includes("Show More") ? "Show Less" : "Show More";
                    }}
                  >
                    <i className="fas fa-chevron-down"></i> Show More
                  </button>
                </div>
              </div>
              <div className="col-md-4 enrolled-col">
                <div className="enrolled-card enrolled-card-ug">
                  <div className="enrolled-card-header">
                    <span className="enrolled-badge enrolled-badge-ug">
                      <i className="fas fa-user"></i> Undergraduate
                    </span>
                    <span className="enrolled-count">10 Students</span>
                  </div>
                  <div className="enrolled-list">
                    <div className="enrolled-item">
                      <span className="enrolled-num">1</span> Zaara Shahid
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">2</span> Aaman Shahid
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">3</span> Affia Ahmed
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">4</span> Haleema Rehman
                    </div>
                  </div>
                  <div className="enrolled-extra collapse" id="ugExtra">
                    <div className="enrolled-item">
                      <span className="enrolled-num">5</span> Abdullah Iftikhar
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">6</span> Ghulam Sarwar
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">7</span> Zainab Nasir
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">8</span> Fatima
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">9</span> Arandas Sheikh
                    </div>
                    <div className="enrolled-item">
                      <span className="enrolled-num">10</span> Esha
                    </div>
                  </div>
                  <button
                    type="button"
                    className="enrolled-readmore"
                    data-toggle="collapse"
                    data-target="#ugExtra"
                    onClick={(e) => {
                      const t = e.currentTarget;
                      t.textContent = t.textContent.includes("Show More") ? "Show Less" : "Show More";
                    }}
                  >
                    <i className="fas fa-chevron-down"></i> Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="newsModal" tabIndex={-1} role="dialog" aria-labelledby="newsModalLabel" aria-hidden="true" style={{ zIndex: 99999 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content text-dark"
            style={{ backgroundColor: "#ffffff", border: "2px solid #01153e", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
          >
            <div
              className="modal-header"
              style={{
                borderBottom: "1px solid #e9ecef",
                backgroundColor: "#f8f9fa",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 className="modal-title font-weight-bold m-0" id="newsModalLabel" style={{ color: "#01153e" }}>
                <i className="fas fa-bell mr-2"></i>News &amp; Announcements
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  opacity: 0.8,
                  outline: "none",
                  border: "none",
                  background: "#e9ecef",
                  fontSize: "1.1rem",
                  color: "#01153e",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <div className="modal-body" style={{ maxHeight: 380, overflowY: "auto", paddingBottom: 30 }}>
                <h6 className="font-weight-bold mb-3" style={{ color: "#01153e", borderLeft: "3px solid #01153e", paddingLeft: 8 }}>
                  Latest News
                </h6>
                <ul className="list-unstyled mb-4" style={{ lineHeight: 1.6 }}>
                  {newsItems.slice(0, 3).map((n: any) => (
                    <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #e9ecef" }} key={n.id}>
                      <span
                        className="d-inline-block small font-weight-bold mb-2"
                        style={{ backgroundColor: "#fef3e2", color: "#a86e1a", padding: "2px 8px", borderRadius: 4, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        {n.badge_label || n.category || "News"}
                      </span>
                      <p className="mb-2">{n.excerpt || n.title}</p>
                      <div>
                        <Link
                          href="/news"
                          style={{ color: "#01153e", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
                        >
                          Read details &rarr;
                        </Link>
                      </div>
                    </li>
                  ))}
                  {newsItems.length === 0 && (
                    <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #e9ecef" }}>
                      <p className="mb-2">IMC Lab achieved massive success at 2nd IEEE Karachi HTC 2026 with 19 peer-reviewed papers accepted.</p>
                      <div>
                        <Link href="/news" style={{ color: "#01153e", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}>
                          Read details &rarr;
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>

                <h6 className="font-weight-bold mb-3" style={{ color: "#01153e", borderLeft: "3px solid #01153e", paddingLeft: 8 }}>
                  Announcements
                </h6>
                <ul className="list-unstyled mb-0" style={{ lineHeight: 1.6 }}>
                  {newsItems.slice(3).map((n: any) => (
                    <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #e9ecef" }} key={n.id}>
                      <span
                        className="d-inline-block small font-weight-bold mb-2"
                        style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "2px 8px", borderRadius: 4, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        {n.badge_label || n.category || "Announcement"}
                      </span>
                      <p className="mb-2">{n.excerpt || n.title}</p>
                      <div>
                        <Link
                          href="/news"
                          style={{ color: "#01153e", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
                        >
                          Read details &rarr;
                        </Link>
                      </div>
                    </li>
                  ))}
                  {newsItems.length === 0 && (
                    <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #e9ecef" }}>
                      <span
                        className="d-inline-block small font-weight-bold mb-2"
                        style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "2px 8px", borderRadius: 4, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        Admissions / Openings
                      </span>
                      <p className="mb-2">
                        Positions for MS &amp; Ph.D. students are open in the Intelligent Media Center. Please contact the director or
                        visit the office.
                      </p>
                      <div>
                        <Link
                          href="/join-us"
                          style={{ color: "#01153e", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
                        >
                          Join IMC Team &rarr;
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <div
                className="news-scroll-fade"
                style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 35, background: "linear-gradient(to top, rgba(255,255,255,0.98), transparent)", pointerEvents: "none", zIndex: 10 }}
              ></div>
            </div>
            <div className="modal-footer" style={{ borderTop: "1px solid #e9ecef", justifyContent: "center" }}>
              <button
                type="button"
                className="btn text-white btn-sm"
                data-dismiss="modal"
                style={{ backgroundColor: "#01153e", borderRadius: 20, padding: "6px 22px", fontWeight: "bold", border: "none", transition: "background-color 0.2s" }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal" tabIndex={-1} role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style={{ zIndex: 99999 }}>
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div
            className="modal-content text-dark"
            style={{ backgroundColor: "#ffffff", border: "2px solid #01153e", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.15)", overflow: "hidden" }}
          >
            <div className="modal-header" style={{ borderBottom: "1px solid #e9ecef", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h5 className="modal-title font-weight-bold m-0" id="galleryModalLabel" style={{ color: "#01153e", display: "flex", alignItems: "center" }}>
                <img
                  src="/Content/images/site-logo/logo.webp"
                  alt="IMC Logo"
                  style={{ width: 24, height: 24, borderRadius: "50%", background: "#ffffff", padding: 1, marginRight: 10, verticalAlign: "middle", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} loading="lazy" decoding="async" />
                Intelligent Media Center Gallery
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  opacity: 0.8,
                  outline: "none",
                  border: "none",
                  background: "#e9ecef",
                  fontSize: "1.1rem",
                  color: "#01153e",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div id="galleryCarousel" className="carousel slide" data-ride="carousel" data-interval={3000}>
                <ol className="carousel-indicators">
                  <li data-target="#galleryCarousel" data-slide-to={0} className="active"></li>
                  <li data-target="#galleryCarousel" data-slide-to={1}></li>
                  <li data-target="#galleryCarousel" data-slide-to={2}></li>
                  <li data-target="#galleryCarousel" data-slide-to={3}></li>
                  <li data-target="#galleryCarousel" data-slide-to={4}></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100 gallery-carousel-img" src="/Content/images/slider/team.webp" alt="IMC Team" loading="lazy" decoding="async" />
                    <div className="carousel-caption d-none d-md-block" style={{ background: "rgba(1, 21, 62, 0.85)", borderRadius: 6, padding: "10px 15px", bottom: 25 }}>
                      <h5 style={{ color: "#ffd700", fontWeight: "bold", marginBottom: 5 }}>IMC Research Team</h5>
                      <p className="small m-0">Our dedicated team of researchers working on core Artificial Intelligence and Computer Vision.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 gallery-carousel-img" src="/Content/images/slider/tour1.webp" alt="Ayubia Tour" loading="lazy" decoding="async" />
                    <div className="carousel-caption d-none d-md-block" style={{ background: "rgba(1, 21, 62, 0.85)", borderRadius: 6, padding: "10px 15px", bottom: 25 }}>
                      <h5 style={{ color: "#ffd700", fontWeight: "bold", marginBottom: 5 }}>Ayubia Group Tour</h5>
                      <p className="small m-0">Fostering collaboration and team bonding through recreational activities and trips.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 gallery-carousel-img" src="/Content/images/slider/Conf.webp" alt="IEEE Conference" loading="lazy" decoding="async" />
                    <div className="carousel-caption d-none d-md-block" style={{ background: "rgba(1, 21, 62, 0.85)", borderRadius: 6, padding: "10px 15px", bottom: 25 }}>
                      <h5 style={{ color: "#ffd700", fontWeight: "bold", marginBottom: 5 }}>IEEE Conference &amp; Awards</h5>
                      <p className="small m-0">Usman presenting and winning the Best Paper Award at the MCS-NUST comTech Conference.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 gallery-carousel-img" src="/Content/images/slider/Air_University2.webp" alt="Air University" loading="lazy" decoding="async" />
                    <div className="carousel-caption d-none d-md-block" style={{ background: "rgba(1, 21, 62, 0.85)", borderRadius: 6, padding: "10px 15px", bottom: 25 }}>
                      <h5 style={{ color: "#ffd700", fontWeight: "bold", marginBottom: 5 }}>Air University Campus</h5>
                      <p className="small m-0">The state-of-the-art campus housing the Intelligent Media Center lab space.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 gallery-carousel-img" src="/Content/images/news/jalal-ranking.webp" alt="Prof. Jalal Ranked 3rd" loading="lazy" decoding="async" />
                    <div className="carousel-caption d-none d-md-block" style={{ background: "rgba(1, 21, 62, 0.85)", borderRadius: 6, padding: "10px 15px", bottom: 25 }}>
                      <h5 style={{ color: "#ffd700", fontWeight: "bold", marginBottom: 5 }}>Prof. Dr. Ahmad Jalal Ranked 3rd in Pakistan</h5>
                      <p className="small m-0">
                        Recognized among Pakistan&apos;s leading Computer Science scientists in national research rankings.
                      </p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev" style={{ width: "8%" }}>
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next" style={{ width: "8%" }}>
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-bottom-widgets">
        <div
          className="gallery-card-widget"
          onClick={() => (window as any).$("#galleryModal").modal("show")}
          role="button"
          aria-label="Open Gallery Slideshow"
        >
          <div className="gallery-preview-container">
            <img className="gallery-preview-img" src="/Content/images/slider/team.webp" alt="Gallery Preview" style={{ opacity: 1 }} loading="lazy" decoding="async" />
            <img className="gallery-preview-img" src="/Content/images/slider/tour1.webp" alt="Gallery Preview" loading="lazy" decoding="async" />
            <img className="gallery-preview-img" src="/Content/images/slider/Conf.webp" alt="Gallery Preview" loading="lazy" decoding="async" />
            <img className="gallery-preview-img" src="/Content/images/slider/Air_University2.webp" alt="Gallery Preview" loading="lazy" decoding="async" />
            <div className="gallery-card-overlay">
              <img
                src="/Content/images/site-logo/logo.webp"
                alt="IMC Logo"
                style={{ width: 26, height: 26, borderRadius: "50%", background: "#ffffff", padding: 2, marginBottom: 4 }} loading="lazy" decoding="async" />
              <span>Events & News</span>
            </div>
          </div>
        </div>
        <div className="news-chat-widget" style={{ zIndex: "1050 !important" }}>
          <button
            type="button"
            className="news-chat-btn"
            onClick={() => (window as any).$("#newsModal").modal("show")}
            aria-label="Open News and Announcements"
          >
            <i className="fas fa-bell"></i>
            <div className="btn-ticker-container">
              <ul className="btn-ticker-list">
                {newsItems.length > 0 ? (
                  newsItems.map((n: any) => <li key={n.id}>{n.title}</li>)
                ) : (
                  <>
                    <li>IMC Lab achieves massive success with 19 papers at 2nd IEEE Karachi HTC 2026</li>
                    <li>CrowdVoxel-Net published in Egyptian Informatics Journal</li>
                    <li>Prof. Dr. Ahmad Jalal ranked 3rd among Pakistan&apos;s leading CS scientists</li>
                  </>
                )}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

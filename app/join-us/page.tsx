"use client";

import { useState } from "react";
import StudentForm from "@/components/join-us/StudentForm";
import CollaboratorForm from "@/components/join-us/CollaboratorForm";

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState<"student" | "collaborator">("student");

  return (
    <>
      <div className="container pageheader-container join-pageheader">
        <h1 className="join-page-title">Join Us</h1>
        <div className="join-header-line"></div>
      </div>
      <div className="container page-content">
        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <div className="join-tabs">
              <button
                className={`join-tab-btn ${activeTab === "student" ? "join-tab-active" : ""}`}
                onClick={() => setActiveTab("student")}
              >
                <i className="fas fa-graduation-cap" /> Join as MS/PhD Student
              </button>
              <button
                className={`join-tab-btn ${activeTab === "collaborator" ? "join-tab-active" : ""}`}
                onClick={() => setActiveTab("collaborator")}
              >
                <i className="fas fa-handshake" /> Join as Collaborator
              </button>
            </div>

            <div className="join-form-container">
              {activeTab === "student" ? (
                <div className="join-form-section">
                  <h3 className="join-form-title">
                    <i className="fas fa-graduation-cap" /> MS/PhD Student Application
                  </h3>
                  <p className="join-form-subtitle">
                    Applications are open for MS and PhD positions in Artificial Intelligence, Computer Vision,
                    Wearable Sensors, and related areas.
                  </p>
                  <StudentForm />
                </div>
              ) : (
                <div className="join-form-section">
                  <h3 className="join-form-title">
                    <i className="fas fa-handshake" /> Collaborator Application
                  </h3>
                  <p className="join-form-subtitle">
                    Interested in collaborating with IMC on research projects? Fill out the form and our team will
                    reach out to you.
                  </p>
                  <CollaboratorForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerLineGrow {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes trackingIn {
          from { letter-spacing: -8px; opacity: 0; }
          to { letter-spacing: 1px; opacity: 1; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(1,21,62,0.1); }
          50% { text-shadow: 0 0 20px rgba(1,21,62,0.25), 0 0 40px rgba(197,165,90,0.15); }
        }
        .join-pageheader { text-align: center !important; border-bottom: none !important; }
        .join-page-title {
          font-size: 2.8rem; font-weight: 800; letter-spacing: 1px; margin: 0 0 12px 0; line-height: 1.2; color: #01153e;
          animation: trackingIn 0.9s ease both, textGlow 3s ease-in-out 1s infinite;
        }
        .join-header-line {
          width: 80px; height: 3px;
          background: #c5a55a;
          border-radius: 4px; margin: 0 auto;
          animation: headerLineGrow 0.8s ease 0.3s both;
        }

        .join-tabs {
          display: flex; justify-content: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;
        }
        .join-tab-btn {
          padding: 12px 28px; border: 2px solid #e6ecf5; border-radius: 12px;
          background: #fff; color: #01153e; font-size: 1rem; font-weight: 600;
          cursor: pointer; transition: all 300ms ease; display: inline-flex; align-items: center; gap: 8px;
        }
        .join-tab-btn:hover {
          border-color: #01153e; box-shadow: 0 4px 14px rgba(1,21,62,0.1);
        }
        .join-tab-active {
          background: linear-gradient(135deg, #01153e 0%, #1a3a6e 100%);
          color: #fff !important; border-color: #01153e;
          box-shadow: 0 6px 20px rgba(1,21,62,0.25);
        }

        .join-form-container {
          animation: fadeInUp 0.5s ease both;
        }
        .join-form-section {
          background: #fff; border: 1px solid #e6ecf5; border-radius: 16px;
          padding: 36px 32px; box-shadow: 0 6px 20px rgba(15,30,60,0.07);
        }
        .join-form-title {
          font-size: 1.4rem; font-weight: 700; color: #01153e; margin: 0 0 8px 0;
          display: flex; align-items: center; gap: 10px;
        }
        .join-form-title i { color: #c5a55a; }
        .join-form-subtitle {
          color: #5a6478; font-size: 0.9rem; line-height: 1.6; margin: 0 0 24px 0;
        }

        .join-native-form { display: flex; flex-direction: column; gap: 16px; }
        .join-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 575px) { .join-form-row { grid-template-columns: 1fr; } }
        .join-form-group { display: flex; flex-direction: column; gap: 4px; }
        .join-form-group label {
          font-size: 0.85rem; font-weight: 600; color: #01153e;
        }
        .join-required { color: #ef4444; }
        .join-form-group input,
        .join-form-group select,
        .join-form-group textarea {
          padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px;
          font-size: 0.9rem; font-family: inherit; transition: border-color 200ms ease;
          background: #fafbfc;
        }
        .join-form-group input:focus,
        .join-form-group select:focus,
        .join-form-group textarea:focus {
          outline: none; border-color: #01153e; box-shadow: 0 0 0 3px rgba(1,21,62,0.08);
          background: #fff;
        }
        .join-form-group textarea { resize: vertical; }

        .join-form-btn {
          padding: 12px 28px; border: none; border-radius: 10px;
          background: linear-gradient(135deg, #01153e 0%, #1a3a6e 100%);
          color: #fff; font-size: 0.95rem; font-weight: 600; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px; justify-content: center;
          transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 14px rgba(1,21,62,0.30); align-self: flex-start;
        }
        .join-form-btn:hover:not(:disabled) {
          background: #c5a55a; color: #01153e;
          transform: scale(1.03); box-shadow: 0 6px 20px rgba(197,165,90,0.40);
        }
        .join-form-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .join-form-success {
          text-align: center; padding: 40px 20px;
        }
        .join-form-success h4 { color: #01153e; font-weight: 700; margin: 0 0 8px 0; }
        .join-form-success p { color: #5a6478; font-size: 0.9rem; }

        .join-form-error {
          padding: 10px 16px; background: #fef2f2; border: 1px solid #fecaca;
          border-radius: 8px; color: #dc2626; font-size: 0.85rem;
          display: flex; align-items: center; gap: 8px;
        }
      `}</style>
    </>
  );
}

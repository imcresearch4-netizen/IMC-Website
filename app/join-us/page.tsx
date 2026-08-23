import { SITE } from "@/config/site";

export default function JoinUsPage() {
  return (
    <>
      <div className="container pageheader-container join-pageheader">
        <h1 className="join-page-title">Join Us</h1>
        <div className="join-header-line"></div>
      </div>
      <div className="container page-content">
        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <div className="text-center mb-5"></div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <a
                  href={SITE.join.student}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="join-option-card wow-card">
                    <i className="fas fa-graduation-cap card-icon"></i>
                    <h4>Join as MS/PhD Student</h4>
                    <p>
                      Applications are open for MS and PhD positions in Artificial Intelligence, Computer Vision, Wearable
                      Sensors, and related areas.
                    </p>
                    <span className="join-option-btn">
                      Apply Now <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a
                  href={SITE.join.collaborator}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="join-option-card wow-card">
                    <i className="fas fa-handshake card-icon"></i>
                    <h4>Join as Collaborator</h4>
                    <p>
                      Interested in collaborating with IMC on research projects? Fill out the form and our team will reach
                      out to you.
                    </p>
                    <span className="join-option-btn">
                      Get in Touch <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 0 0 0 rgba(1,21,62,0.3); }
          50% { box-shadow: 0 0 20px 4px rgba(1,21,62,0.15); }
          100% { box-shadow: 0 0 0 0 rgba(1,21,62,0.3); }
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
        .wow-card { animation: fadeInUp 0.7s ease both; }
        .wow-card:nth-child(1) { animation-delay: 0.5s; }
        .wow-card:nth-child(2) { animation-delay: 0.7s; }
        .join-option-card {
          background: #fff;
          border: 1px solid #e6ecf5;
          border-left: 4px solid #01153e;
          border-radius: 16px;
          padding: 36px 30px 30px;
          text-align: center;
          box-shadow: 0 6px 20px rgba(15,30,60,0.07);
          transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease;
          height: 100%; position: relative; overflow: hidden;
        }
        .join-option-card::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 4px;
          background: linear-gradient(90deg, transparent, #c5a55a, transparent);
          background-size: 200% 100%; transition: left 500ms ease;
        }
        .join-option-card:hover::before { left: 100%; }
        .join-option-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(1,21,62,0.18);
          animation: glowPulse 1.5s ease infinite;
        }
        .card-icon {
          font-size: 36px; color: #01153e; margin-bottom: 16px;
          display: block; transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .join-option-card:hover .card-icon { transform: scale(1.25) rotate(-8deg); }
        .join-option-card h4 {
          color: #01153e; font-weight: 700; font-size: 1.2rem;
          margin-bottom: 12px; transition: color 300ms ease;
        }
        .join-option-card:hover h4 {
          background: linear-gradient(135deg, #01153e, #c5a55a);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .join-option-card p {
          color: #5a6478; font-size: 0.9rem; line-height: 1.6;
          margin-bottom: 20px;
        }
        .join-option-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, #01153e 0%, #1a3a6e 100%);
          color: #fff !important; border-radius: 8px;
          font-size: 14px; font-weight: 600;
          box-shadow: 0 4px 14px rgba(1,21,62,0.30);
          transition: all 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative; overflow: hidden;
        }
        .join-option-btn i { font-size: 13px; transition: transform 350ms ease; position: relative; z-index: 1; }
        .join-option-card:hover .join-option-btn {
          background: #c5a55a;
          color: #01153e !important;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(197,165,90,0.40);
        }
        .join-option-card:hover .join-option-btn i { transform: translateX(6px); }
      `}</style>
    </>
  );
}

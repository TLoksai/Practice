import React from "react";
import "./styles/RecruitmentAndTAT.css"; // Import the CSS file



const RecruitmentAndTAT: React.FC = () => {
  return (
    <div className="recruitment-container">
      {/* Recruitment Funnel Section */}
      <div className="funnel-section">
        <div className="section-header">
          Recruitment Funnel
        </div>
        <div className="funnel-steps">
          {/* Funnel Steps */}
          <div className="funnel-step all-applicants">
            All Applicants (123)
          </div>
          <div className="funnel-step interviews">
            Interviews (45)
          </div>
          <div className="funnel-step offer">
            Offer (08)
          </div>
          <div className="funnel-step hired">
            Hired (02)
          </div>
        </div>
      </div>

      {/* TAT Section */}
      <div className="tat-section">
        <div className="section-header flex-between">
          TAT
          <select className="select-dropdown">
            <option value="Work group name">Work group name</option>
          </select>
        </div>
        <div className="tat-content">
          {/* Left Side: TAT Steps with Colored Bars */}
          <div className="tat-left">
            <ul className="tat-list">
              {[
                { text: "Apply to Screening", days: "10 Days", color: "#007bff" },
                { text: "Screening to Interview", days: "10 Days", color: "#17a2b8" },
                { text: "Endorsement to Selection", days: "1:2 Days", color: "#28a745" },
                { text: "Selection to Offer", days: "10 Days", color: "#ffc107" },
                { text: "Interview Rejection", days: "1:2", color: "#fd7e14" },
                { text: "Offer Declined Ratio", days: "1:1 Days", color: "#dc3545" },
              ].map((item, index) => (
                <li key={index} className="tat-item">
                  <div className="color-bar" style={{ backgroundColor: item.color }}></div>
                  <div className="tat-item-content">
                    <div className="tat-item-text">{item.text}</div>
                    <div className="tat-item-days">{item.days}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider Line */}
          <div className="divider"></div>

          {/* Right Side: Experience and Resume Availability */}
          <div className="tat-right">
            {/* Experience Section */}
            <div className="tat-experience">
              <div className="tat-experience-header">Experience</div>
              <div className="tat-experience-stats">
                <span>0-2 years</span>
                <span>15%</span>
                <span>2-4 years</span>
                <span>25%</span>
                <span>4-6 years</span>
                <span>30%</span>
                <span>6-8 years</span>
              </div>
              <div className="tat-progress-bar">
                <div className="progress-fill" style={{ width: "25%" }}></div>
              </div>
            </div>

            {/* Resume Availability Section */}
            <div className="tat-resume-availability">
              <div className="tat-resume-header">Resume Availability</div>
              <div className="tat-resume-stats">
                <span>Active Resumes</span>
                <span>Inactive Resumes</span>
              </div>
              <div className="tat-progress-bar">
                <div className="progress-fill" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentAndTAT;

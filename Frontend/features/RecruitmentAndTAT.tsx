import React from "react";

const RecruitmentAndTAT: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Two equal columns
        gap: "10px", // Reduced the gap between boxes
      }}
    >
      {/* Recruitment Funnel Section */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#555555",
            backgroundColor: "#f8f9fa",
            padding: "10px 15px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          Recruitment Funnel
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Funnel Steps */}
          <div
            style={{
              width: "100%",
              height: "60px",
              background: "#d3d3d3",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: "#333",
            }}
          >
            All Applicants (123)
          </div>
          <div
            style={{
              width: "85%",
              height: "60px",
              background: "#cccccc",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: "#333",
              marginTop: "-15px",
            }}
          >
            Interviews (45)
          </div>
          <div
            style={{
              width: "70%",
              height: "60px",
              background: "#b3b3b3",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: "#333",
              marginTop: "-15px",
            }}
          >
            Offer (08)
          </div>
          <div
            style={{
              width: "55%",
              height: "60px",
              background: "#999999",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: "#333",
              marginTop: "-15px",
            }}
          >
            Hired (02)
          </div>
        </div>
      </div>

      {/* TAT Section */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#555555",
            backgroundColor: "#f8f9fa",
            padding: "10px 15px",
            borderBottom: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          TAT
          <select
            style={{
              border: "1px solid #d9d9d9",
              padding: "5px",
              fontSize: "14px",
              color: "#555555",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
            }}
          >
            <option value="Work group name">Work group name</option>
          </select>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr", // Left, Divider, Right
            padding: "20px",
          }}
        >
          {/* Left Side: TAT Steps with Colored Bars */}
          <div>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Apply to Screening", days: "10 Days", color: "#007bff" },
                { text: "Screening to Interview", days: "10 Days", color: "#17a2b8" },
                { text: "Endorsement to Selection", days: "1:2 Days", color: "#28a745" },
                { text: "Selection to Offer", days: "10 Days", color: "#ffc107" },
                { text: "Interview Rejection", days: "1:2", color: "#fd7e14" },
                { text: "Offer Declined Ratio", days: "1:1 Days", color: "#dc3545" },
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "40px",
                      backgroundColor: item.color,
                      marginRight: "10px",
                    }}
                  ></div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {item.text}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      {item.days}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider Line */}
          <div
            style={{
              background: "#d9d9d9",
              width: "1px",
              height: "100%",
            }}
          ></div>

          {/* Right Side: Experience and Resume Availability */}
          <div>
            {/* Experience Section */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#555555",
                }}
              >
                Experience
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                <span>0-2 years</span>
                <span>15%</span>
                <span>2-4 years</span>
                <span>25%</span>
                <span>4-6 years</span>
                <span>30%</span>
                <span>6-8 years</span>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "8px",
                  background: "#e0e0e0",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "25%",
                    background: "#007bff",
                  }}
                ></div>
              </div>
            </div>

            {/* Resume Availability Section */}
            <div>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#555555",
                }}
              >
                Resume Availability
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                <span>Active Resumes</span>
                <span>Inactive Resumes</span>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "8px",
                  background: "#e0e0e0",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "60%",
                    background: "#28a745",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentAndTAT;

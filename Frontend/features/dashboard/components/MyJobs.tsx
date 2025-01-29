import React, { useState } from "react";

const MyJobs: React.FC = () => {
  const jobData = {
    Bangalore: [
      { title: "Lead User Experience Designer", location: "Bangalore", positions: 2 },
      { title: "HR Manager", location: "Bangalore", positions: 3 },
      { title: "Business Analyst", location: "Bangalore", positions: 4 },
    ],
  };

  const [selectedLocation, setSelectedLocation] = useState("Bangalore");
  const jobs = jobData[selectedLocation] || [];

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #d9d9d9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontWeight: "600",
          fontSize: "16px",
          color: "#555555",
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderBottom: "1px solid #d9d9d9",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>My Jobs</span>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            padding: "5px",
            fontSize: "14px",
          }}
        >
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
      <ul
        style={{
          listStyleType: "none",
          margin: "0",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        {jobs.map((job, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
              padding: "10px 0",
            }}
          >
            <div>
              <span style={{ fontWeight: "600", fontSize: "14px" }}>{job.title}</span>
              <br />
              <span style={{ fontSize: "12px", color: "#888888" }}>{job.location}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                {job.positions < 10 ? `0${job.positions}` : job.positions}
              </div>
              <span style={{ fontSize: "12px", color: "#888888" }}>Positions Left</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyJobs;

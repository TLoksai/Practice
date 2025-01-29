import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CombinedComponent: React.FC = () => {
  // Data for the By Source chart
  const data = {
    labels: ["Career Page", "LinkedIn", "Naukri", "Referral", "Indeed", "Times Jobs"],
    datasets: [
      {
        data: [25, 20, 15, 10, 15, 15],
        backgroundColor: ["#6c757d", "#adb5bd", "#ced4da", "#dee2e6", "#e9ecef", "#f8f9fa"],
        hoverBackgroundColor: ["#5a6268", "#a1a5ad", "#c2c7cc", "#d6d9de", "#e1e5e8", "#f1f3f5"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Job Data
  const jobData = {
    Bangalore: [
      { title: "Lead User Experience Designer", location: "Bangalore", positions: 2 },
      { title: "HR Manager", location: "Bangalore", positions: 3 },
      { title: "Business Analyst", location: "Bangalore", positions: 4 },
    ],
    Mumbai: [
      { title: "Software Engineer", location: "Mumbai", positions: 1 },
      { title: "Data Scientist", location: "Mumbai", positions: 2 },
      { title: "Marketing Manager", location: "Mumbai", positions: 3 },
    ],
  };

  const [selectedLocation, setSelectedLocation] = useState("Bangalore");
  const jobs = jobData[selectedLocation] || [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1.5fr", // Left box larger, right box smaller
        gap: "10px", // Reduced gap
      }}
    >
      {/* By Source Section */}
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
            backgroundColor: "#f8f9fa", // Shaded header background
            padding: "10px",
            borderBottom: "1px solid #d9d9d9",
          }}
        >
          By Source
        </div>
        <div style={{ flexGrow: 1, position: "relative", padding: "10px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* My Jobs Section */}
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
            <option value="Mumbai">Mumbai</option>
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
                borderBottom: "1px solid #f0f0f0",
                padding: "10px 0",
                alignItems: "center",
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
    </div>
  );
};

export default CombinedComponent;

import React from "react";

interface OverviewProps {
  stats: { label: string; value: string | number }[];
}

const Overview: React.FC<OverviewProps> = ({ stats }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #d9d9d9",
        padding: "0", // Remove any padding to align header with the box
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header without gaps */}
      <div
        style={{
          background: "#f8f9fa", // Highlighted header background
          borderBottom: "1px solid #d9d9d9",
          padding: "10px",
          fontSize: "16px",
          fontWeight: 600,
          color: "#555555",
        }}
      >
        Jobs Overview
      </div>

      {/* Stats Grid */}
      <div
        style={{
          padding: "10px 20px", // Padding for stats area
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)", // Adjust for 10 stats
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#333333",
                marginBottom: "5px",
              }}
            >
              {stat.value}
            </div>
            <div style={{ color: "#666666" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

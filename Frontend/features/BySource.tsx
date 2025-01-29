import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BySource: React.FC = () => {
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
        }}
      >
        By Source
      </div>
      <div style={{ flexGrow: 1, position: "relative", padding: "10px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default BySource;

import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SearchOutlined } from "@ant-design/icons";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ToDoAndSummary: React.FC = () => {
  const data = {
    labels: ["Position to fill", "Offer Accepted", "Candidates Hired"],
    datasets: [
      {
        data: [50, 30, 20], // Example values
        backgroundColor: ["#6c757d", "#17a2b8", "#28a745"], // Gray, Teal, Green
        hoverBackgroundColor: ["#5a6268", "#138496", "#218838"],
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

  const initialTodoItems = [
    { name: "Girish Kumar SN", role: "Lead UX Designer", action: "Send Offer" },
    { name: "Girish Kumar SN", role: "Lead UX Designer", action: "Schedule Interview" },
    { name: "Lead UX Designer", role: "Bangalore & Chennai", action: "Create Job" },
    { name: "Girish Kumar SN", role: "Lead UX Designer", action: "Send Offer" },
    { name: "Girish Kumar SN", role: "Lead UX Designer", action: "Send Offer" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredItems = initialTodoItems.filter((item) =>
      item.name.toLowerCase().includes(query) || item.role.toLowerCase().includes(query)
    );
    setTodoItems(filteredItems);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr", // Left box smaller, right box larger
        gap: "10px", // Reduced space between the two boxes
      }}
    >
      {/* To-Do List Section */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          height: "300px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#555555",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f8f9fa", // Shaded heading
            padding: "10px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <span>To Do</span>
          <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: "140px",
                border: "1px solid #e0e0e0",
                padding: "5px 30px 5px 10px",
                fontSize: "14px",
                color: "#555555",
              }}
            />
            <SearchOutlined
              style={{
                position: "absolute",
                right: "10px",
                fontSize: "16px",
                color: "#888888",
              }}
            />
          </div>
        </div>
        <ul
          style={{
            listStyleType: "none",
            padding: "10px",
            margin: "0",
            overflowY: "auto",
            flexGrow: 1,
          }}
        >
          {todoItems.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e0e0e0",
                padding: "10px 0",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {item.name}
                </span>
                <br />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#888888",
                  }}
                >
                  {item.role}
                </span>
              </div>
              <button
                style={{
                  width: "100px",
                  background: "#007bff",
                  border: "none",
                  color: "#ffffff",
                  padding: "5px",
                  fontSize: "12px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
              >
                {item.action}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Opening Summary Section */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e0e0e0",
          padding: "0px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          height: "300px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#555555",
            background: "#f8f9fa", // Shaded heading
            padding: "10px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          Opening Summary
        </div>
        <div style={{ flexGrow: 1, position: "relative", padding: "10px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ToDoAndSummary;

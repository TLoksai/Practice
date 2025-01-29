// src/features/todoAndSummary/ToDoAndSummary.tsx

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { SearchOutlined } from "@ant-design/icons";
import "./styles/ToDoAndSummary.css";  // Import the CSS

// Chart data and options
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

const ToDoAndSummary: React.FC = () => {
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
    <div className="grid-container">
      {/* To-Do List Section */}
      <div className="todo-list">
        <div className="todo-header">
          <span>To Do</span>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <SearchOutlined className="search-icon" />
          </div>
        </div>
        <ul className="todo-items">
          {todoItems.map((item, index) => (
            <li key={index} className="todo-item">
              <div>
                <span className="item-name">{item.name}</span>
                <br />
                <span className="item-role">{item.role}</span>
              </div>
              <button className="action-button">{item.action}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Opening Summary Section */}
      <div className="summary-section">
        <div className="summary-header">Opening Summary</div>
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ToDoAndSummary;

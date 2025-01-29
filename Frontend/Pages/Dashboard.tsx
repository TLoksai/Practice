import React, { useState } from "react";
import DateRangePicker from "../features/date";
import Overview from "../features/overview"; // Updated Overview component
import Resume from "../features/resume";
import Calendar from "../features/calendar";
import Department from "../features/Department";
import CombinedComponent from "../features/CombinedComponent"; // Combining BySource and MyJobs
import ToDoAndSummary from "../features/ToDoAndSummary";
import RecruitmentAndTAT from "../features/RecruitmentAndTAT";

const Dashboard = () => {
  const [dateRange, setDateRange] = useState([]);
  const [selectedRange, setSelectedRange] = useState("Last 6 Months");

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  const stats = [
    { label: "Applicants", value: 190 },
    { label: "No. of Jobs", value: 30 },
    { label: "Positions", value: 70 },
    { label: "Positions Left", value: 43 },
    { label: "Shortlisted", value: 27 },
    { label: "Interviews", value: 30 },
    { label: "Offered", value: 15 },
    { label: "Hired", value: 5 },
    { label: "Rejected", value: 10 },
    { label: "Avg time hire", value: "7 (days)" },
  ];

  return (
    <div
      style={{
        padding: "20px", // Padding for top and bottom
        paddingLeft: "5%", // Left gap
        paddingRight: "5%", // Right gap
        backgroundColor: "#f4f5f7",
        minHeight: "100vh",
      }}
    >
      {/* Date Range Picker Section */}
      <div style={{ marginBottom: "20px" }}>
        <DateRangePicker onDateChange={handleDateChange} onRangeChange={handleRangeChange} />
      </div>

      {/* Jobs Overview Section */}
      <div style={{ marginBottom: "20px" }}>
        <Overview stats={stats} />
      </div>

      {/* Availability of Resume Section */}
      <div style={{ marginBottom: "20px" }}>
        <Resume />
      </div>

      {/* Calendar Section */}
      <div style={{ marginBottom: "20px" }}>
        <Calendar />
      </div>

      {/* Jobs by Department Section */}
      <div style={{ marginBottom: "20px" }}>
        <Department />
      </div>

      {/* Combined By Source and My Jobs Section */}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <CombinedComponent />
      </div>

      {/* To Do and Opening Summary Section */}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <ToDoAndSummary />
      </div>

      {/* Recruitment Funnel and TAT Section */}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <RecruitmentAndTAT />
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState("June 2019");

  const days = [
    { day: "Mon", date: "01" },
    { day: "Tue", date: "02" },
    { day: "Wed", date: "03" },
    { day: "Thu", date: "04" },
    { day: "Fri", date: "05" },
    { day: "Mon", date: "08" },
    { day: "Tue", date: "09" },
    { day: "Wed", date: "10" },
    { day: "Thu", date: "11" },
    { day: "Fri", date: "12" },
    { day: "Mon", date: "15" },
    { day: "Tue", date: "16" },
    { day: "Wed", date: "17" },
    { day: "Thu", date: "18" },
    { day: "Fri", date: "19" },
    { day: "Mon", date: "22" },
    { day: "Tue", date: "23" },
    { day: "Wed", date: "24" },
    { day: "Thu", date: "25" },
  ];

  const handlePrevMonth = () => {
    setCurrentMonth("May 2019");
  };

  const handleNextMonth = () => {
    setCurrentMonth("July 2019");
  };

  const getDots = (index: number) => {
    const dotCount = (index % 3) + 1;
    const dots: JSX.Element[] = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push(
        <div
          key={i}
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: i === 0 ? "#007bff" : i === 1 ? "#17a2b8" : "#6c757d",
            borderRadius: "50%",
          }}
        ></div>
      );
    }
    return dots;
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "0",
      }}
    >
      {/* Calendar Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          fontSize: "16px",
          color: "#555555",
          backgroundColor: "#f8f9fa", // Shaded header background
          padding: "10px 15px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <span>Calendar</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={handlePrevMonth}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              padding: "0",
            }}
          >
            &lt;
          </button>
          <span>{currentMonth}</span>
          <button
            onClick={handleNextMonth}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              padding: "0",
            }}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Dates Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
          textAlign: "center",
          gap: "0", // Removes space between cells
          padding: "10px",
        }}
      >
        {days.map((day, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0",
              borderRight: index % 5 === 4 ? "none" : "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#555555",
              }}
            >
              {day.day}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#000",
              }}
            >
              {day.date}
            </div>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                gap: "3px",
                justifyContent: "center",
              }}
            >
              {getDots(index)}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", // Reduced gap between items
          padding: "10px",
          fontSize: "12px",
          color: "#555555",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#007bff",
              borderRadius: "50%",
            }}
          ></div>
          <span>Interview</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#17a2b8",
              borderRadius: "50%",
            }}
          ></div>
          <span>Telephonic</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#6c757d",
              borderRadius: "50%",
            }}
          ></div>
          <span>Create New Jobs</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

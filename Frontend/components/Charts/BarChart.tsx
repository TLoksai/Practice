import React from "react";
import { Chart } from "react-google-charts";  // Import the Chart component
import "./chart.css";  // Import the CSS file

const BarChart: React.FC = () => {
  const chartData = [
    ["Department", "Hired Employees", "Trainee Employees"],
    ["Front End", 10, 4],
    ["Back End", 8, 6],
    ["Design", 5, 2],
  ];

  const options = {
    title: "Jobs by Department",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total Count",
      minValue: 0,
    },
    vAxis: {
      title: "Department",
    },
    seriesType: "bars",
    series: { 2: { type: "line" } },
    legend: { position: 'top', alignment: 'center', textStyle: { fontSize: 14 }, }
  };

  return (
    <div className="chart-box">
      <h1 className="chart-heading">Jobs by Department</h1>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default BarChart;

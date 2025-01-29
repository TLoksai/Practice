import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
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
    <div className="grid grid-cols-2 gap-4">
      {/* By Source Section */}
      <div className="bg-white border border-gray-300 shadow-md h-[300px] flex flex-col">
        <div className="font-semibold text-base text-gray-700 bg-gray-100 py-2 px-4 border-b border-gray-300">
          By Source
        </div>
        <div className="flex-grow relative p-4">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* My Jobs Section */}
      <div className="bg-white border border-gray-300 shadow-md h-[300px] flex flex-col">
        <div className="font-semibold text-base text-gray-700 bg-gray-100 py-2 px-4 border-b border-gray-300 flex justify-between">
          <span>My Jobs</span>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        <ul className="list-none m-0 p-4 overflow-y-auto">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-gray-100 py-2 items-center"
            >
              <div>
                <span className="font-semibold text-sm">{job.title}</span>
                <br />
                <span className="text-xs text-gray-500">{job.location}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[40px] h-[40px] bg-gray-100 flex justify-center items-center font-semibold">
                  {job.positions < 10 ? `0${job.positions}` : job.positions}
                </div>
                <span className="text-xs text-gray-500">Positions Left</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CombinedComponent;

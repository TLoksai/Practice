import React from "react";
import DonutChart from "../components/Charts/DonutChart"; // Import updated DonutChart with JobSearch
import PieChart from "../components/PieChart"; // Import PieChart for other sections
import JobList from "../components/JobList"; // Import the JobList component
import FromTo from "../components/FromTo"; // Import FromTo component

const Dashboard: React.FC = () => {
  // Data for additional pie charts
  const activeCandidatesData = [
    ["Status", "Percentage"],
    ["Employed", 70],
    ["Unemployed", 30],
  ];

  const allResumesData = [
    ["Category", "Documents"],
    ["Available Resume", 150],
    ["Unavailable Resume", 50],
  ];

  return (
    <div className="dashboard-container w-full flex flex-col space-y-8 p-4">
      {/* First Row: FromTo Date Picker */}
      <div className="w-full p-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">
          Select Date Range
        </h2>
        <FromTo /> {/* FromTo component for selecting "From" and "To" dates */}
      </div>

      {/* Second Row: PieChart */}
      <div className="w-full p-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">
          Resume Availability
        </h2>
        <div className="w-full flex justify-between items-start space-x-4">
          <div className="flex-1 p-4 border rounded shadow-md bg-white">
            <h3 className="text-lg font-semibold mb-4">Active Candidates</h3>
            <PieChart data={activeCandidatesData} title="Active Candidates" />
          </div>
          <div className="flex-1 p-4 border rounded shadow-md bg-white">
            <h3 className="text-lg font-semibold mb-4">All Resumes</h3>
            <PieChart data={allResumesData} title="All Resumes" />
          </div>
        </div>
      </div>

      {/* Third Row: DonutChart */}
      <div className="w-full p-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">
          Job Search Stats
        </h2>
        <DonutChart /> {/* Updated DonutChart with JobSearch */}
      </div>

      {/* Fourth Row: Job List */}
      <div className="w-full p-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">
          Job List & Search
        </h2>
        <JobList /> {/* Call the JobList component here */}
      </div>
    </div>
  );
};

export default Dashboard;

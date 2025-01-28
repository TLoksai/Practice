import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Career Page", value: 20 },
  { name: "LinkedIn", value: 25 },
  { name: "Naukri", value: 15 },
  { name: "Referral", value: 10 },
  { name: "Indeed", value: 20 },
  { name: "Times Jobs", value: 10 },
];

const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

const cities = ["New York", "San Francisco", "Chicago", "Austin", "Los Angeles"];

const jobs = {
  "New York": ["Software Engineer", "Data Analyst", "Product Manager"],
  "San Francisco": ["Frontend Developer", "UI/UX Designer", "DevOps Engineer"],
  "Chicago": ["Marketing Manager", "Sales Executive", "Business Analyst"],
  "Austin": ["Backend Developer", "Cloud Architect", "Data Scientist"],
  "Los Angeles": ["Project Manager", "HR Specialist", "Web Developer"],
};

const JobSearch: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [availableJobs, setAvailableJobs] = useState<string[]>(["Select a city to see jobs"]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    setAvailableJobs(jobs[city] || []);
  };

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-purple-600 w-full">
      <h2 className="text-3xl font-bold text-white mb-6">Job Search</h2>
      <p className="text-lg text-white mb-4">Find your dream job by selecting your preferred city and role.</p>

      {/* City Dropdown */}
      <div className="mb-6 w-full">
        <label className="block text-sm font-medium text-white mb-2" htmlFor="city">
          Select a City:
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full p-3 border-none rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 text-gray-800"
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Job Roles */}
      <div className="mt-6 w-full">
        <h3 className="text-lg font-semibold text-white mb-4">
          {selectedCity ? `Available Job Roles in ${selectedCity}:` : "Please select a city to view job roles"}
        </h3>
        <ul className="list-disc pl-5 text-white">
          {availableJobs.length > 0 ? (
            availableJobs.map((job, index) => (
              <li key={index} className="text-sm font-bold">{job}</li>
            ))
          ) : (
            <li className="text-sm">No jobs available for this city.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

const DonutChart: React.FC = () => {
  return (
    <div className="flex w-full p-6 space-x-8">
      {/* Donut Chart */}
      <div className="flex-1 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Applicants by Source</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Job Search */}
      <div className="flex-1">
        <JobSearch />
      </div>
    </div>
  );
};

export default DonutChart;

import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Role {
  id: number;
  title: string;
  status: 'Apply' | 'Offer';
}

const JobList = () => {
  // State for job roles and filtered roles
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, title: 'Frontend Developer', status: 'Apply' },
    { id: 2, title: 'Backend Developer', status: 'Offer' },
    { id: 3, title: 'Full-Stack Engineer', status: 'Apply' },
    { id: 4, title: 'DevOps Engineer', status: 'Apply' },
    { id: 5, title: 'UI/UX Designer', status: 'Offer' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoles, setFilteredRoles] = useState<Role[]>(roles);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    // Filter job roles based on search term
    const filtered = roles.filter((role) =>
      role.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoles(filtered);
  };

  // Data for the pie chart
  const pieData = {
    labels: ['Positions to Fill', 'Offer Acceptance', 'Candidates Hired'],
    datasets: [
      {
        label: 'Recruitment Statistics',
        data: [5, 2, 1], // Values from the pitch data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors
        hoverBackgroundColor: ['#FF4D6D', '#2F9CE0', '#FFC233'],
      },
    ],
  };

  return (
    <div className="p-5">
      {/* Job List Row */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Job Roles */}
        <div className="flex-1 p-4 border rounded shadow-md bg-white">
          <div className="mb-6 relative">
            {/* Full-width search bar with icon */}
            <input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 pl-10 border rounded w-full bg-yellow-50 border-yellow-500 text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Search icon inside the input box */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-700" />
          </div>
          <div>
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  className="flex justify-between items-center p-2 border-b"
                >
                  <span className="font-bold">{role.title}</span>
                  <button
                    className={`px-3 py-1 text-sm rounded ${
                      role.status === 'Apply'
                        ? 'bg-blue-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {role.status}
                  </button>
                </div>
              ))
            ) : (
              <p>No roles found.</p>
            )}
          </div>
        </div>

        {/* Pie Chart Box */}
        <div className="flex-1 p-4 border rounded shadow-md bg-gray-50 flex items-center justify-center">
          <div className="w-3/4 h-auto">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;

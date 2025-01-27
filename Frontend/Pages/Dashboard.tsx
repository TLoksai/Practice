import React from 'react';
import PieChart from '../components/PieChart';

const Dashboard: React.FC = () => {
  const activeCandidatesData = [
    ['Status', 'Percentage'],
    ['Employed', 70],
    ['Unemployed', 30],
  ];

  const allResumesData = [
    ['Category', 'Documents'],
    ['Available Resume', 150],
    ['Unavailable Resume', 50],
  ];

  return (
    <div className="flex justify-center items-start w-full py-8">
      <table className="table-fixed border border-gray-200 shadow-lg w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-center text-xl font-semibold" colSpan={2}>Availability of Resume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 w-1/2">
              <PieChart data={activeCandidatesData} title="Active Candidates" />
            </td>
            <td className="border px-4 py-2 w-1/2">
              <PieChart data={allResumesData} title="All Resumes" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

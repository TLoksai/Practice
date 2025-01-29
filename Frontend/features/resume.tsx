import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Resume: React.FC = () => {
  // Data for the first donut chart
  const activeCandidatesData = {
    labels: ['Best Match', 'Partial Match'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#45a049', '#e53935'],
      },
    ],
  };

  // Data for the second donut chart
  const allResumeData = {
    labels: [
      'System Recommended Best Match',
      'Pre Evaluated Candidates',
      'No of Resurrected Candidates',
    ],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#2196f3', '#ff9800', '#9c27b0'],
        hoverBackgroundColor: ['#1976d2', '#fb8c00', '#7b1fa2'],
      },
    ],
  };

  // Config for both charts
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white border border-gray-300 shadow-sm">
      <div className="flex justify-between items-center p-3 text-lg font-semibold text-gray-600 bg-gray-100 border-b border-gray-300">
        Availability of Resume
      </div>
      <div className="flex justify-between p-5 md:flex-col md:items-center md:gap-5">
        <div className="w-1/2 text-center md:w-11/12">
          <h4 className="text-sm text-gray-600 mb-2">Active Candidates <br />(CV Received in Last 1 Month)</h4>
          <div className="h-48">
            <Doughnut data={activeCandidatesData} options={chartOptions} />
          </div>
        </div>
        <div className="w-1/2 text-center md:w-11/12">
          <h4 className="text-sm text-gray-600 mb-2">All Resume</h4>
          <div className="h-48">
            <Doughnut data={allResumeData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

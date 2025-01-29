import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Department: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ['Design', 'HR', 'Marketing', 'Sales', 'Product Management', 'Development', 'Admin'],
    datasets: [
      {
        label: 'Interview',
        data: [30, 50, 10, 40, 20, 70, 15],
        backgroundColor: '#bdbdbd', // Light gray for Interview
      },
      {
        label: 'Target',
        data: [40, 60, 20, 50, 30, 80, 25],
        backgroundColor: '#9e9e9e', // Medium gray for Target
      },
      {
        label: 'Hired',
        data: [20, 30, 5, 25, 15, 60, 10],
        backgroundColor: '#757575', // Dark gray for Hired
      },
    ],
  };

  // Configuration for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const, // Align legend to the right
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false, // Title removed as per the image
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'JOBS BY DEPARTMENT',
          font: {
            size: 12,
            weight: 700,
          },
          color: '#555555',
        },
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#555555',
        },
      },
      y: {
        title: {
          display: true,
          text: 'TARGET',
          font: {
            size: 12,
            weight: 700,
          },
          color: '#555555',
        },
        beginAtZero: true,
        grid: {
          color: '#e0e0e0', // Light gray grid lines
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#555555',
        },
      },
    },
  };

  return (
    <div className="bg-white border border-gray-300 shadow-md h-[300px] flex flex-col p-0">
      {/* Header */}
      <div className="font-semibold text-base text-gray-700 bg-gray-100 py-2 px-4 border-b border-gray-300">
        Jobs by Department
      </div>

      {/* Chart Section */}
      <div className="flex-grow relative p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Department;

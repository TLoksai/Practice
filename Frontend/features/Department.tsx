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
        align: 'end', // Align legend to the right
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
            weight: 'bold',
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
            weight: 'bold',
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
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        padding: '0', // Remove unnecessary padding for alignment
      }}
    >
      {/* Header */}
      <div
        style={{
          fontWeight: '600',
          fontSize: '16px',
          color: '#555555',
          backgroundColor: '#f8f9fa', // Shaded header background
          padding: '10px 15px',
          borderBottom: '1px solid #d9d9d9',
          marginTop: '0', // Cover the top gap
        }}
      >
        Jobs by Department
      </div>

      {/* Chart Section */}
      <div style={{ flexGrow: 1, position: 'relative', padding: '10px 15px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Department;

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
        backgroundColor: ['#4caf50', '#f44336'], // Colors for the segments
        hoverBackgroundColor: ['#45a049', '#e53935'], // Hover colors
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
        position: 'right' as const, // Legend placement
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
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #d9d9d9',
        padding: '0', // Remove extra padding around the container
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 15px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#555555',
          backgroundColor: '#f8f9fa', // Light header background
          borderBottom: '1px solid #d9d9d9',
        }}
      >
        Availability of Resume
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 10px' }}>
        <div style={{ width: '48%' }}>
          <h4
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#666',
              marginBottom: '10px',
            }}
          >
            Active Candidates <br />
            (CV Received in Last 1 Month)
          </h4>
          <div style={{ height: '200px' }}>
            <Doughnut data={activeCandidatesData} options={chartOptions} />
          </div>
        </div>
        <div style={{ width: '48%' }}>
          <h4
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#666',
              marginBottom: '10px',
            }}
          >
            All Resume
          </h4>
          <div style={{ height: '200px' }}>
            <Doughnut data={allResumeData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";

interface OverviewProps {
  stats: { label: string; value: string | number }[];
}

const Overview: React.FC<OverviewProps> = ({ stats }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-sm">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 p-3 text-lg font-semibold text-gray-600">
        Jobs Overview
      </div>

      {/* Stats Grid */}
      <div className="p-4 grid grid-cols-10 gap-5 justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-sm font-semibold">
            <div className="text-xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

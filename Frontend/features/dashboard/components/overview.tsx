

const Overview = () => {
  const stats = [
    { label: "Applicants", value: 190 },
    { label: "No. of Jobs", value: 30 },
    { label: "Positions", value: 70 },
    { label: "Positions Left", value: 43 },
    { label: "Shortlisted", value: 27 },
    { label: "Interviews", value: 30 },
    { label: "Offered", value: 15 },
    { label: "Hired", value: 5 },
    { label: "Rejected", value: 10 },
    { label: "Avg time hire", value: "7 (days)" },
  ];

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

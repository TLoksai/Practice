import React from "react";
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

const DonutChart: React.FC = () => {
  return (
    <div className="chart-container">
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
  );
};

export default DonutChart;

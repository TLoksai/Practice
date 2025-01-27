import React from 'react';
import { Chart } from 'react-google-charts';

interface PieChartProps {
  data: (string | number)[][];
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const options = {
    title: title,
    is3D: true,
  };

  return (
    <div className="w-full">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PieChart;

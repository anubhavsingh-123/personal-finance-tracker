import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import CustomTooltip from "./CustomTooltip"; // Adjust the import path as necessary
const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbef5";
  };

  // const CustomTooltip = ({ active, payload }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
  //         <p className="text-xs font-semibold text-purple-800 mb-1">
  //           {payload[0].payload.category}
  //         </p>
  //         <p className="text-sm text-gray-600">
  //           Amount:{" "}
  //           <span className="text-sm font-medium text-gray-900">
  //             ${payload[0].payload.amount}
  //           </span>
  //         </p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500 mt-4">No data to display</div>;
  }

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
        {/* <BarChart data={data}>
  <CartesianGrid stroke="none" />
  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#555" }} />
  <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
  <Tooltip content={<CustomTooltip />} />
  <Bar dataKey="amount" radius={[10, 10, 0, 0]} barSize={40}>
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={getBarColor(index)} />
    ))}
  </Bar>
</BarChart> */}

      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;

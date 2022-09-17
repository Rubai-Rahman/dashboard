import { DatePicker } from "antd";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { FaEllipsisV } from "react-icons/fa";

const data = [
  { name: "TV", value: 78 },
  { name: "Laptop", value: 11 },
  { name: "Other", value: 11 },
];

const COLORS = ["#2D5BFF", "#6284FD", "#96ADFF"];

const SalesChart = () => {
  return (
    <>
      <div className="chart">
        <div className="header ">
          <h3 className="title">Sales Chart</h3>
          <button>
            <FaEllipsisV />
          </button>
        </div>
        <div className="header ">
          <h4>Todays Sale</h4>
          <DatePicker picker="day" />
        </div>
      </div>
      <>
        <PieChart width={200} height={300}>
          <Pie
            data={data}
            cx={100}
            cy={200}
            innerRadius={50}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </>
    </>
  );
};

export default SalesChart;

import { DatePicker, Select, Space } from "antd";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { BsCircleFill} from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";

const data = [
  { name: "TV", value: 78 },
  { name: "Laptop", value: 11 },
  { name: "Other", value: 11 },
];

const COLORS = ["#2D5BFF", "#6284FD", "#96ADFF"];
const { Option } = Select;

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
          <h4
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#5C5C5C",
              marginLeft: 18,
            }}
          >
            Todays Sale
          </h4>
          <Space>
            <Select
              placeholder="Today"
              style={{ width: 100, padding: 10, marginLeft: 7 }}
            >
              <Option value="time">Time</Option>
              <Option value="date">Date</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="quarter">Quarter</Option>
              <Option value="year">Year</Option>
            </Select>
          </Space>
        </div>
      </div>
      <div style={{display:"flex"}}>
        <PieChart width={200} height={300}>
          <Pie
            data={data}
            cx={100}
            cy={200}
            innerRadius={45}
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
        <div className="select" >
          <span>          
            <BsCircleFill style={{color:"#2D5BFF"}} />
            50% TV
          </span>
          <span>
         
            <BsCircleFill style={{color:"#6284FD"}} />
            25% Laptop
          </span>
          <span>
        
            <BsCircleFill style={{color:"#96ADFF"}} />
            25% Other
          </span>
          <span><button>See details</button></span>
        </div>
      </div>
    </>
  );
};

export default SalesChart;

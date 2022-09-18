import { DatePicker } from "antd";
import React from "react";
import {FaEllipsisV} from "react-icons/fa"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pdata = [
  {
    sellName: "0",
    date: 0,
    sale: 1600.0,
  },
  {
    sellName: "1JT",
    date: 7,
    sale: 2100.0,
  },
  {
    sellName: "2JT",
    date: 14,
    sale: 2200.0,
  },
  {
    sellName: "3JT",
    date: 21,
    sale: 1900.0,
  },
  {
    date: 25,
    sale: 2100.0,
  },

  {
    sellName: "4JT",
    date: 28,
    sale: 3000,
  },
];
const TotalSale = () => {
  return (
    <>
      <div className="header">
        <div className="title">Total Sale</div>
        <div style={{ height: 32, marginLeft: 30,marginTop:20 }}>
          <DatePicker picker="month" style={{width:126}} />
          <button
            style={{
              border: "none",
              fontSize: 20,
              backgroundColor: "white",
              marginLeft: 20,
              color:"#9DACBE"
            }}
          >
          <FaEllipsisV/>
          </button>
        </div>
      </div>
      <div className="element">
        <div className="tlist ">
          <div className="name">TV</div>
          <div className="number">600.000</div>
          <div className="name">Laptop</div>
          <div className="number">1200.000</div>
          <div className="name">Other</div>
          <div className="number">210.000</div>
        </div>
        <div className="lineChart">
          <ResponsiveContainer width="80%" height="80%">
            <LineChart width={300} height={200} data={pdata}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip contentStyle={{ borderRadius: 5 }} />
              <Line
                type="monotone"
                dataKey="sale"
                stroke="#2D5BFF"
                fill="#8884d8"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TotalSale;

import { DatePicker } from "antd";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    sale:3000
  },
];
const TotalSale = () => {
  return (
    <div className="header" style={{width:"100%",height:"100%"}}>
      <div className="title">Total Sale</div>
      <div className="date">
        <DatePicker picker="month" />
        <button>...</button>
      </div>
    <>
      <ResponsiveContainer width="50%" height="50%">
        <LineChart width={300} height={100} data={pdata}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip contentStyle={{borderRadius:5}} />
            <Line type="monotone" dataKey="sale" stroke="#2D5BFF" fill="#8884d8" strokeWidth={4}  />
          </LineChart>
      </ResponsiveContainer>
    </>
    </div>
  );
};

export default TotalSale;

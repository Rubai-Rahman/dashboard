import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import moment from "moment";
const Weather = () => {
  const [tempData, setTempData] = useState({});
  

  const apikey = process.env.REACT_APP_API_ID;
  const city= "dhaka"

  const temp = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
 
  useEffect(() => {
    fetch(temp)
      .then((res) => res.json())
      .then((data) =>setTempData(data));
  }, [temp]);

const url=`http://openweathermap.org/img/wn/${tempData?.weather?.[0]?.icon}@2x.png`

  return (
    <>
      <div className="header ">
        <h3 className="title">Weather </h3>
        <div className="try">
          <button
            style={{
              border: "none",
              color: "#9DACBE",
              backgroundColor: "white",
              fontSize: 20,
              width: 30,
              marginLeft: 220,
            }}
          >
            <FaEllipsisV />
          </button>
          <p style={{ backgroundColor: "", marginTop: 30, fontSize: 16 }}>
            {moment().format("dddd LL")}
          </p>
        </div>
      </div>

      <div className="temp">
        <div className="curentTemp">
          <p
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#181818",
              width: 121,
            }}
          >
            {moment().format("h:mma")}{" "}
          </p>
          <img style={{ width: 70 }} src={url} alt="" />
          <h2 style={{ fontWeight: 500, fontSize: 18, color: "#181818" }}>
            {tempData?.weather?.[0].main} {tempData?.main?.temp}
          </h2>
        </div>

        <div className="forecast">
          <div className="time">
            <p>.10:00 AM</p>
            <p>.01:00 AM</p>
            <p>.04:00 AM</p>
            <p>.05:00 AM</p>
            <p>.08:00 AM</p>
          </div>
          <div className="weatherr">
            <p>Light Rain, 27°C</p>
            <p>Cloudy Sunny, 27°C</p>
            <p>Cloudy, 27°C</p>
            <p>Cloudy, 25°C</p>
            <p>Cloudy, 25°C</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

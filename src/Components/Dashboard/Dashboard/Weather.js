import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const Weather = () => {
  const [tempData, setTempData] = useState({});
  const apikey = `ca87ea12c9dc4648215591c544c1920a`;
  const city= "dhaka"

  const temp = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
 
  useEffect(() => {
    fetch(temp)
      .then((res) => res.json())
      .then((data) =>setTempData(data));
  }, []);
console.log(tempData)
const url=`http://openweathermap.org/img/wn/${tempData?.weather?.[0]?.icon}@2x.png`

  return (
    <>
      <div className="header ">
        <h3 className="title">Weather</h3>
        <button>
          <FaEllipsisV />
        </button>
      </div>
      <div className="temp">
        <div className="curentTemp">
          <h2>{tempData?.main?.temp}</h2>
          <h2>{tempData?.weather?.[0].main}</h2>
          <img src={url} alt="" />
        </div>

        <div className="forcast">
        
        </div>
      </div>
    </>
  );
};

export default Weather;

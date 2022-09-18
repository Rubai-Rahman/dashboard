import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const Weather = () => {
    return (
        <div className="header ">
          <h3 className="title">Weather</h3>
          <button>
            <FaEllipsisV />
          </button>
        </div>
    );
};

export default Weather;
import React from "react";
import { Alert } from "react-bootstrap";
import { BsFillCloudSleetFill } from "react-icons/bs";
import Sales from "./Sales";
import PopularProduct from "./PopularProduct";
import SalesChart from "./SalesChart";
import TotalSale from "./TotalSale";
import Weather from "./Weather";

const dashBoard = ({ show, setShow }) => {
  return (
    <div className="dashboard">
      <div className="title">
        <h4>Redgreen Sales</h4>
      </div>
      <div className="alert">
        {show ? (
          <Alert
            style={{
              width: "100%",
              color: " #9D8506",
              backgroundColor: "#FFFAE1",
            }}
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Notification</Alert.Heading>
            <span>
              <BsFillCloudSleetFill />
            </span>
            <p>You dont have enough stock for the next campaign.</p>
          </Alert>
        ) : (
          <span></span>
        )}
      </div>
     <div className="components">
     <div className="product">
        <PopularProduct />
      </div>
      <div className="sales">
        <Sales />
      </div>
      <div className="salesChart">
        <SalesChart />
      </div>
      <div className="totalSale">
        <TotalSale />
      </div>
      <div className="weather">
        <Weather />
      </div>
     </div>
    </div>
  );
};

export default dashBoard;

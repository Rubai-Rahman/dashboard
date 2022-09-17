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
        <h4 style={{ fontSize: 18, fontWeight: 500, color: "#181818",letterSpacing:0.5,width:148,height:23, }}>
          Redgreen Sales
        </h4>
      </div>
      <div>
        {show ? (
          <Alert
            className="alert"
            style={{
              width: "100%",
              color: " #9D8506",
              backgroundColor: "#FFFAE1",
              border: "none",
              borderLeft: 7,
              borderLeftStyle: "solid",
              borderColor: "#9D8506",
            }}
            onClose={() => setShow(false)}
            dismissible
          >
            <div className="alert">
              <div className="logo">
                <span>
                  <BsFillCloudSleetFill
                    style={{ fontSize: 48, color: "#CCCCCC" }}
                  />
                </span>
              </div>
              <div className="heading" style={{ marginLeft: 22, padding: 20 }}>
                <Alert.Heading
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    paddingTop: 20,
                    color: "#9D8506",
                  }}
                >
                  Notification
                </Alert.Heading>
                <p style={{ fontWeight: 400, fontSize: 16, color: "#9D8506" }}>
                  You dont have enough stock for the next campaign.
                </p>
              </div>
            </div>
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

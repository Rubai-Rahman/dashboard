import { SpaceContext } from "antd/lib/space";
import React from "react";
import { Alert } from "react-bootstrap";
import Header from "../Header/Header";

const dashBoard = ({ show, setShow }) => {
  return (
    <div className="dashboard">
      <div className="title">
        <h4>Redgreen Sales</h4>
      </div>
      <div className="alert">
        {show ? (
          <Alert
            style={{ width:"100%",
            color:" #9D8506",
            backgroundColor:"#FFFAE1"
            
        }}
         
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Notification</Alert.Heading>
            <p>
              You dont have enough stock for the next campaign.
            </p>
          </Alert>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default dashBoard;

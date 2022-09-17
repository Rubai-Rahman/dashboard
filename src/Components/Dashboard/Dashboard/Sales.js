import { DatePicker } from "antd";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";

const Sales = () => {
  return (
    <>
      <div className="header">
        <h2 className="title">Sale</h2>
        <button>
          {" "}
          <FaEllipsisV />{" "}
        </button>
      </div>
      <div className="secondcomp">
        <p>Monthly Sales</p>
        <DatePicker picker="month" />
      </div>
      <div className="list">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        </ListGroup>
        <button>show more</button>
      </div>
    </>
  );
};

export default Sales;

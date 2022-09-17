import React from "react";
import { ListGroup } from "react-bootstrap";
import {FaEllipsisV} from "react-icons/fa"

const PopularProduct = () => {
  return (
    <>
      <div className="header">
        <h3 className="title">Most Popular Product</h3>
        <button> <FaEllipsisV /></button>
      </div>
      <div className="list">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
       <button>show more</button>
      </div>
    </>
  );
};

export default PopularProduct;

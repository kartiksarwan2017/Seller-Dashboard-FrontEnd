import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./InventoryList.scss";

const InventoryList = ({ inventory }) => {
  return (
    <>
      <div className="inventorylist-container">
        {inventory.map((item, index) => {
          return (
            <div className="inventory-list" key={index}>
              <Card style={{ width: "18rem"}} className="inventory-card">
              <Card.Img variant="top" src={item.productImage} className="inventory-img" />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Selling Price</strong>
                  {item.SellingPrice}
                  </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Quantity</strong>
                  {item.quantity}
                  </ListGroup.Item>
                <ListGroup.Item>
                  <strong>MRP: </strong>
                  {" "} Rs {item.MRP}
                  </ListGroup.Item>
              </ListGroup>
            </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InventoryList;

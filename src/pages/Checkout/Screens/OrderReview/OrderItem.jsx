import React from "react";
import {
  ItemContainer,
  ItemImage,
  ItemImageConteiner,
} from "./OrderReviewStyles";

const OrderItem = ({ item }) => {
  return (
    <ItemContainer>
      <ItemImageConteiner>
        <ItemImage src={item.image_url} alt={item.name} />
      </ItemImageConteiner>
      <div className="d-flex g-15 a-center f-wrap">
        <p>
          <b>{item.name}</b>
        </p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: {item.total} GBP</p>
      </div>
    </ItemContainer>
  );
};

export default OrderItem;

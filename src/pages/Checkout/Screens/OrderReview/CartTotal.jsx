import React from "react";
import { CartTotalContainer, SectionTitle } from "./OrderReviewStyles";

const CartTotal = ({ total }) => {
  return (
    <CartTotalContainer>
      <SectionTitle>Cart Total</SectionTitle>
      <p>Total: {total} GPB</p>
    </CartTotalContainer>
  );
};

export default CartTotal;

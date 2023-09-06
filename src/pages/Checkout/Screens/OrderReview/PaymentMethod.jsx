import React from "react";
import { PaymentMethodContainer, SectionTitle } from "./OrderReviewStyles";

const PaymentMethod = ({ method }) => {
  return (
    <PaymentMethodContainer>
      <SectionTitle>Payment Method</SectionTitle>
      <p>Chosen Method: {method}</p>
    </PaymentMethodContainer>
  );
};

export default PaymentMethod;

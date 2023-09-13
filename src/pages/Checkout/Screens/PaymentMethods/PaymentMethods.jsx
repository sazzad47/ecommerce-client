import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { checkoutContext } from "../../Checkout";
import CreditCardInput from "react-credit-card-input";

const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const PaymentMethods = () => {
  const { setPaymentMethod } = useContext(checkoutContext);

  useEffect(() => {
    setPaymentMethod("creditCard");
  }, []);

  return (
    <PaymentMethodsContainer className="d-flex-column g-15">
      <h2>Pay with your creidt card</h2>
      <CreditCardInput fieldStyle={{ borderRadius: "10px", padding: "1rem" }} />
    </PaymentMethodsContainer>
  );
};

export default PaymentMethods;

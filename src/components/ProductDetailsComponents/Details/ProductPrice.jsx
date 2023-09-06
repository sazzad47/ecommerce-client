import React from "react";
import styled from "styled-components";
import { currencySymbol } from "../../../constants";
const PriceContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.discount ? "#e74c3c" : "#333")};
`;

const DiscountTag = styled.span`
  margin: 0px 8px;
  font-size: 14px;
  color: #555;
  text-decoration: line-through;
`;

const ProductPrice = ({ price, discount }) => {
  return (
    <PriceContainer discount={discount}>
      {discount > 0 && (
        <DiscountTag>
          {price} {currencySymbol}
        </DiscountTag>
      )}
      {price - (discount / 100) * price} {currencySymbol}
    </PriceContainer>
  );
};

export default ProductPrice;

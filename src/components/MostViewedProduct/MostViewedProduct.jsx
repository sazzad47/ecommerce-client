import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #ff5722;
  margin: 0;
`;

const ProductStock = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const MostViewedProduct = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.images[0].image_url} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.short_description}</ProductDescription>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductStock>Stock: {product.stock}</ProductStock>
      </ProductInfo>
    </ProductContainer>
  );
};

export default MostViewedProduct;

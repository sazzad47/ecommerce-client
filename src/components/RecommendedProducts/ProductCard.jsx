import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height : 400px;
  overflow : auto;
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  display: flex;
  background-color: #f7f7f7;
`;

const ProductImage = styled.img`
  margin: auto;
  height: 80%;
  width: auto;
`;

const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const ProductSalePrice = styled.span`
  font-size: 16px;
  color: #ff5500;
  margin-left: 10px;
`;

const ProductShortDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  const { images, name, price, discount, short_description, id } = product;

  return (
    <Link to={`/products/${name}/${id}`} className="clear">
      <ProductCardWrapper>
        <ImageContainer>
          <ProductImage src={images[0].image_url} alt={name} />
        </ImageContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          Price: ${price}
          {discount && (
            <ProductSalePrice>
              Sale: ${price - (discount / 100) * price}
            </ProductSalePrice>
          )}
        </ProductPrice>
        <ProductShortDescription>{short_description}</ProductShortDescription>
      </ProductCardWrapper>
    </Link>
  );
};

export default ProductCard;

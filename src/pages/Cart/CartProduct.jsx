import React, { useContext, useState } from "react";
import { Add, Remove, Delete } from "@mui/icons-material";
import styled from "styled-components";
import { colorsPalette, currencySymbol } from "../../constants";
import { mobile, tablet } from "../../responsive";
import { cartContext } from "./Cart";
import { CartHooks } from "../../Features";
import { Paper } from "@mui/material";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  width:200px;
  max-height: 150px;
  ${mobile({
    width:"100px"
  })}

  ${tablet({
    width: "100px",
  })}
`;
const Image = styled.img`
  width: auto;
  height:80%;

`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
  ${mobile({
    fontSize: "13px",
  })}

  ${tablet({
    fontSize: "13px",
  })}
`;

const ProductCat = styled.span`
  font-size: 12px;
  color: ${colorsPalette["5"]};
`;
const ProductName = styled.span``;

const ProductDelete = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: ${colorsPalette["4"]};
  }
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "20px",
  })}

  ${tablet({
    fontSize: "20px",
  })}
`;

const ProductAmount = styled.p`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    fontSize: "20px",
  })}

  ${tablet({
    fontSize: "20px",
  })}
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vw;
  z-index: 1000;
  background-color: #ffffff80;
  top: 0;
  left: 0;
`;

const CartProduct = ({ item }) => {
  const { cart_id } = useContext(cartContext);
  const { useUpdateCartItem, useDeleteCartItem } = CartHooks;
  const { UpdateItem, UpdateLoading } = useUpdateCartItem();
  const { DeleteItem, DeleteLoading } = useDeleteCartItem();
  const [update, setUpdate] = useState(0);

  const handleChange = (val) => {
    if (val > 0) {
      setUpdate(update + 1);
      UpdateItem({
        product_id: item.id,
        quantity: val,
        id: cart_id,
      });
    }
  };

  const handleDelete = () => {
    DeleteItem({
      product_id: item.id,
      id: cart_id,
    });
  };

  return (
    <Paper sx={{display: "flex", justifyContent: "space-between"}} elevation={2}>
      {(UpdateLoading || DeleteLoading) && <Overlay />}
      <ProductDetail>
        <ImageContainer>
          <Image src={item.image_url} />
        </ImageContainer>
        <Details>
          <ProductCat>{item.title}</ProductCat>
          <ProductName>
            <b>Product:</b> {item.name}
          </ProductName>
          <ProductDelete onClick={() => handleDelete()}>
            <Delete sx={{ fontSize: "15px" }} />
            Remove
          </ProductDelete>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>{item.price * item.quantity} {currencySymbol}</ProductPrice>
        <ProductAmountContainer>
          <Button onClick={() => handleChange(item.quantity + 1)}>
            <Add />
          </Button>
          <ProductAmount>{item.quantity}</ProductAmount>
          <Button onClick={() => handleChange(item.quantity - 1)}>
            <Remove />
          </Button>
        </ProductAmountContainer>
      </PriceDetail>
    </Paper>
  );
};

export default CartProduct;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { colorsPalette } from "../../../constants";
import { ProductContext } from "../../../pages/ProductDetails/ProductDetails";
import Quantity from "./Quantity";
import { ShoppingCart } from "@mui/icons-material";
import { CartHooks } from "../../../Features";
import { Oval } from "react-loader-spinner";
import ProductPrice from "./ProductPrice";
import { mobile } from "../../../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductName = styled.p`
  font-weight: 900;
  font-size: 30px;
  margin: 0;
  margin-top: 20px;
  ${mobile({
    fontSize: "20px",
  })}
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;

const StockStatus = styled.span`
  font-weight: bold;
  color: ${(props) => (props.inStock ? "green" : "red")};
`;

const StockWarning = styled.span`
  color: orange;
`;

const Actions = styled.div``;

const Pdetails = () => {
  const { productData } = useContext(ProductContext);

  const [quantity, setQuantity] = useState(productData?.min_order);
  const { useCartOperations } = CartHooks;
  const { AddingItem, AddLoading } = useCartOperations();

  const handleAdding = async () => {
    await AddingItem({
      product_id: productData?.id,
      quantity: quantity || productData?.min_order,
    });
  };

  const isProductInStock = productData?.stock > 0;

  return (
    <Container>
      <Wrapper>
        <ProductName>{productData?.name}</ProductName>
        <Div>
          <span>{productData?.short_description}</span>
        </Div>
        <Div>
          <ProductPrice
            price={productData?.price}
            discount={productData?.discount}
          />
        </Div>
        <div className="d-flex-column j-center g-20">
          <div className="d-flex g-10 a-center">
            <Quantity
              min={productData?.min_order}
              max={productData?.max_order}
              value={quantity}
              change={setQuantity}
            />
            <StockStatus inStock={isProductInStock}>
              {isProductInStock ? "In Stock" : "Out of Stock"}
            </StockStatus>

            {productData?.stock < 5 && (
              <StockWarning>Only {productData?.stock} left!</StockWarning>
            )}
          </div>
          <Actions className="d-flex a-center">
            <Button
              startIcon={
                AddLoading ? (
                  <Oval color="white" width={15} height={15} />
                ) : (
                  <ShoppingCart />
                )
              }
              variant="contained"
              sx={{ backgroundColor: colorsPalette[5] }}
              onClick={() => handleAdding()}
              disabled={AddLoading}
            >
              Add to cart
            </Button>
          </Actions>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Pdetails;

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
import { mobile, tablet } from "../../../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuantityDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`
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

const ImgS = styled.img`
  width: auto;
  height: 100%;
`;

const SliderDiv = styled.div`
  margin: 5px 0;
  background-color: ${(props) => props.c};
  display: flex;
  flex: wrap;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  ${tablet({
    flexDirection: "row",
    overflowX: "auto",
  })}
  ${mobile({
    flexDirection: "row",
    overflowX: "auto",
  })}
`;

const OneImage = styled.div`
  height: 100px;
  margin: 15px 0;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.c};
  cursor: pointer;
  opacity: 0.8;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`;

const Pdetails = ({selected, setSelected}) => {
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

  const handleClick = (url) => {
    setSelected(url);
  };

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
          <QuantityDiv>
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
          </QuantityDiv>
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
          <SliderDiv c={"transparent"}>
          {React.Children.toArray(
            productData?.images.map((img) => {
              return (
                <OneImage
                  c={"#29f0e6"}
                  className={img.image_url == selected && "opacity-1"}
                  onClick={() => handleClick(img.image_url)}
                >
                  <ImgS src={img.image_url} />
                </OneImage>
              );
            })
          )}
        </SliderDiv>
      </Wrapper>
      
    </Container>
  );
};

export default Pdetails;

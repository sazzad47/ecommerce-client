import React from "react";
import styled from "styled-components";
import { currencySymbol } from "../../constants";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import { CartHooks } from "../../Features";
import { Oval } from "react-loader-spinner";
import { Button } from "@mui/material";
const Container = styled.div`
 width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  box-shadow: 4px 0px 11px 0px rgba(199,199,199,0.5);
  transition all .5s ease-in-out;
  &:hover{
    box-shadow: 4px 0px 11px 0px rgba(199,199,199,1);
  }
  `;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  display: flex;
  background-color: #f7f7f7;
`;

const Image = styled.img`
  margin: auto;
  height: 80%;
  width: auto;
  object-fit: contain;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
  width: 100%;
`;

const LinkToGO = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "black",
  textDecoration: "none",
  transition: "all 0.3s ease-in-out",
  height: "25px",
  overflow: "hidden",
  margin: "10px 0px",
};

const PriceDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
  padding: 5px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1em;
  color: black;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 5px;
`;

const OldPrice = styled.span`
  font-weight: 400;
  font-size: 1em;
  color: gray;
  text-decoration: line-through;
  margin-left: 3px;
  margin-right: 3px;
`;

const OperationsDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 5px auto;
  justify-content: space-around;
`;
const BuDiv = styled.div`
  flex: 1;
  display: flex;
  ${tablet({
    justifyContent: "center",
  })}
  ${mobile({
    justifyContent: "center",
  })}
`;

const ProductCard = ({ img, name, price, oldPrice, deal, id }) => {
  const { useCartOperations } = CartHooks;
  const { AddingItem, AddLoading } = useCartOperations();

  const handleAdding = async () => {
    await AddingItem({
      product_id: id,
      quantity: 1,
    });
  };
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <TitleDiv>
          <Link style={{ ...LinkToGO }} to={`/products/${name}/${id}`}>
            {name} {id}
          </Link>
        </TitleDiv>

        <OperationsDiv>
          <PriceDiv>
            <Price>
              {price} {currencySymbol}
              {deal ? "|" : ""}
              {deal ? <OldPrice>${oldPrice}</OldPrice> : ""}
            </Price>
          </PriceDiv>
          <BuDiv>
            <Button variant="contained" onClick={() => handleAdding()}>
              {AddLoading ? (
                <Oval color="white" width={20} height={20} />
              ) : (
                "ADD TO CART"
              )}
            </Button>
          </BuDiv>
        </OperationsDiv>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;

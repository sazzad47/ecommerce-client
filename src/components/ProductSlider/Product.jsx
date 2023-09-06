import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CartHooks } from "../../Features";
import { Oval } from "react-loader-spinner";
import { currencySymbol } from "../../constants";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  z-index: 100;
  padding: 0px 5px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transform: translate(0px, 20px);
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  margin: 30px;
  position: relative;
  &:hover ${Icon} {
    transform: translate(0px, 0px);
  }
  &:hover ${Info} {
    opacity: 1;
  }
  width : 200px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-contents: center;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  height: 200px;
  overflow:hidden;
`;

const Image = styled.img`
  width: auto;
  height:100%;
  margin: auto;
  object-fit: cover;
`;
const Sale = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 50%;
  display: flex;
  z-index: 101;
`;

const SaleRange = styled.p`
  color: white;
  margin: auto;
  font-weight: bold;
  font-size : 14px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0px 15px;
  text-align: center;
`;
const LinkToGO = styled.p`
  font-weight: bold;
  font-size: 1em;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const PriceDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
`;
const Price = styled.span`
  font-weight: 400;
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

const Product = ({ deal, item }) => {
  const { useCartOperations } = CartHooks;
  const { AddingItem, AddLoading } = useCartOperations();

  const handleAdding = async () => {
    await AddingItem({
      product_id: item.id,
      quantity: 1,
    });
  };
  return (
    <Container>
      <Wrapper>
        <ImageDiv>
          <Image src={item.images[0].image_url} />
        </ImageDiv>
        <TitleDiv>
          <LinkToGO href="#">{item.name}</LinkToGO>
        </TitleDiv>
        <PriceDiv>
          <Price>
            {deal ? item.price - item.price * (deal / 100) : item.price} {currencySymbol}
            {deal ? "|" : ""}
            {deal ? <OldPrice>{currencySymbol} {" "} {item.price}</OldPrice> : ""}
          </Price>
        </PriceDiv>
      </Wrapper>
      <Info>
        <Icon onClick={() => handleAdding()} role="button">
          {AddLoading ? (
            <Oval width={15} height={15} color="black" />
          ) : (
            <ShoppingCartOutlined />
          )}
        </Icon>
        <Icon>
          <Link to={`/products/${item.name}/${item.id}`} className="clear">
            {" "}
            <SearchOutlined />{" "}
          </Link>
        </Icon>
      </Info>
      {deal ? (
        <Sale>
          <SaleRange>{deal}%</SaleRange>
        </Sale>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Product;

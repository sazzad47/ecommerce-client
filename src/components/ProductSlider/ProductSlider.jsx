import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { colorsPalette, SiteMargin } from "../../constants";
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  width: ${(props) => (props.width == "margin" ? SiteMargin : "100%")}%;
  margin: auto;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Begin = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
const TitleCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colorsPalette["5"]};
  padding: 15px;
  border-radius: 0px 30px;
  width: fit-content;
  ${tablet({
    padding: "10px",
  })}
  ${mobile({
    padding: "10px",
  })}

display:flex;
`;
const TitleText = styled.h2`
  color: white;
  margin: auto;
  ${tablet({
    fontSize: "15px",
  })}
  ${mobile({
    fontSize: "15px",
  })}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const ProductsContainer = styled.div``;

const ProductSlider = ({ lst, title, w }) => {
  return (
    <Container width={w}>
      <Wrapper>
        <Begin>
          <Title>
            <TitleCon>
              <TitleText>{title}</TitleText>
            </TitleCon>
          </Title>
        </Begin>
        <ProductsContainer>
          <GridContainer>
            {lst.map((item) => {
              return <Product key={item.id} item={item} deal={item.discount} />;
            })}
          </GridContainer>
        </ProductsContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductSlider;

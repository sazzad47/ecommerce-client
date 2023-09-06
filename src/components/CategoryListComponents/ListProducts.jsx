import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { mobile, tablet } from "../../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 20%);
  padding: 10px;
  gap: 15px;
  ${tablet({
    display: "grid",
    gridTemplateColumns: "repeat(2,50%)",
    padding: "10px",
  })}
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ListProducts = ({ products, grid , center}) => {
  return (
    <Container>
      <Wrapper grid={grid || 5} className={`${center && "j-center"}`}>
        {products.map((item) => {
          const sale = item.price - (item.discount / 100) * item.price;
          return (
            <ProductCard
              key={item.id}
              img={item.first_image}
              name={item.name}
              price={item.discount ? sale : item.price}
              deal={item.discount}
              oldPrice={item.price}
              id={item.id}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ListProducts;

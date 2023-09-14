import React, { useState, useContext } from "react";
import styled from "styled-components";
import { colorsPalette, PAGINATION_LIMIT } from "../../constants";
import { mobile, tablet } from "../../responsive";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "./Filter";
import ListProducts from "./ListProducts";
import Pagination from "@mui/material/Pagination";
import { CategoryContext } from "../../pages/CategoryList/CategoryList";

const Container = styled.div`
  margin: 5px auto;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
  })}
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const FilterDiv = styled.div`
  flex: 2;
  background-color: white;
  height: fit-content;
  position: sticky;
  top: 10px;
  ${tablet({
    display: "none",
  })}
  ${mobile({
    display: "none",
  })}
`;

const PruductsDiv = styled.div`
  flex: 9;
  background-color: white;
  height: fit-content;
`;

const HeadButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: ${colorsPalette["3"]};
  }
  display: none;
  ${tablet({
    display: "flex",
  })}
  ${mobile({
    display: "flex",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 3px;
  color: ${colorsPalette["4"]};
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  dispay: flex;
  align-items: center;
`;

const DisplayFilter = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 3000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transform: translate(${(props) => props.dis}, 0px);
  transition: all 0.5s ease-in-out;
  display: none;
  ${tablet({
    display: "block",
  })}
  ${mobile({
    display: "block",
  })}
`;

const HigherDiv = styled.div`
  display: flex;
  padding: 10px;
`;
const NoProductsDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
flex:1;
display:flex;
justify-content ${(props) => props.dir};
align-items:center;
`;

const PaginationDiv = styled.div`
  width: 100%;
`;

const Main = () => {
  const [Show, setShow] = useState(true);
  const { count, pageNumber, changePage, listOfProducts } =
    useContext(CategoryContext);
  return (
    <Container>
      <Wrapper>
        <FilterDiv>
          <Filter />
        </FilterDiv>
        <HeadButton
          onClick={() => {
            setShow(false);
          }}
        >
          <FilterListIcon />
          <Button>FILTER</Button>
        </HeadButton>
        <PruductsDiv>
          {listOfProducts?.length ? (
            <ListProducts products={listOfProducts} />
          ) : (
            <NoProductsDiv className="j-center a-center d-flex">
              <img src="https://i.ibb.co/x8T1JpN/download-removebg-preview.png" />
            </NoProductsDiv>
          )}
        </PruductsDiv>
      </Wrapper>
      <DisplayFilter dis={Show ? "100vw" : "0vw"}>
        <div style={{padding: "1rem"}} >
        <HigherDiv>
          <Div dir="strat">
            <h1>FILTER</h1>
          </Div>
          <Div
            dir="end"
            onClick={() => {
              setShow(true);
            }}
          >
            <span style={{ cursor: "pointer" }}>X</span>
          </Div>
        </HigherDiv>
        <Filter />
        </div>
      </DisplayFilter>
      {count ? (
        <PaginationDiv style={{marginTop: "1rem"}} className="d-flex j-center">
          <Pagination
            count={Math.ceil(count / PAGINATION_LIMIT)}
            variant="outlined"
            color="primary"
            page={pageNumber}
            onChange={(event, value) => {
              changePage(value);
            }}
          />
        </PaginationDiv>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Main;

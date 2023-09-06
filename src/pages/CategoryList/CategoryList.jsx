import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Layout, Loading, CategoryMain } from "../../components";
import { CategoriesHooks } from "../../Features";
import { mobile, tablet } from "../../responsive";
import { SiteMargin } from "../../constants";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: ${SiteMargin}%;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(rgba(0, 51, 102, 0.1), rgba(0, 51, 102, 0.1)),
    url(${(props) => props.url}) center no-repeat;
  background-size: cover;
  ${tablet({
    height: "200px",
    backgroundSize: "100% 100%",
  })}
  ${mobile({
    height: "80px",
    backgroundSize: "100% 100%",
  })}
`;

export const CategoryContext = createContext();

const CategoryList = () => {
  const { id } = useParams();
  const { useCategoryList } = CategoriesHooks;
  const [listOfProducts, setListOfProducts] = useState([]);

  const {
    categoryData,
    DataLoading,
    Products,
    setPageNumber,
    pageNumber,
    ProductsPaginateLoading,
    ProductsRefetch,
  } = useCategoryList(id, null);

  useEffect(() => {
    ProductsRefetch();
  }, [pageNumber]);
  useEffect(() => {
    setListOfProducts(Products?.data.products);
  }, [DataLoading]);

  return (
    <CategoryContext.Provider
      value={{
        changePage: (number) => {
          setPageNumber(number);
        },
        count: Products?.data.productsCount,
        pageNumber,
        props: categoryData?.data.Props,
        listOfProducts,
      }}
    >
      <Layout>
        {DataLoading || (ProductsPaginateLoading && <Loading />)}
        <Container>
          <Banner url={categoryData?.data.category.banner_url} />
          <>
            <CategoryMain />
          </>
        </Container>
      </Layout>
    </CategoryContext.Provider>
  );
};

export default CategoryList;

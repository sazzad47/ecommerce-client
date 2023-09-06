import React, { createContext, useEffect } from "react";
import styled from "styled-components";
import {
  BreadCrumb,
  PDetails,
  Layout,
  Loading,
  PTabs,
  ProductSlider,
  ScrollToTop,
} from "../../components";
import { ProductHooks } from "../../Features";
import { useParams } from "react-router";
import { AddToLastViews, getLasViews } from "../../constants";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;
const Wrapper = styled.div``;
export const ProductContext = createContext();
const ProductDetails = () => {
  const { id } = useParams();
  const { useProductDeatils } = ProductHooks;
  const { productData, productDataLoading } = useProductDeatils(id);

  useEffect(() => {
    AddToLastViews(productData?.data.product);
  }, [productData]);
  return (
    <Layout>
      <ScrollToTop />
      <ProductContext.Provider
        value={{
          productData: productData?.data.product,
        }}
      >
        <Container>
          <Wrapper>
            {productDataLoading && <Loading />}

            <BreadCrumb />
            <PDetails />
          </Wrapper>
          <PTabs />
          <ProductSlider title={"Recent views"} lst={getLasViews()} w={""} />
        </Container>
      </ProductContext.Provider>
    </Layout>
  );
};

export default ProductDetails;

import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { HomeHooks } from "../../Features";
import { Oval } from "react-loader-spinner";
import ProductSlider from "../ProductSlider/ProductSlider";
const Section = styled.section`
  background-color: #f9f9f9;
  padding: 50px 0;
`;

const RecommendedProducts = () => {
  const { useRecommendations } = HomeHooks;
  const { GetRecommend, RecommendData, RecommendLoading, RecommendSuccess } =
    useRecommendations();

  useEffect(() => {
    GetRecommend();
  }, []);

  return (
    <Section className="d-flex-column a-start">
      {RecommendLoading && (
        <div className="d-flex j-center a-center">
          <Oval width={50} height={50} color="black" />
        </div>
      )}
      {!RecommendLoading && RecommendSuccess && (
        <ProductSlider
          w={"margin"}
          title={"Recommended"}
          lst={RecommendData?.data?.recommendProducts}
        />
      )}
    </Section>
  );
};

export default RecommendedProducts;

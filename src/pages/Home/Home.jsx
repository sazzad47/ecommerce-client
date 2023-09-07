import React, { useEffect } from "react";
import {
  Layout,
  CategoryLine,
  ProductSlider,
  RecommendedProducts,
  MostViewedProduct,
} from "../../components";
import Slider from "./Slider";
import { HomeHooks } from "../../Features";
import { Oval } from "react-loader-spinner";
const Home = () => {
  const { useHome } = HomeHooks;
  const { GetInitial, InitialData, InitialLoading, InitialSuccess } = useHome();
  console.log('initialData', InitialData)
  useEffect(() => {
    GetInitial();
  }, []);

  return (
    <Layout>
      {InitialLoading && (
        <>
          <div className="d-flex j-center mt-5">
            <Oval color="black" width={100} height={100} />
          </div>
        </>
      )}
      {!InitialLoading && InitialSuccess && (
        <>
          <Slider lst={InitialData?.data.SliderImages} />
          <CategoryLine />
          <ProductSlider
            w={"margin"}
            title={"Best Deals"}
            lst={InitialData?.data.Deals}
          />
          <ProductSlider
            w={"margin"}
            title={"New in"}
            lst={InitialData?.data.newestProducts}
          />
          <RecommendedProducts />

        </>
      )}
    </Layout>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import { SiteMargin } from "../../constants";
import { mobile, tablet } from "../../responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Container = styled.div`
  width: ${SiteMargin}%;
  margin: 10px auto;
  ${mobile({
    margin: "20px auto",
  })}

  ${tablet({
    margin: "20px auto",
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.url});
  background-size : 100%;
  background-repeat : no-repaet;
  background-position : center;
  border-radius: 10px;
  ${tablet({
    height: "140px",
    backgroundSize: "100% 100%",
  })}
  ${mobile({
    height: "110px",
    backgroundSize: "100% 100%",
  })}
`;

const Slideer = ({ lst }) => {

  return (
    <Container>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {lst.map((img) => {
          return (
            <SwiperSlide>
              <Wrapper url={img.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Slideer;

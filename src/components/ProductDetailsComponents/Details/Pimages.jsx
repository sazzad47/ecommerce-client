import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ProductContext } from "../../../pages/ProductDetails/ProductDetails";
import { mobile, tablet } from "../../../responsive";

const Container = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  ${tablet({
    flexDirection: "column-reverse",
  })}
  ${mobile({
    flexDirection: "column-reverse",
  })}
`;

const ImageDiv = styled.div`
  flex: 12;
  margin: 5px;
  background-color: ${(props) => props.c};
  overflow: hidden;
  height 600px;
`;

const ImgS = styled.img`
  width: auto;
  height: 100%;
`;

const ImgSelected = styled.img`
  width: auto;
  max-width : 100%;
  max-height 100%;
`;

const SliderDiv = styled.div`
  flex: 2;
  margin: 5px;
  background-color: ${(props) => props.c};
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  ${tablet({
    flexDirection: "row",
    overflowX: "auto",
  })}
  ${mobile({
    flexDirection: "row",
    overflowX: "auto",
  })}
`;

const OneImage = styled.div`
  width: 100%;
  height: 100px;
  margin: 15px 2px;
  background-color: ${(props) => props.c};
  cursor: pointer;
  opacity: 0.8;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`;
const Pimages = () => {
  const { productData } = useContext(ProductContext);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(productData?.images[0].image_url);
  }, [productData?.images]);
  const handleClick = (url) => {
    setSelected(url);
  };
  return (
    <Container>
      <Wrapper>
        <SliderDiv c={"transparent"}>
          {React.Children.toArray(
            productData?.images.map((img) => {
              return (
                <OneImage
                  c={"transparent"}
                  className={img.image_url == selected && "opacity-1"}
                  onClick={() => handleClick(img.image_url)}
                >
                  <ImgS src={img.image_url} />
                </OneImage>
              );
            })
          )}
        </SliderDiv>
        <ImageDiv c={"transparent"} className="d-flex j-center">
          <ImgSelected src={selected} alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Pimages;

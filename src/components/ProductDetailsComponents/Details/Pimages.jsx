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
  background-color: ${(props) => props.c};
  overflow: hidden;
  height 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const ImgSelected = styled.img`
  width: auto;
  max-width : 100%;
  max-height 100%;
`;


const Pimages = ({selected}) => {
 
  return (
    <Container>
      <Wrapper>
        <ImageDiv c={"transparent"} className="d-flex j-center">
          <ImgSelected src={selected} alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Pimages;

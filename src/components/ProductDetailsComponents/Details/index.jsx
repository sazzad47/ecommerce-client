import React from 'react'
import styled from 'styled-components';
import Pimages from './Pimages';
import Pdetails from './Pdetails';
import {mobile , tablet} from '../../../responsive'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductContext } from '../../../pages/ProductDetails/ProductDetails';
const Container = styled.div`
`

const Wrapper = styled.div`
display:flex;
gap: 10px;
${mobile({
  flexDirection:"column"
})}
`

const Div = styled.div`
flex:1;
margin:5px;
background-color:${props => props.c}
`
const Details = () => {
  const { productData } = useContext(ProductContext);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(productData?.images[0].image_url);
  }, [productData?.images]);
  

  return (
    <Container>
        <Wrapper>
                <Div c={"transparent"}>
                  <Pimages selected={selected} />
                </Div>
                <Div c={"transparent"}>
                  <Pdetails setSelected={setSelected} />
                </Div>
        </Wrapper>
    </Container>
  )
}

export default Details
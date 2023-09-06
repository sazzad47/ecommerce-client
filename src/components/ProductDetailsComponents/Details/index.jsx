import React from 'react'
import styled from 'styled-components';
import Pimages from './Pimages';
import Pdetails from './Pdetails';
import {mobile , tablet} from '../../../responsive'
const Container = styled.div`
`

const Wrapper = styled.div`
display:flex;
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
  return (
    <Container>
        <Wrapper>
                <Div c={"transparent"}>
                  <Pimages />
                </Div>
                <Div c={"transparent"}>
                  <Pdetails />
                </Div>
        </Wrapper>
    </Container>
  )
}

export default Details
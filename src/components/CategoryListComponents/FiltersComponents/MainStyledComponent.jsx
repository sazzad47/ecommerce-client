import styled from 'styled-components';
import { colorsPalette } from '../../../constants';

export const Container = styled.div`

`
export const Wrapper = styled.div`
max-height:400px;
overflow-y:auto;
overflow-x:hidden;
&::-webkit-scrollbar {
    width: .3em;
  }

&::-webkit-scrollbar-thumb {
    background-color: ${colorsPalette['3']};
  }
`
export const Head = styled.div`
padding : 2px;
display:flex;
`

export const HeadTitle = styled.div`
flex:1;
display:flex;
justify-content : start; 
font-size:13px;
`

export const HeadButton = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content : end; 
`

export const Title = styled.p`

`
export const Button = styled.button`
border : none;
padding : 3px;
color : ${colorsPalette['4']};
background-color : transparent;
transition:all .2s ease-in-out;
border-radius:20px;
font-size:13px;
&:hover{
    background-color:${colorsPalette['3']}
}
cursor:pointer;
`
export const InputContainer = styled.div`
display:flex;
margin-top:-1px;
justify-content:center;
align-items:center;
`

export const Input = styled.input`
width:${props => props.width};
padding:5px;
margin: 0px 5px;
`

export const SearchContainer = styled.div`
border: 0.5px solid black;
background-color:white;
display: flex;
align-items: center;
width:fit-content;
padding:5px;
border-radius:15px;
margin:5px auto;
width:90%;
`;

export const InputIcon = styled.input`
  border: none;
  outline : none;
  width:100%;
`;
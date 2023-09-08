import styled from 'styled-components'
import { mobile , tablet } from "./responsive";


export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline : none;
  ${mobile({ width: "50px" })}
`;

export const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`
;

export const Container = styled.div`
    height : 85px;
    ${mobile({ height: "50px" })}
`
export const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items: center;
    justify-content : space-between;
    ${mobile({ padding: "10px 0px" })}
`

export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const AnnoucmentContainer = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;

export const SliderContainer = styled.div`
width: 100%;
height: fit-content;
padding-bottom:10px;
display: flex;
position: relative;
overflow: hidden;
`;


export const Arrow = styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius : 50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top :0;
bottom:0;
margin:auto;
left : ${props => props.dir === "left" ? "10px" : 'unset'};
right : ${props => props.dir === "right" ? "10px" : 'unset'};
cursor:pointer;
opacity:0.5;
z-index:2;
`

export const SliderWrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;

export const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

export const Image = styled.img`
height: 80%;
`;


export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


export const FooterContiner = styled.div`
padding-bottom: 20px;
width: 100%;
max-width: 1000px;
margin: 0 auto;
display: flex;
${mobile ({
  flexDirection : "column"
})}

${tablet ({
  flexDirection : "column"
})}
`;

export const FooterLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 0px 20px;
`;

export const FooterCenter = styled.div`
flex: 1;
padding: 5px 20px;
`;


export const FooterRight = styled.div`
flex: 1;
padding: 5px 20px;
`;
export const Left   = styled.div`flex:1;  align-items: center; display:flex;`
export const Center = styled.div`flex:1; text-align:center;`
export const Right  = styled.div`flex:1; display : flex; justify-content: flex-end;   ${mobile({ flex: 2, justifyContent: "center" })}`
export const Language  = styled.span`font-size:14px; cursor:pointer   ${mobile({ display: "none" })}
`
export const LoadingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
`;

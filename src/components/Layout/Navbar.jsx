import React, { useState } from "react";
import { colorsPalette } from "../../constants";
import styled from "styled-components";
import { ExpandCircleDown } from "@mui/icons-material";
import { mobile, tablet, laptop } from "../../responsive";
import { CategoriesHooks } from "../../Features";


const Container = styled.div`
  background-color: ${colorsPalette["1"]};
  padding: 0 1rem;
`;

const Wrapper = styled.div` 
  width: 160px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}

  ${tablet({
    flexDirection: "column",
  })}
`;

const OnHoverAll = styled.div`
  position: absolute;
  border: 1px solid #34d8eb;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  top: ${(props) => props.h};
  left: 0;
  min-height: auto;
  max-height: 90vh;
  overflow: auto;
  padding: 5px;
  width: fit-content;
  max-width: 700px;
  min-width: 200px;
  background-color: white;
  display: none;
  z-index: 2000;
  -webkit-box-shadow: 10px 10px 38px 0px rgba(232, 232, 232, 1);
  -moz-box-shadow: 10px 10px 38px 0px rgba(232, 232, 232, 1);
  box-shadow: 10px 10px 38px 0px rgba(232, 232, 232, 1);

  ${mobile({
    flexDirection: "column",
  })}

  ${tablet({
    flexDirection: "column",
  })}
`;

const All = styled.div` 
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-right: 1px solid rgb(226, 229, 241);
  &:hover ${OnHoverAll} {
    display: flex;
  }
  ${laptop({
    flex: "2",
  })}
`;

const CategoryItem = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    display: block;
  }
`;

const MainLink = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${colorsPalette["4"]};
 
`;


const Navbar = ({ categories }) => {
  const [ObjectH, SetObjectH] = useState({});
  const [Show, SetShow] = useState(false);
  const { useCategories } = CategoriesHooks;
  const { data, isLoading } = useCategories();
  const handleHover = (obj) => {
    SetObjectH(obj);
    SetShow(true);
  };
  return (
    <Container>
      <Wrapper>
        <All >
          <MainLink>{isLoading ? "Loading . . ." : "ALL CATEGORIES"}</MainLink>
          <ExpandCircleDown
            sx={{
              margin: "0px 10px",
              fontSize: "12px",
              color: colorsPalette["4"],
            }}
          />
          <OnHoverAll
        
            h={"45px"}
            onMouseLeave={() => {
              SetShow(false);
            }}
          >
            <div style={{width: "100%", margin: "0.4rem auto"}}>
              {React.Children.toArray(
                data?.data.map((category) => {
                  return (
                    <CategoryItem
                      onMouseEnter={() => {
                        handleHover(category);
                      }}
                    >
                      <a className="anchor" href={`/category/${category.id}`}>
                        {category.title}
                      </a>
                    </CategoryItem>
                  );
                })
              )}
            </div>
          </OnHoverAll>
        </All>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

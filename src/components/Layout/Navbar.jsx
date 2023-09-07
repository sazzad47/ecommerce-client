import React, { useState } from "react";
import { colorsPalette } from "../../constants";
import styled from "styled-components";
import { ExpandCircleDown } from "@mui/icons-material";
import { mobile, tablet, laptop } from "../../responsive";
import { CategoriesHooks } from "../../Features";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${colorsPalette["1"]};
  padding: 0 1rem;
`;

const Wrapper = styled.div`
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
  top: ${(props) => props.h};
  left: 0;
  min-height: 30vh;
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
    width: "100vw",
  })}

  ${tablet({
    flexDirection: "column",
    width: "100vw",
  })}
`;
const Menu = styled.div`
  flex: 1;
  border-right: 1px solid rgb(226, 229, 241);
  background-color: ${colorsPalette["3"]};
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const MenueItem = styled.p`
  color: black;
  font-size: 13px;
  &:hover {
    color: ${colorsPalette["4"]};
  }
`;

const All = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover ${OnHoverAll} {
    display: flex;
  }
  border-right: 1px solid rgb(226, 229, 241);

  ${laptop({
    flex: "2",
  })}
`;

const MainLink = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${colorsPalette["4"]};
`;

const Cats = styled.div`
  flex: 8;
  display: flex;
  justify-content: start;
  align-items: center;
  ${mobile({
    justifyContent: "center",
    padding: "15px",
  })}

  ${tablet({
    justifyContent: "center",
    padding: "15px",
  })}
`;

const Url = styled.div`
  text-decoration: none;
  color: ${colorsPalette["4"]};
  font-weight: 600;
  opacity: 1;
  transition: all 0.4s ease-in-out;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
  margin: 0px 20px;
  ${mobile({
    fontSize: "15px",
  })}

  ${tablet({
    fontSize: "15px",
  })}
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
        <All>
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
            <Menu>
              {React.Children.toArray(
                data?.data.map((category) => {
                  return (
                    <MenueItem
                      onMouseEnter={() => {
                        handleHover(category);
                      }}
                    >
                      <a className="anchor" href={`/category/${category.id}`}>
                        {category.title}
                      </a>
                    </MenueItem>
                  );
                })
              )}
            </Menu>
          </OnHoverAll>
        </All>
        {/* <Cats>
          <Url>
            <Link className="clear" to={"/about"}>
              About
            </Link>
          </Url>
          <Url>
            <Link className="clear" to={"/contact"}>
              Contact
            </Link>
          </Url>
        </Cats> */}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

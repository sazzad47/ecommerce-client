import {
  PersonOutline,
  PersonAddAlt,
  ShoppingCart,
  Person,
  Search,
  Close,
} from "@mui/icons-material";
import React from "react";
import { colorsPalette } from "../../constants";
import styled from "styled-components";
import { mobile, tablet, laptop } from "../../responsive";
import { Link } from "react-router-dom";
import useIsLogged from "../../Hooks/useIsLogged";
import Dropdown from "rc-dropdown";
import Menu, { Item as DropItem } from "rc-menu";
import { Logout } from "../../helpers/functions";
import { CartHooks } from "../../Features";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import { IconButton } from "@mui/material";

const Logo = styled.h3`
  font-weight: bold;
  color: white;
`;

const Container = styled.div`
  background-color: ${colorsPalette["4"]};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  min-height: 4rem;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  position: relative;
  ${mobile({
    fontSize: "10px",
  })}

  ${tablet({
    fontSize: "10px",
  })}
  ${laptop({
    fontSize: "11px",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  background-color: white;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  ${mobile({
    justifyContent: "start",
  })}

  ${tablet({
    justifyContent: "start",
  })}
`;
const Center = styled.div`
  flex: 6;
  align-items: center;
  display: flex;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;
const NumberOfCarts = styled.div`
  position: absolute;
  top: -5px;
  right: -7px;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const iconsLink = {
  color: "white",
};

const Header = () => {
  const { logged } = useIsLogged();
  const { useGetCartItems } = CartHooks;
  const { quantity } = useGetCartItems();

  const isMobile = useMediaQuery('(max-width:680px)');
  const isTablet = useMediaQuery('(max-width:1080px)');
  const isLaptop = useMediaQuery('(max-width:1550px)');

  const [isSearch, setIsSearch] = useState(false);
  
  const menu = (
    <Menu
      style={{ width: "120px" }}
      className="d-flex-column a-center j-center pad-10"
    >
      <DropItem key="1" className="pad-15 cursor_pointer">
        <Link className="clear" to={"/profile"}>
          Profile
        </Link>
      </DropItem>
      <DropItem key="2" className="pad-15 cursor_pointer">
        <Link to={"/myOrders"} className="clear">
          My orders
        </Link>
      </DropItem>
      <hr className="divider" />
      <DropItem
        key="3"
        className="pad-15 cursor_pointer"
        onClick={() => Logout()}
      >
        Logout
      </DropItem>
    </Menu>
  );
  return (
    <Container>
      <Wrapper>
        {!isSearch && <Left>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Logo>{isMobile? "ECOM": "ECOMMERCE"}</Logo>
          </Link>
        </Left>}
        <Center className="j-center">
          <SearchContainer>
            <form action="/search" className="w-100">
              <Input placeholder="Search by product name" name="name" />
            </form>
          </SearchContainer>
        </Center>
        {isSearch &&
        <>
        
          <SearchContainer>
          <form action="/search" className="w-100">
            <Input placeholder="Search by product name" name="name" />
          </form>
        </SearchContainer>
          <IconButton onClick={()=> setIsSearch(false)}>
            <Close sx={{color: "white"}}/>
          </IconButton>
        </>
        }
        {!isSearch && <Right>
          {!logged ? (
            <>
            {isTablet && <MenuItem 
             onClick={()=> setIsSearch(true)}
            >
                <Search
                  sx={{
                    color: "white",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </MenuItem>}
               <MenuItem>
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                 {!isTablet && "REGISTER" }
                <PersonAddAlt
                  sx={{
                    color: "white",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                   {!isTablet && "LOGIN"}
                <PersonOutline
                  sx={{
                    color: "white",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                </Link>
              </MenuItem>
            </>
          ) : (
            ""
          )}
          <MenuItem>
            <Link className="default_anchor" to={"/cart"}>
              {logged && quantity && (
                <NumberOfCarts className="d-flex j-center a-center">
                  <span>{quantity}</span>
                </NumberOfCarts>
              )}
              <ShoppingCart sx={iconsLink} />
            </Link>
          </MenuItem>
          {logged && (
            <MenuItem>
              <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
                <Link className="default_anchor">
                  <Person sx={iconsLink} />
                </Link>
              </Dropdown>
            </MenuItem>
          )}
        </Right>}
      </Wrapper>
    </Container>
  );
};

export default Header;

import {
  PersonOutline,
  PersonAddAlt,
  ShoppingCart,
  Person,
  Search,
  Close,
  Clear,
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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

const Logo = styled.h3`
  font-weight: bold;
  color: white;
`;

const Container = styled.div`
  background-color: ${colorsPalette["4"]};
  width: 100%;
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

  const isMobile = useMediaQuery("(max-width:680px)");
  const isTablet = useMediaQuery("(max-width:1080px)");

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const menu = (
    <Menu
      style={{ width: "120px", boxShadow: "none", position: "relative" }}
      className="d-flex-column a-start j-center pad-10"
    >
      <DropItem
        key="1"
        style={{ borderBottom: "1px solid #0ee7eb", width: "100%" }}
        className="cursor_pointer"
      >
        <div style={{ padding: "0.7rem" }}>
          <Link className="clear" to={"/profile"}>
            Profile
          </Link>
        </div>
      </DropItem>
      <DropItem
        key="2"
        style={{ borderBottom: "1px solid #0ee7eb", width: "100%" }}
        className="cursor_pointer"
      >
        <div style={{ padding: "0.7rem" }}>
          <Link to={"/myOrders"} className="clear">
            My orders
          </Link>
        </div>
      </DropItem>
      <DropItem
        key="3"
        style={{ width: "100%" }}
        className="cursor_pointer"
        onClick={() => Logout()}
      >
        <div style={{ padding: "0.7rem" }}>Logout</div>
      </DropItem>
    </Menu>
  );
  return (
    <Container>
      <Wrapper>
        {!isSearch && (
          <Left>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Logo>{isMobile ? "ECOM" : "ECOMMERCE"}</Logo>
            </Link>
          </Left>
        )}
        <Center className="j-center">
          <SearchContainer>
            <form
              action="/search"
              style={{ display: "flex" }}
              className="w-100"
            >
              <Input
                placeholder="Search by product name"
                name="name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <IconButton onClick={() => setSearchTerm("")}>
                  <Clear fontSize="small" sx={{ color: "black" }} />
                </IconButton>
              )}
            </form>
          </SearchContainer>
        </Center>
        {isSearch && (
          <>
            <SearchContainer>
              <form
                action="/search"
                style={{ display: "flex" }}
                className="w-100"
              >
                <Input
                  placeholder="Search by product name"
                  name="name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <IconButton onClick={() => setSearchTerm("")}>
                    <Clear fontSize="small" sx={{ color: "black" }} />
                  </IconButton>
                )}
              </form>
            </SearchContainer>

            <IconButton onClick={() => setIsSearch(false)}>
              <Close sx={{ color: "white" }} />
            </IconButton>
          </>
        )}
        {!isSearch && (
          <Right>
            {!logged ? (
              <>
                {isTablet && (
                  <MenuItem onClick={() => setIsSearch(true)}>
                    <Tooltip title="Search">
                      <Search
                        sx={{
                          color: "white",
                        }}
                      />
                    </Tooltip>
                  </MenuItem>
                )}
                <MenuItem>
                  <Link
                    to="/register"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Tooltip title="Register">
                      <PersonAddAlt
                        sx={{
                          color: "white",
                        }}
                      />
                    </Tooltip>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/login"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Tooltip title="Login">
                      <PersonOutline
                        sx={{
                          color: "white",
                        }}
                      />
                    </Tooltip>
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
                <Tooltip title="Cart">
                  <ShoppingCart sx={iconsLink} />
                </Tooltip>
              </Link>
            </MenuItem>
            {logged && (
              <MenuItem>
                <Dropdown
                  trigger={["click"]}
                  overlay={menu}
                  animation="slide-up"
                >
                  <Link className="default_anchor">
                    <Person sx={iconsLink} />
                  </Link>
                </Dropdown>
              </MenuItem>
            )}
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

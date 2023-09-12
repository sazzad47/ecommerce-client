import { createContext, useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../../components";
import { colorsPalette, currencySymbol, SiteMargin } from "../../constants";
import { mobile, tablet } from "../../responsive";
import { CartHooks } from "../../Features";
import CartProduct from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { Button, Paper } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Container = styled.div``;

const Wrapper = styled.div`
  width: ${SiteMargin}%;
  margin: auto;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
    gap: "10px",
  })}

  ${tablet({
    flexDirection: "column",
    gap: "10px",
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? colorsPalette["4"] : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}

  ${tablet({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 15px;
  ${mobile({
    position: "unset",
  })}

  ${tablet({
    position: "unset",
  })}
`;

const SummaryTitle = styled.h2`
  text-align: center;
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

export const cartContext = createContext();

const Cart = () => {
  const { useGetCartItems } = CartHooks;
  const { items, quantity, cart_id, total, setCartTotal } = useGetCartItems();
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartTotal();
  }, [items]);

  const navigate = useNavigate();
  const handleCheckout = () => {
    if (!items.length) {
      NotificationManager.error("No items in the cart");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <cartContext.Provider
      value={{
        total,
        cart_id,
      }}
    >
      <Layout>
        <Container>
          <Wrapper>
            <Top>
              <Link to={"/"}>
                <Button
                  variant="contained"
                  startIcon={<ShoppingBasketIcon fontSize="1.5rem" />}
                >
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </Top>
            <Bottom>
              <Info>
                {items?.map((item) => {
                  return (
                    <>
                      <CartProduct key={item.id} item={item} />
                    </>
                  );
                })}
              </Info>
              <Summary>
                <Paper sx={{padding: "1rem"}} elevation={2}>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>
                      {total} {currencySymbol}
                    </SummaryItemPrice>
                  </SummaryItem>
                  <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AddShoppingCartIcon fontSize="1.5rem" />} onClick={() => handleCheckout()}>CHECKOUT NOW</Button>
                </Paper>
              </Summary>
            </Bottom>
          </Wrapper>
        </Container>
      </Layout>
    </cartContext.Provider>
  );
};

export default Cart;

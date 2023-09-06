import React, { useContext, useEffect } from "react";
import { OrderReviewContainer, SectionTitle } from "./OrderReviewStyles";
import OrderItem from "./OrderItem";
import UserDetails from "./UserDetails";
import CartTotal from "./CartTotal";
import PaymentMethod from "./PaymentMethod";
import { checkoutContext } from "../../Checkout";
import { CartHooks, UserHooks } from "../../../../Features";
const OrderReview = () => {
  const { useUserDetails } = UserHooks;
  const { useGetCartItems } = CartHooks;

  const { user } = useUserDetails();
  const { items, setCartTotal, total } = useGetCartItems();

  const { paymentMethod, selectedAddress } = useContext(checkoutContext);

  useEffect(() => {
    setCartTotal();
  }, []);

  return (
    <OrderReviewContainer>
      <SectionTitle>Order Review</SectionTitle>

      {items.map((item, index) => (
        <OrderItem key={index} item={item} />
      ))}

      <UserDetails user={user} address={selectedAddress} />

      <CartTotal total={total} />

      <PaymentMethod method={paymentMethod} />
    </OrderReviewContainer>
  );
};

export default OrderReview;

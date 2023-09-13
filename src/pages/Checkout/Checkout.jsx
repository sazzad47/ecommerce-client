import React, { useState, createContext, useEffect } from "react";
import { Layout } from "../../components";
import { Stepper, Step } from "react-form-stepper";
import { ConfirmAddress, OrderReview, PaymentMethods } from "./Screens";
import { OrderHooks, CartHooks } from "../../Features";
import { NotificationManager } from "react-notifications";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export const checkoutContext = createContext();

const Checkout = () => {
  const [active, setActive] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const { useOrderOperations } = OrderHooks;
  const { useGetCartItems } = CartHooks;
  const { total, items, cart_id, GetCartItems } = useGetCartItems();
  const { CreateLoading, Submit, CreateSuccess } = useOrderOperations();
  const navigate = useNavigate();

  const handleSubmitOrder = () => {
    if (!selectedAddress?.id) {
      NotificationManager.error("No Address specified");
      return;
    }
    Submit({
      address_id: selectedAddress.id,
      total,
      status: "PENDING",
      recived_time: null,
      items,
      cart_id,
    });
  };

  useEffect(() => {
    if (CreateSuccess) {
      GetCartItems();
      localStorage.setItem("orderCreationSuccesfull", true);
      navigate("/");
    }
  }, [CreateSuccess, CreateLoading]);

  return (
    <checkoutContext.Provider
      value={{
        setSelectedAddress,
        selectedAddress,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      <Layout>
        <Stepper
          activeStep={active}
          connectorStateColors
          stepClassName="custom-stepper"
        >
          <Step label="Address confiramtion" />
          <Step label="Payment methods" />
          <Step label="Order overview" />
        </Stepper>

        <div className="mt-3 d-flex j-center">
          {active == 0 && <ConfirmAddress />}
          {active == 1 && <PaymentMethods />}
          {active == 2 && <OrderReview />}
        </div>

        <div className="d-flex j-center mt-3 g-10">
          {active > 0 && (
            <Button variant="contained" sx={{padding: "0.5rem 2rem"}}  onClick={() => setActive(active - 1)}>Back</Button>
          )}
          {active < 2 && (
            <Button variant="contained" sx={{padding: "0.5rem 2rem"}} onClick={() => setActive(active + 1)}>Next</Button>
          )}
          {active == 2 && (
            <Button variant="contained" sx={{padding: "0.5rem 2rem"}} onClick={() => handleSubmitOrder()}>
              {CreateLoading ? (
                <Oval color="white" width={20} height={20} />
              ) : (
                "Submit"
              )}
            </Button>
          )}
        </div>
      </Layout>
    </checkoutContext.Provider>
  );
};

export default Checkout;

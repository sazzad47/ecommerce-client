import React, { useEffect } from "react";
import { NotificationManager } from "react-notifications";
const Flash = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("successRegistration")) {
      NotificationManager.success("Success registration please login now");
      localStorage.removeItem("successRegistration");
    }
    if (localStorage.getItem("orderCreationSuccesfull")) {
      NotificationManager.success("We got your order, thanks for purchasing");
      localStorage.removeItem("orderCreationSuccesfull", true);
    }
  }, []);
  return <>{children}</>;
};

export default Flash;

// This component purpose is to check if there is to transfer messages between pages

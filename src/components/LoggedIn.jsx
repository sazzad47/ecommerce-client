import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/Users/state";
import { useNavigate } from "react-router";

const LoggedIn = ({ children, protect }) => {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Loggedin");
    if (user && !protect) {
      navigate("/");
    }
    if (!user && protect) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default LoggedIn;

// a component to protect routes according to login status

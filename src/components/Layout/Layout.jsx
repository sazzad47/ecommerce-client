import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div style={{minHeight: "100vh"}}>
      <Header />
      <Navbar />
      <div style={{minHeight: "50vh", marginBottom: "2rem"}}>
      {children}
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div style={{minHeight: "100vh", width: "100%"}}>
      <Header />
      <Navbar />
      <div style={{minHeight: "50vh"}}>
      {children}
      </div>
      <div style={{marginTop: "2rem", backgroundColor: "#f5f7f7", paddingTop: "1rem"}}>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;

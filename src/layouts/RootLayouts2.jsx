import React from "react";
import LoginNavbar from "../components/Navbar/LoginNavbar";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

const RootLayouts2 = () => {
  return (
    <div>
      <LoginNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayouts2;

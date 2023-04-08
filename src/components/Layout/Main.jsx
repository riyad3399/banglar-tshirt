import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    <Toaster />
    </div>
  );
};

export default Main;

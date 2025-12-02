import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footers from "../shared/Footers";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
      <Footers />
    </div>
  );
};

export default MainLayout;

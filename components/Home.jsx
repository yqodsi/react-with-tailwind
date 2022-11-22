import React from "react";
import { Outlet } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const Home = () => {
  return (
    <div >
      <HomeLayout />
      <div className="mt-80 bg-slate-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

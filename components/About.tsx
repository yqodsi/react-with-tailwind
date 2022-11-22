import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p className="bg-red-800 h-16 capitalize">about</p>
      <Outlet/>
    </div>
  );
};

export default About;

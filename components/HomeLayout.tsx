import React from "react";
import { BiLogOut } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { FiMenu } from "react-icons/fi";

const navElement = [
  {
    name: "Home",
    path: "/home",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "About",
    path: "/about",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Login",
    path: "/login",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Login",
    path: "/login",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Login",
    path: "/login",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Login",
    path: "/login",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
  {
    name: "Login",
    path: "/login",
    icon: <SiReact size={40} color="dodgerblue"/>,
  },
]

export const NavElement = ({children, name}) => {
  return (
    <div className="flex border-2 hover:border-[#19b3f0] cursor-pointer border-[#e3e4e6] w-[100%] p-3 gap-4 items-center rounded-md ">
      {children}

      <p className="text-lg cursor-pointer ">{name}</p>
    </div>
  );
};

const HomeLayout = () => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center fixed top-0 left-80 right-0 bg-white h-16  shadow-[0.5rem_0.25rem_0.5rem_0.1rem_rgba(0,0,0,0.1)]">
        <div className="flex  justify-center  w-[5rem] h-full items-center ">
          <FiMenu
            size={36}
            style={{
              cursor: "pointer",
            }}
            color="dodgerblue"
          />
        </div>
        <div className="flex justify-evenly   w-[5rem] h-full items-center ">
          <BiLogOut size={40} color="dodgerblue" />
        </div>
      </div>
      <div className="flex flex-col justify-start pt-2 gap-4 items-start p-5 fixed  left-0 shadow-md shadow-neutral-300 xl:bg-transparent bottom-0 top-0 w-[20rem] ">
        <div className="flex  justify-start pl-4 gap-3 items-center w-[100%] h-[3rem] rounded-full bg-[#e1f6ff] ">
          <SiReact size={40} color="dodgerblue" />
          <p className="text-lg font-medium">Dashboard</p>
        </div>
        {navElement.map((item, i) => (
          <NavElement key={i} name={item.name}>
            {item.icon}
          </NavElement>
        ))}
      </div>
    </>
  );
};

export default HomeLayout;

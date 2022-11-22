import React from "react";
import { BiLogOut } from "react-icons/bi";
import { SiReact } from "react-icons/si";
const HomeLayout = () => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center fixed top-0 right-0 bg-white h-16 w-[100%] border  border-red-600">
        <div className="flex   justify-center border w-[10%] h-full items-center ">
          <SiReact size={40} color="dodgerblue" />
        </div>
        <div className="flex justify-evenly  border-red-400 border w-[10%] h-full items-center ">
          <BiLogOut size={40} color="dodgerblue" />
        </div>
      </div>
      <div className="flex flex-col justify-start pt-32 gap-4 items-start p-5 fixed top-16 left-0 shadow-md shadow-neutral-300 xl:bg-transparent h-full w-[20rem] ">
        <div className="flex border-2 hover:border-[#19b3f0] cursor-pointer border-[#b3bcc2] w-[100%] p-3 gap-4 items-center rounded-md ">
          <SiReact size={40} color="dodgerblue" />

          <p className="text-lg cursor-pointer ">Navigation</p>
        </div>
        <div className="flex border-2 hover:border-[#19b3f0] cursor-pointer border-[#b3bcc2] w-[100%] p-3 gap-4 items-center rounded-md ">
          <SiReact size={40} color="dodgerblue" />

          <p className="text-lg ">hkjzsjhdzsjskhfksjhf</p>
        </div>
        <div className="flex border-2 hover:border-[#19b3f0] cursor-pointer border-[#b3bcc2] w-[100%] p-3 gap-4 items-center rounded-md ">
          <SiReact size={40} color="dodgerblue" />

          <p className="text-lg ">Navigation</p>
        </div>
        <div className="flex border-2 hover:border-[#19b3f0] cursor-pointer border-[#b3bcc2] w-[100%] p-3 gap-4 items-center rounded-md ">
          <SiReact size={40} color="dodgerblue" />

          <p className="text-lg ">Navigation</p>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

import React from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center w-full space-x-5 h-[70px] bg-[#ffffff]">
        <GoThreeBars className="w-10 h-10 ml-4 text-[#1F9CEE]" />
        <div className="flex items-center  ">
          <img
            src="smlogo.png"
            alt="logo"
            className="w-56 h-56 object-contain"
          />
        </div>
      </div>
      <div>
        <img src="smbanner.png" alt="logos " />
      </div>
    </>
  );
};

export default Navbar;

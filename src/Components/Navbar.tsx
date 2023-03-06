import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [navpop, setNavpop] = useState(false);
  return (
    <>
      <div className="relative ">
        <div className="flex  items-center w-full space-x-5 h-[5rem] bg-[#ffffff]">
          <GoThreeBars
            className="w-10 h-10 ml-4 text-[#1F9CEE]"
            onClick={() => setNavpop(true)}
          />

          <img
            src="smlogo.png"
            alt="logo"
            className="w-56 h-56 object-contain"
          />
        </div>
        {navpop ? (
          <div className="w-[270px] h-screen z-10 absolute top-0 bg-white">
            <div className="items-center flex justify-center">
              <img
                src="smlogo.png"
                alt="logo"
                className="  w-56 h-40 object-contain"
              />
            </div>

            <div
              className="absolute right-0
            top-0 w-7 h-7 p-[0.4rem] bg-[#1F9CEE]"
            >
              <ImCross
                className="text-white  w-4 h-4 "
                onClick={() => {
                  setNavpop(false);
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;

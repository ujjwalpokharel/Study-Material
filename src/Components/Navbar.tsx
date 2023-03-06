import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [navpop, setNavpop] = useState(false);
  return (
    <>
      <div className="relative ">
        <div className="flex  items-center w-full space-x-5 h-[70px] bg-[#ffffff]">
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
          <div className="w-[230px] h-screen z-10 absolute top-0 bg-white">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>page</li>
            </ul>
            <div
              className="absolute right-0
            top-0 bg-slate-500"
            >
              <button onClick={() => setNavpop(false)}>cancel</button>
            </div>
          </div>
        ) : null}
      </div>

      <div className="z-[1]">
        <img src="smbanner.png" alt="logos " />
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { storedata } from "../store/Store";
import { useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import useStoreData from "../store/Store";
import smlogo from "../assets/smlogo.png";
import smbanner from "../assets/smbanner.png";
import { Navdata, navfull } from "../Data/Navdata";
const Navbar = () => {
  const navpop = useStoreData((state: storedata) => state.navigationpop);
  const setNavpop = useStoreData((state: storedata) => state.setNavigationpop);
  const navigate = useNavigate();

  return (
    <>
      {/* nav bar horizontal */}
      <section className="flex fixed top-0 shadow-sm shadow-gray-400  items-center w-full space-x-5 h-[5rem] bg-[#ffffff]">
        <GoThreeBars
          className="w-10 h-10 ml-4 text-[#1F9CEE] "
          onClick={() => setNavpop(true)}
        />

        <img
          src={smlogo}
          alt="logo"
          className="w-56 h-56 object-contain"
          onClick={() => navigate("/")}
        />
      </section>

      {/* nav bar vertical */}
      {navpop ? (
        <div className="w-[272px] fixed left-0 h-screen   top-0 bg-white shadow-sm shadow-gray-400 overflow-auto ">
          {/* logo */}
          <div className="items-center flex justify-center">
            <img
              src={smlogo}
              alt="logo"
              className="  w-56 h-40 object-contain"
            />
          </div>
          {/* cross logo to toggle navbar */}
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
          <section className="flex  flex-col  ">
            {Navdata.map((value: navfull, id: number) => (
              <>
                <SubHeading value={value} />
              </>
            ))}
          </section>
          <p className="absolute bottom-0 left-11 text-[#1F9CEE]">
            @StudyMaterial
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

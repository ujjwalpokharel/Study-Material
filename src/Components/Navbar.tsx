import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import useStoreData from "../store/Store";
import smlogo from "../assets/smlogo.png";
import smbanner from "../assets/smbanner.png";
const Navbar = () => {
  // nav data
  const Navdata = [
    { heading: "Home", link: "/" },
    { heading: "News", link: "/news" },
    {
      heading: "Syllabus",
      link: "/syllabus",
    },
    {
      heading: "Question Model",
      link: "/questionmodel",
    },
    {
      heading: "Notes",

      subheading: [
        { label: "BBS first year", link: "/notes/bbsfirstyear" },
        { label: "BBS second year", link: "/notes/bbssecondyear" },
        { label: "BBS third year", link: "/notes/bbsthirdyear" },
        { label: "BBS fourth year", link: "/notes/bbsfourthyear" },
      ],
    },
    { heading: "About Us", link: "/aboutus" },
  ];

  //nav pop state
  // const [navpop, setNavpop] = useState(false);
  const navpop = useStoreData((state) => state.navigationpop);
  const setNavpop = useStoreData((state) => state.setNavigationpop);
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
      <div className="z-[1] pt-[5rem]">
        <img src={smbanner} alt="logos " />
      </div>
      {/* nav bar vertical */}
      {navpop ? (
        <div className="w-[272px] fixed left-0 h-screen z-50  top-0 bg-white shadow-sm shadow-gray-400 overflow-auto ">
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
            {Navdata.map((value, id) => (
              <>
                {/* <div
                  onClick={() => {
                    {
                      value.subheading
                        ? null
                        : (navigate(`${value.link}`), setNavpop(false));
                    }
                  }}
                  className="font-bold relative flex items-center justify-between text-lg  text-[#1F9CEE] p-5"
                >
                  {value.heading} */}

                {/* {value.subheading ? (
                    <RiArrowDropDownLine
                      className="w-9 h-9"
                      onClick={() => {
                        setSylpop(!sylpop);
                      }}
                    />
                  ) : null} */}
                {/* </div> */}
                <SubHeading value={value} id={id} />

                {/* {ids == id && sylpop ? (
                  <div className="flex flex-col">
                    {value.subheading?.map((subvalue) => (
                      <>
                        <div
                          key={id}
                          className="p-5 ml-5 font-medium text-lg text-[#1F9CEE]"
                        >
                          {subvalue}
                        </div>
                        <div className="h-px w-[230px] ml-10 bg-gray-200" />
                      </>
                    ))}
                  </div>
                ) : null} */}
              </>
            ))}
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

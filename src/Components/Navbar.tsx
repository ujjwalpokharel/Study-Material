import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // nav data
  const Navdata = [
    { heading: "Home", link: "/" },
    { heading: "News", link: "/news" },
    {
      heading: "Syllabus",
      subheading: [
        "BBS first year",
        "BBS second year",
        "BBS third year",
        "BBS fourth year",
      ],
    },
    {
      heading: "Question Model",
      subheading: [
        "BBS first year",
        "BBS second year",
        "BBS third year",
        "BBS fourth year",
      ],
    },
    {
      heading: "Notes",
      subheading: [
        "BBS first year",
        "BBS second year",
        "BBS third year",
        "BBS fourth year",
      ],
    },
    { heading: "About Us", link: "/aboutus" },
  ];

  //nav pop state
  const [navpop, setNavpop] = useState(false);
  // subheading drow down
  const [ids, setIds] = useState(-1);
  const [sylpop, setSylpop] = useState(false);
  const [qmpop, setQmpop] = useState(false);
  const [nopop, setNopop] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* nav bar horizontal */}
      <section className="flex  items-center w-full space-x-5 h-[5rem] bg-[#ffffff]">
        <GoThreeBars
          className="w-10 h-10 ml-4 text-[#1F9CEE] "
          onClick={() => setNavpop(true)}
        />

        <img src="smlogo.png" alt="logo" className="w-56 h-56 object-contain" />
      </section>
      {/* nav bar vertical */}
      {navpop ? (
        <div className="w-[272px] h-screen z-50 absolute top-0 bg-white shadow-sm shadow-gray-400 overflow-auto ">
          {/* logo */}
          <div className="items-center flex justify-center">
            <img
              src="smlogo.png"
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
          <section className="flex flex-col  ">
            {Navdata.map((value, id) => (
              <>
                <div
                  onClick={() => {
                    navigate(`${value.link}`), setNavpop(false);
                  }}
                  key={id}
                  className="font-bold flex items-center justify-between text-lg  text-[#1F9CEE] p-5"
                >
                  {value.heading}

                  {value.subheading ? (
                    <RiArrowDropDownLine
                      className="w-9 h-9"
                      onClick={() => {
                        setSylpop(!sylpop), setIds(id);
                      }}
                    />
                  ) : null}
                </div>
                <div className="h-px w-[240px] ml-5 bg-gray-200" />
                {ids == id && sylpop ? (
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
                ) : null}
              </>
            ))}
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

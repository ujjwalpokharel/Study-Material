import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import useStoreData from "../store/Store";

const SubHeading = ({ value }: any) => {
  const navpop = useStoreData((state) => state.navigationpop);
  const setNavpop = useStoreData((state) => state.setNavigationpop);
  const navigate = useNavigate();
  const [drowdown, setDropdown] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          {
            value.subheading
              ? null
              : (navigate(`${value.link}`), setNavpop(false));
          }
        }}
        className="font-bold relative flex items-center justify-between text-lg  text-[#1F9CEE] p-5"
      >
        {value.heading}
        {value.subheading ? (
          <RiArrowDropDownLine
            className="w-9 h-9"
            onClick={() => {
              setDropdown(!drowdown);
            }}
          />
        ) : null}
      </div>
      <div className="h-px w-[240px] ml-5 bg-gray-200" />
      {drowdown ? (
        <div className="flex flex-col">
          {value.subheading?.map((subvalue: any) => (
            <>
              <div className="p-5 ml-5 font-medium text-lg text-[#1F9CEE]">
                {subvalue}
              </div>
              <div className="h-px w-[230px] ml-10 bg-gray-200" />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SubHeading;

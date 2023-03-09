import React from "react";
import bbs1stold from "../assets/syllabusimage/bbs1styearoldcourse.png";
import bbs1stnew from "../assets/syllabusimage/bbs1styearnewcourse.png";
import syllabusbanner from "../assets/syllabusimage/syllabusbanner.png";
import Footer from "./Footer";
const SyllabusData = [
  {
    img: bbs1stnew,
  },
  {
    img: bbs1stold,
  },
  {
    img: bbs1stold,
  },
  {
    img: bbs1stold,
  },
];
const Syllabus = () => {
  return (
    <div className="pt-[5rem]">
      <img
        src={syllabusbanner}
        alt="syllabusbanner"
        className="w-screen object-contain"
      />
      <p className="p-5">
        The Bachelor of Business Studies (BBS) program is a four-year
        undergraduate degree that covers a wide range of business and management
        principles. In the first year, students learn about business English,
        statistics, microeconomics, financial accounting, and management. In the
        second year, they cover business communication, macroeconomics, cost and
        management accounting, organizational behavior and human resource
        management, and financial management. In the third year, students learn
        about business law, financial systems, business environment and
        strategy, taxation, and marketing. In the fourth year, students focus on
        a chosen concentration area and take courses in entrepreneurship, three
        concentrations, research methods, and complete a final project.
      </p>
      <section className="flex flex-col items-center justify-center">
        {SyllabusData.map((value) => (
          <div className="bg-gray-100 w-[80vw]  h-[250px] hover: transform hover:scale-110 transition mb-8  rounded-md shadow-lg">
            <img
              src={value.img}
              alt="logo"
              className=" w-full h-full aspect-video  "
            />
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Syllabus;

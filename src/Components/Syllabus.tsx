import React from "react";
import bbs1stold from "../assets/syllabusimage/bbs1styearoldcourse.png";
import bbs1stnew from "../assets/syllabusimage/bbs1styearnewcourse.png";
import syllabusbanner from "../assets/syllabusimage/syllabusbanner.png";
const SyllabusData = [
  {
    img: bbs1stnew,
    description:
      "bbsnewcourse cardThe Bachelor of Business Studies (BBS) program is a four-yearundergrad",
  },
  {
    img: bbs1stold,
    description: "bbs old course card",
  },
];
const Syllabus = () => {
  return (
    <div className="pt-[5rem]">
      <img src={syllabusbanner} alt="syllabusbanner" className="w-screen" />
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
      <section>
        {SyllabusData.map((value) => (
          <div className="w-80 h-80 m-3 p-10 border-[4px] border-blue-900">
            <img src={value.img} alt="logo" className=" h-40 " />
            {value.description}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Syllabus;

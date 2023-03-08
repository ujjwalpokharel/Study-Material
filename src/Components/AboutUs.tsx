import React from "react";
import aboutustemplate from "../assets/AboutTemplatenew.png";
import smyoutube from "../assets/smyoutube.jpg";

const AboutUs = () => {
  return (
    <div className="pt-[5rem] ">
      <img src={aboutustemplate} alt="abouttemplate" className="w-screen " />
      <section className="p-5">
        <h1 className="font-bold text-2xl pb-5">About Study Material</h1>
        <p className="pb-3">
          We are a team of dedicated educators and professionals who are
          committed to providing high-quality study materials, resources, and
          guidance to students pursuing the Bachelor of Business Studies (BBS)
          course. Our website is more than just a collection of study materials
          - it's a comprehensive platform where BBS students can access reliable
          and up-to-date information to enhance their learning experience.
        </p>
        <div>
          <a
            href="https://www.youtube.com/@Studymaterialbypraju"
            target={"_blank"}
          >
            <img src={smyoutube} alt="youtube image" />
          </a>
          <p className="pt-3 text-lg">
            Our YouTube channel where we upload video lectures, tutorials, and
            other informative content related to the BBS course.
            <span className="font-bold text-[#1F9CEE]">
              Click on the image to visit our youtube channel.
            </span>
          </p>
        </div>
      </section>
      <section className="p-5 pt-0">
        <h2 className="font-bold text-2xl pb-5">How we are different:</h2>
        <p className="text-lg">
          What sets us apart is our commitment to providing students with the
          most relevant and up-to-date study materials, notes, and question
          models for both old and new courses. We understand that students often
          struggle to find reliable resources to supplement their classroom
          learning, and that's why we put in the effort to keep our website
          current and comprehensive. In addition to study materials, we provide
          TU-related news and other essential information that can help students
          stay informed and stay ahead.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

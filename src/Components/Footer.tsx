import React from "react";
import studymateriallogo from "../assets/studymateriallogo.jpg";

const Footer = () => {
  return (
    <div className="w-screen h-[300px] bg-[#F7F6F6] ">
      <section>
        <div className="w-screen flex justify-center p-3">
          <img
            src={studymateriallogo}
            alt="logo"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <p className="pl-8 pb-4">
          Study material complete package for BBS student.It has youtube and
          website platform for resources.{" "}
        </p>
      </section>
      <section className="grid grid-flow-col ">
        <div className="space-y-4 text-center">
          <h1>About Us</h1>
          <p>Vision</p>
          <p>Our Team</p>
          <p>Youtube channel</p>
        </div>

        <div className="space-y-4 text-center">
          <h1>Resources</h1>
          <p>News</p>
          <p>Syllabus</p>
          <p>Question Models</p>
          <p>Notes</p>
        </div>

        <div className="space-y-4 text-center">
          <h1>Contact</h1>
          <p>phone</p>
          <p>email</p>
          <p>address</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;

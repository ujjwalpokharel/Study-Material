import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import News from "./Components/News";
import QuestionModel from "./Components/QuestionModel";
import Syllabus from "./Components/Syllabus";
import Firstyear from "./Components/Notes/Firstyear";
import Secondyear from "./Components/Notes/Secondyear";
import Thirdyear from "./Components/Notes/Thirdyear";
import Fourthyear from "./Components/Notes/Fourthyear";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/questionmodel" element={<QuestionModel />} />
            <Route path="/notes/bbsfirstyear" element={<Firstyear />} />
            <Route path="/notes/bbssecondyear" element={<Secondyear />} />
            <Route path="/notes/bbsthirdyear" element={<Thirdyear />} />
            <Route path="/notes/bbsfourthyear" element={<Fourthyear />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

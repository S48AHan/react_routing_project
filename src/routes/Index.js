import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar2 from "../Components/NavBar2";
import Home from "../pages/Home";
import About from "../pages/About";
import AddBlog from "../pages/AddBlog";
import Error from "../pages/Error";
function Index() {
  return (
    <BrowserRouter>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Addblog from "./components/Addblog";
import BlogCard from "./components/BlogCard";
import AboutUs from "./components/AboutUs";
import Favarites from "./components/Favarites";
import Navbar from "./components/Navbar";
import "./App.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-blog" element={<Addblog />} />
          <Route path="/blog-card" element={<BlogCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favarites" element={<Favarites />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

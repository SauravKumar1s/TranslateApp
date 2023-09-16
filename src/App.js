import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import NepaliTyping from "./Pages/NepaliTyping/NepaliTyping";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nepali-typing" element={<NepaliTyping />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

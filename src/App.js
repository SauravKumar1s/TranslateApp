import "./App.css";
import React from "react";
import Translate from "./components/Translate";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

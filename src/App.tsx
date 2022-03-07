import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
const App = () => {
  return (
    <div className="app">
      <h1>Welcome async Apps</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

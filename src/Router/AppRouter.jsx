import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import Home from "../screens/Home";
import About from "../screens/About";
import WebDevelopment from "../screens/WebDevelopment";

const AppRouter = () => {
  return (
    <Router basename="/ny-web-experts">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-development" element={<WebDevelopment />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
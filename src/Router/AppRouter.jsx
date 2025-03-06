import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import Home from "../screens/Home";
import About from "../screens/About";
import WebDevelopment from "../screens/WebDevelopment";
import Portfolio from "../screens/Portfolio";
import Pricing from "../screens/Pricing";
import Blogs from "../screens/Blogs";
import ContactUs from "../screens/ContactUs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsConditions from "../screens/TermsConditions";

const AppRouter = () => {
  return (
    <Router basename="/ny-web-experts">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<WebDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
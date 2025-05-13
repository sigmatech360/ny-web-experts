import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";
import Portfolio from "../screens/Portfolio";
import Pricing from "../screens/Pricing";
import Blogs from "../screens/Blogs";
import ContactUs from "../screens/ContactUs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsConditions from "../screens/TermsConditions";
import Testimonials from "../screens/Testimonials";

// Services Page
import CMSDevelopment from "../screens/Services/CMSDevelopment";
import DigitalMarketing from "../screens/Services/DigitalMarketing";
import SMM from "../screens/Services/SMM";
import SEO from "../screens/Services/SEO";
import CustomWebDevelopment from "../screens/Services/CustomWebDevelopment";
import LogoDesign from "../screens/Services/LogoDesign";

const AppRouter = () => {
  return (
    <Router basename="/ny-web-experts">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Services Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/cms-development" element={<CMSDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/smm" element={<SMM />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/custom-web-development" element={<CustomWebDevelopment />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/mobile-app-development" element={<Services />} />
        {/* Services Pages */}

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

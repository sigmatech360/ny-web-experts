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
import MobileAppDevelopment from "../screens/Services/MobileAppDevelopment";
import BlogDetail from "../screens/BlogDetail";
import CategoryBlogs from "../screens/CategoryBlogs";
import ScrollToTop from "../components/ScrollToTop"; 
import NotFound from "../screens/NotFound";
import AppDevelopmentBuffalo from "../screens/locationpages/AppDevelopmentBuffalo";
import WordpressDevelopmentBuffalo from "../screens/locationpages/WordpressDevelopmentBuffalo";
import WordPressDevelopment from "../screens/Services/WordPressDevelopment";
import EcommerceDevelopment from "../screens/Services/EcommerceDevelopment";
import FrontendDevelopment from "../screens/Services/FrontendDevelopment";
import BackendDevelopment from "../screens/Services/BackendDevelopment";

const AppRouter = () => {
  return (
    // <Router basename="/ny-web-experts"> 
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Services Pages */}
        <Route path="/web-design-development" element={<Services />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/social-media-marketing" element={<SMM />} />
        <Route path="/search-engine-optimization" element={<SEO />} />


          {/* CMS Development & Inner Pages */}
        <Route path="/cms-development" element={<CMSDevelopment />} />
        <Route path="/wordpress-development" element={<WordPressDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />



          {/* Custom Development & Inner Pages */}
        <Route path="/frontend-development" element={<FrontendDevelopment />} />
        <Route path="/backend-development" element={<BackendDevelopment />} />



        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        {/* Services Pages */}

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Blogs */}
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route
          path="/blog/category/:categorySlug"
          element={<CategoryBlogs />}
        />
        {/* Blogs */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />

        {/* Location Pages  */}
        <Route path="/app-development-buffalo" element={<AppDevelopmentBuffalo />} />
        <Route path="/wordpress-development-buffalo" element={<WordpressDevelopmentBuffalo />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;

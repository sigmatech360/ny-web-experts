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
import DomainRegisteration from "../screens/Services/DomainRegisteration";
import DomainTransfer from "../screens/Services/DomainTransfer";
import ReactDevelopmentBuffalo from "../screens/locationpages/ReactDevelopmentBuffalo";
import WebAppDevelopment from "../screens/Services/WebAppDevelopment";
import BrandStrategy from "../screens/Services/BrandStrategy";
import BrandVoice from "../screens/Services/BrandVoice";
import EcommerceDevelopmentBuffalo from "../screens/locationpages/EcommerceDevelopmentBuffalo";
import DomainRegistrationBuffalo from "../screens/locationpages/DomainRegistrationBuffalo";
import NewLogoDesign from "../screens/Services/NewLogoDesign";
import NewWebDesign from "../screens/Services/NewWebDesign";

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



        {/* <Route path="/logo-design" element={<LogoDesign />} /> */}
        <Route path="/logo-design" element={<NewLogoDesign />} />
        <Route path="/web-design" element={<NewWebDesign />} />




          {/* CMS Development & Inner Pages */}
        <Route path="/cms-development" element={<CMSDevelopment />} />
        <Route path="/wordpress-development" element={<WordPressDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />


         {/* Custom Development & Inner Pages */}
        <Route path="/frontend-development" element={<FrontendDevelopment />} />
        <Route path="/backend-development" element={<BackendDevelopment />} />

          {/* App Development & Inner Pages */}        
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />


           {/* Domain & Hosting  Inner Pages */}
        <Route path="/domain-registeration" element={<DomainRegisteration />} />
        <Route path="/domain-transfer" element={<DomainTransfer />} />



           {/* Brand Identity &  Inner Pages */}
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/brand-voice" element={<BrandVoice />} />



        {/* Location Pages  */}
        <Route path="/app-development-buffalo" element={<AppDevelopmentBuffalo />} />
        <Route path="/wordpress-development-buffalo" element={<WordpressDevelopmentBuffalo />} />
        <Route path="/react-development-buffalo" element={<ReactDevelopmentBuffalo />} />
        <Route path="/ecommerce-development-buffalo" element={<EcommerceDevelopmentBuffalo />} />
        <Route path="/domain-registeration-buffalo" element={<DomainRegistrationBuffalo />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;

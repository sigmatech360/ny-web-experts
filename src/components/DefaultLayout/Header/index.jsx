import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";

import logo from "../../../assets/images/logo.webp";

const serviceLinks = [
  { label: "CMS Development", path: "/services/cms-development" },
  { label: "Digital Marketing", path: "/services/digital-marketing" },
  { label: "SMM", path: "/services/smm" },
  { label: "SEO", path: "/services/seo" },
  { label: "Custom Web Development", path: "/services/custom-web-development" },
  { label: "Logo Design", path: "/services/logo-design" },
  { label: "Mobile App Development", path: "/services/mobile-app-development" },
];

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-header py-0">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="New York Web Experts Logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>

            {/* <Link to={"/services"} className="nav-link">Services</Link> */}
            <NavDropdown
              title="Services"
              id="services-dropdown"
              // className="nav-link"
            >
              {serviceLinks.map((service, index) => (
                <NavDropdown.Item as={Link} to={service.path} key={index}>
                  {service.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Link to={"/portfolio"} className="nav-link">
              Portfolio
            </Link>
            <Link to={"/testimonials"} className="nav-link">
              Testimonials
            </Link>
            <Link to={"/contact-us"} className="nav-link">
              Contact Us
            </Link>
          </Nav>
          <div className="header_social-icons">
            <a
              href="https://www.facebook.com/NYWebExperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=19177917872&text=Hello%20there!%20%F0%9F%91%8B%20Welcome%20to%20NY%20Web%20Experts!%20How%20can%20we%20assist%20you%20today%3F%20Feel%20free%20to%20ask%20any%20questions%20or%20share%20your%20ideas%20with%20us%20%F0%9F%92%A1."
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/nywebexperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/nywebexperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <RiPinterestLine /> */}
              {/* <FaLinkedinIn /> */}
              <CiLinkedin />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

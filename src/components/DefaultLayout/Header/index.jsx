import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
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
              href="javascript:;"
              className="header_social-icon"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
            <a
              href="javascript:;"
              className="header_social-icon"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="javascript:;"
              className="header_social-icon"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="javascript:;"
              className="header_social-icon"
              rel="noopener noreferrer"
            >
              <RiPinterestLine />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

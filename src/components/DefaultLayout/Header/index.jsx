import React from "react";
import "./style.css";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { CiFacebook, CiLinkedin } from "react-icons/ci";
import {
  FaCaretDown,
  FaCaretRight,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";

import logo from "../../../assets/images/logo.webp";

const serviceLinks = [
  { label: "Web Design", path: "/web-design-development" },
  { label: "Logo Design", path: "/logo-design" },
  { label: "CMS Development", path: "/cms-development" },
  { label: "Digital Marketing", path: "/digital-marketing" },
  { label: "SMM", path: "/social-media-marketing" },
  { label: "SEO", path: "/search-engine-optimization" },
  { label: "Custom Web Development", path: "/custom-web-development" },
  { label: "Mobile App Development", path: "/mobile-app-development" },
];

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-header py-0">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="NY Web Experts Logo" />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-body-tertiary"
        />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>

            {/* ============================================= */}

            {/* <NavDropdown
              title="Services"
              id="services-dropdown"
              // className="nav-link"
            >
              {serviceLinks.map((service, index) => (
                <NavDropdown.Item
                  as={Link}
                  to={service.path}
                  key={index}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  {service.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
            <Dropdown className="nav-dropdown-custom">
              <Dropdown.Toggle
                as="button"
                className="custom-toggle cursor-pointer nav-link"
                aria-expanded="false"
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavDropdown.Item
                  as={Link}
                  to={"/web-design-development"}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  Web Design & Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/logo-design"}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  Logo Design
                </NavDropdown.Item>

                {/* CMS Development & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as={Link}
                    to={"/cms-development"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    CMS Development
                    <span className="submenu-icon d-none d-lg-inline">
                      <FaCaretRight />
                    </span>
                    <span className="submenu-icon d-inline d-lg-none">
                      <FaCaretDown />
                    </span>
                    <div className="nav-subdropdown">
                      <NavDropdown.Item
                        as={Link}
                        to={"/wordpress-development"}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Wordpress Development
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to={"/ecommerce-development"}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ecommerce Development
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown.Item>
                </div>

                {/* Digital Marketing & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as={Link}
                    to={"/digital-marketing"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Digital Marketing{" "}
                    <span className="submenu-icon d-none d-lg-inline">
                      <FaCaretRight />
                    </span>
                    <span className="submenu-icon d-inline d-lg-none">
                      <FaCaretDown />
                    </span>
                  </NavDropdown.Item>
                  <div className="nav-subdropdown">
                    {/* <NavDropdown.Item
                    as={Link}
                    to={"/digital-marketing"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Digital Marketing
                  </NavDropdown.Item> */}
                    <NavDropdown.Item
                      as={Link}
                      to={"/social-media-marketing"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      SMM
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/search-engine-optimization"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      SEO
                    </NavDropdown.Item>
                  </div>
                </div>

                {/* Custom Web Development & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as={Link}
                    to={"/custom-web-development"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Custom Web Development
                    <span className="submenu-icon d-none d-lg-inline">
                      <FaCaretRight />
                    </span>
                    <span className="submenu-icon d-inline d-lg-none">
                      <FaCaretDown />
                    </span>
                  </NavDropdown.Item>
                  <div className="nav-subdropdown">
                    <NavDropdown.Item
                      as={Link}
                      to={"/frontend-development"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Frontend Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/backend-development"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Backend Development
                    </NavDropdown.Item>
                  </div>
                </div>

                <NavDropdown.Item
                  as={Link}
                  to={"/mobile-app-development"}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  Mobile App Development
                </NavDropdown.Item>

                {/* Domain & Hosting & Inner Pages */}
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Domain & Hosting
                    <span className="submenu-icon d-none d-lg-inline">
                      <FaCaretRight />
                    </span>
                    <span className="submenu-icon d-inline d-lg-none">
                      <FaCaretDown />
                    </span>
                  </NavDropdown.Item>
                  <div className="nav-subdropdown">
                    <NavDropdown.Item
                      as={Link}
                      to={"/domain-registeration"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Domain Registeration
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/domain-transfer"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Domain Transfer
                    </NavDropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>


            {/* Location Pages */}
            <Dropdown className="nav-dropdown-custom">
              <Dropdown.Toggle
                as="button"
                className="custom-toggle cursor-pointer nav-link"
                aria-expanded="false"
              >
                Locations
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="nav-subdropdown-wrapper">
                  <NavDropdown.Item
                    as="button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Buffalo{" "}
                    <span className="submenu-icon d-none d-lg-inline">
                      <FaCaretRight />
                    </span>
                    <span className="submenu-icon d-inline d-lg-none">
                      <FaCaretDown />
                    </span>
                  </NavDropdown.Item>
                  <div className="nav-subdropdown">
                    <NavDropdown.Item
                      as={Link}
                      to={"/app-development-buffalo"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/wordpress-development-buffalo"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Wordpress Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/react-development-buffalo"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Reactjs Development
                    </NavDropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* ============================================= */}
            <NavLink to={"/portfolio"} className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to={"/pricing"} className="nav-link">
              Pricing
            </NavLink>
            <NavLink to={"/testimonials"} className="nav-link">
              Testimonials
            </NavLink>
            <NavLink to={"/blog"} className="nav-link">
              Blogs
            </NavLink>
            <NavLink to={"/contact-us"} className="nav-link">
              Contact Us
            </NavLink>
          </Nav>

          <div className="header_social-icons">
            <a
              href="https://www.facebook.com/NYWebExperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
              aria-label="Visit NY Web Experts on Facebook"
            >
              <CiFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=15183181052&text=Hello%20there!%20%F0%9F%91%8B%20Welcome%20to%20NY%20Web%20Experts!%20How%20can%20we%20assist%20you%20today%3F%20Feel%20free%20to%20ask%20any%20questions%20or%20share%20your%20ideas%20with%20us%20%F0%9F%92%A1."
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Whatsapp"
              aria-label="Chat with NY Web Experts on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/nywebexperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
              aria-label="Follow NY Web Experts on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/nywebexperts/"
              className="header_social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Linkedin"
              aria-label="Connect with NY Web Experts on LinkedIn"
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

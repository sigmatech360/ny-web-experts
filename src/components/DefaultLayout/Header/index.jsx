import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";

import logo from "../../../assets/images/logo.png"

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-header py-0">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/about"} className="nav-link">About</Link>
            <Link to={"/services"} className="nav-link">Services</Link>
            <Link to={"/portfolio"} className="nav-link">Portfolio</Link>
            <Link to={"/"} className="nav-link">Testimonials</Link>
            <Link to={"/contact-us"} className="nav-link">Contact Us</Link>
          </Nav>
          <div className="header_social-icons">
            <a className="header_social-icon" href="javascript:;"><CiFacebook /></a>
            <a className="header_social-icon" href="javascript:;"><FaWhatsapp /></a>
            <a className="header_social-icon" href="javascript:;"><FaInstagram /></a>
            <a className="header_social-icon" href="javascript:;"><RiPinterestLine /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

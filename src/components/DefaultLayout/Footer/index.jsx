import React from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { PiMapPinBold } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";

const footerLink = [
  {
    id: 1,
    name: "About",
    link: "",
  },
  {
    id: 2,
    name: "Leadership",
    link: "",
  },
  {
    id: 3,
    name: "IT Blog",
    link: "",
  },
  {
    id: 4,
    name: "Case Studies",
    link: "",
  },
  {
    id: 5,
    name: "Locations",
    link: "",
  },
];

const Footer = () => {
  return (
    <>
      <section className="main-footer bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="footer-about">
                <div className="footer-logo">
                  <Link to={"/"}>
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <div className="header_social-icons">
                  <a className="header_social-icon" href="javascript:;">
                    <CiFacebook />
                  </a>
                  <a className="header_social-icon" href="javascript:;">
                    <FaWhatsapp />
                  </a>
                  <a className="header_social-icon" href="javascript:;">
                    <FaInstagram />
                  </a>
                  <a className="header_social-icon" href="javascript:;">
                    <RiPinterestLine />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-lg-0 mb-4">
              <div className="footer-links">
                <h3 className="footer-title">Links</h3>
                <ul className="footer-links">
                  {footerLink.map((item, index) => (
                    <li key={index}>
                      <Link to="javascript:;">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mb-lg-0 mb-4">
              <div className="footer-contact">
                <h3 className="footer-title">Contact</h3>
                <div className="footer-list-icon-items">
                  <div className="footer-list-icon-item">
                    <div className="footer-list-icon">
                      <PiMapPinBold />
                    </div>
                    <p className="footer-list-text">
                      353 Lexington Ave, New York, NY 10016, United States.
                    </p>
                  </div>
                  <div className="footer-list-icon-item">
                    <div className="footer-list-icon">
                      <HiOutlinePhone />
                    </div>
                    <a href="tel:(713) 347-2269" className="footer-list-text">
                      (713) 347-2269
                    </a>
                  </div>
                  <div className="footer-list-icon-item">
                    <div className="footer-list-icon">
                      <FaRegEnvelope />
                    </div>
                    <a
                      href="mailto:support@nywebexperts.com"
                      className="footer-list-text"
                    >
                      support@nywebexperts.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-newsletter">
                <h3 className="footer-title">Newsletter</h3>
                <div className="footer-newsletter-content">
                  <p>Subscribe to our newsletter for daily new and updates</p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Email address"
                  />
                  <button className="ny-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center m-0">
                Copyright © 2024 NY Web Experts. All rights reserved. |{" "}
                <Link to={"/terms-and-conditions"}>Terms & Conditions</Link> |{" "}
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { PiMapPinBold } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";

const footerLink = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Leadership",
    link: null,
  },
  {
    id: 3,
    name: "IT Blog",
    link: "/blogs",
  },
  {
    id: 4,
    name: "Case Studies",
    link: null,
  },
  {
    id: 5,
    name: "Locations",
    link: null,
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("apiUrl", apiUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/newsletter-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log(result);
      toast.success("Email Submitted Successfully");
    } catch (error) {
      console.log(`Error submitting email:`, error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <section className="main-footer bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="footer-about">
                <div className="footer-logo">
                  <Link to={"/"}>
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="New York Web Experts Logo"
                    />
                  </Link>
                </div>
                <p>
                  Crafting modern websites with performance, design, and user
                  experience in mind. Your trusted partner in web development
                  and digital innovation.
                </p>
                <div className="header_social-icons">
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.facebook.com/NYWebExperts/"
                  >
                    <CiFacebook />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=19177917872&text=Hello%20there!%20%F0%9F%91%8B%20Welcome%20to%20NY%20Web%20Experts!%20How%20can%20we%20assist%20you%20today%3F%20Feel%20free%20to%20ask%20any%20questions%20or%20share%20your%20ideas%20with%20us%20%F0%9F%92%A1."
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.instagram.com/nywebexperts/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.linkedin.com/company/nywebexperts/"
                  >
                    {/* <RiPinterestLine /> */}
                    {/* <FaLinkedinIn /> */}
                    <CiLinkedin />
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
                      <Link to={`${item.link ? item.link : "javascript:;"}`}>
                        {item.name}
                      </Link>
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
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="ny-btn">Send</button>
                  </form>
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

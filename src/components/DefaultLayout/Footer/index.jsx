import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import clutch from "../../../assets/images/footer/clutch-icon.png";
import trustPilot from "../../../assets/images/footer/trust-pilot.webp";
import ObfuscatedEmail from "../../../components/ObfuscatedEmail";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import {
  FaBehance,
  FaBehanceSquare,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { PiMapPinBold } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";
import { SiYelp } from "react-icons/si";

const footerLink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    id: 6,
    name: "Contact us",
    link: "/contact-us",
  },
  // {
  //   id: 2,
  //   name: "Leadership",
  //   link: null,
  // },
  // {
  //   id: 4,
  //   name: "Case Studies",
  //   link: null,
  // },
  // {
  //   id: 5,
  //   name: "Locations",
  //   link: null,
  // },
];

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/newsletter-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      // console.log(result);

      if (result.status) {
        toast.success("Email Submitted Successfully");
        // toast.success(result.message);
        setEmail("");
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      console.log(`Error submitting email:`, error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
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
                      alt="NY Web Experts Logo"
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
                    rel="noopener noreferrer"
                    title="Follow us on Facebook"
                    aria-label="Facebook"
                  >
                    <CiFacebook />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=15183181052&text=Hello%20there!%20%F0%9F%91%8B%20Welcome%20to%20NY%20Web%20Experts!%20How%20can%20we%20assist%20you%20today%3F%20Feel%20free%20to%20ask%20any%20questions%20or%20share%20your%20ideas%20with%20us%20%F0%9F%92%A1."
                    rel="noopener noreferrer"
                    title="Whatsapp"
                    aria-label="Whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.instagram.com/nywebexperts/"
                    rel="noopener noreferrer"
                    title="Follow us on Instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.linkedin.com/company/nywebexperts/"
                    rel="noopener noreferrer"
                    title="Follow us on Linkedin"
                    aria-label="Linkedin"
                  >
                    {/* <RiPinterestLine /> */}
                    {/* <FaLinkedinIn /> */}
                    <CiLinkedin />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.behance.net/nywebexperts1"
                    rel="noopener noreferrer"
                    title="Behance"
                    aria-label="Behance"
                  >
                    {/* <RiPinterestLine /> */}
                    {/* <FaLinkedinIn /> */}
                    <FaBehanceSquare />
                  </a>
                  <a
                    className="header_social-icon behanceIcon"
                    target="_blank"
                    href="https://www.crunchbase.com/organization/ny-web-experts"
                    rel="noopener noreferrer"
                    title="Crunchbase"
                    aria-label="Crunchbase"
                  >
                    cb
                  </a>
                  <a
                    className="header_social-icon clutchIcon"
                    target="_blank"
                    href="https://clutch.co/profile/ny-web-experts"
                    rel="noopener noreferrer"
                    title="Clutch"
                    aria-label="Clutch"
                  >
                    <img src={clutch} alt="" />
                  </a>
                  <a
                    className="header_social-icon"
                    target="_blank"
                    href="https://www.yelp.com/biz/ny-web-experts-new-york "
                    rel="noopener noreferrer"
                    title="yelp"
                    aria-label="yelp"
                  >
                    {/* <RiPinterestLine /> */}
                    {/* <FaLinkedinIn /> */}
                    <SiYelp />
                  </a>
                </div>
                <div className="header_social-icons mt-4">
                  <a href="https://www.trustpilot.com/review/nywebexperts.com " className="header_social-icon trustPilot">
                    <img src={trustPilot} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-lg-0 mb-4">
              <div className="footer-links">
                <h6 className="footer-title">Links</h6>
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
                <h6 className="footer-title">Contact</h6>
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
                    <a href="tel:+15183181052" className="footer-list-text">
                      +1 (518) 318-1052
                    </a>
                  </div>
                  <div className="footer-list-icon-item">
                    <div className="footer-list-icon">
                      <FaRegEnvelope />
                    </div>
                    <ObfuscatedEmail className="footer-list-text" />
                    {/* <a
                      href="mailto:support@nywebexperts.com"
                      className="footer-list-text"
                    >
                      support<span className="at"></span>nywebexperts<span className="dot"></span>com
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-newsletter">
                <h6 className="footer-title">Newsletter</h6>
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
                      required
                    />
                    <button
                      className={`ny-btn ${
                        loading ? "btn-loading" : "btn-loaded"
                      }`}
                      disabled={loading}
                      // style={{
                      //   opacity: loading ? 0.3 : 1,
                      // }}
                    >
                      {/* Send */}
                      {loading ? "Sending..." : "Send"}
                    </button>
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
                Copyright © {new Date().getFullYear()} NY Web Experts. All
                rights reserved. |{" "}
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

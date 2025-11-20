import React from 'react'
import webapp from "../../assets/images/services/backenddevelopment/webapp.svg";
import aboutimg from "../../assets/images/services/backenddevelopment/aboutimg.webp";
import { Link } from 'react-router-dom';

const 
BackendAbout = () => {
  return (
    <section className='backend-about-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="about-webapp-box">
                                <img src={webapp} alt="img" />
                                <h3>200+</h3>
                                <p>Web Apps</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="backend-about-head">
                                <h6 className='minihead'>About Us</h6>
                                <h2 className='mainhead'>A Trusted Name in New York for Backend Expertise</h2>
                            </div>
                        </div>
                    </div>
                    <div className="backend-about-txt">
                        <p>Our backend development company in New York builds systems that keep your website secure, fast, and reliable. We focus on creating structures that support heavy workloads without slowing down. Every project we take on is built to last, giving your business a strong foundation to grow confidently online.</p>
                        <Link to="/about" className='ny-btn'>Learn More About New York Web Experts</Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="backend-about-img">
                        <img src={aboutimg} alt="about image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackendAbout
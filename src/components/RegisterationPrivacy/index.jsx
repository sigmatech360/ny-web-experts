import React from 'react'
import privacy1 from "../../assets/images/services/domainregisteration/privacy-1.webp";
import privacy2 from "../../assets/images/services/domainregisteration/privacy-2.webp";
import privacy3 from "../../assets/images/services/domainregisteration/privacy-3.webp";
import { Link } from 'react-router-dom';

const RegisterationPrivacy = () => {
  return (
    <section className='registeration-privacy-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="registeration-privacy-img">
                        <img src={privacy1} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="registeration-privacy-txt">
                        <h2 className='mainhead text-white'>Choose the Perfect Domain for Your Brand</h2>
                        <p>Your domain name is the foundation of your online identity. We help you choose and register a high-value domain that represents your brand’s vision and market presence. </p>
                        <p>The core of our services is supporting businesses of all kinds. We offer domain transfers and registration for existing and emerging businesses, and we also proudly get new domains for the fresh businesses with a simple and secure process. </p>
                        <Link to="/contact-us" className='ny-btn'>Talk to Our Experts</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="registeration-privacy-txt">
                        <h2 className='mainhead text-white'>Already Own A Site? Transfer It to the Domain of Your Choice!</h2>
                        <p>Easily transfer your existing website to a new domain name with our quick and secure transfer service. Our experts ensure zero downtime and full control throughout the process, so your business keeps running smoothly.</p>
                        <Link to="/contact-us" className='ny-btn'>Transfer Your Domain</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="registeration-privacy-img">
                        <img src={privacy2} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="registeration-privacy-img">
                        <img src={privacy3} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="registeration-privacy-txt">
                        <h2 className='mainhead text-white'>Register A High-Demand Domain Now</h2>
                        <p>Our web experts help you secure a domain name that stands out. From exploring ideas to registering exclusive names, we handle the process so you can focus on building your brand.</p>
                        <Link to="/contact-us" className='ny-btn'>Chat with an Expert</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterationPrivacy
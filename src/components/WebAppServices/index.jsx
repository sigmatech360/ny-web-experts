import React from 'react'
import { Link } from 'react-router-dom'
import service1 from "../../assets/images/services/webappdevelopment/service1.webp"
import service2 from "../../assets/images/services/webappdevelopment/service2.webp"
import service3 from "../../assets/images/services/webappdevelopment/service3.webp"

const WebAppServices = () => {
  return (
    <section className='webapp-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webapp-service-head">
                        <h6 className='shorttop-head text-white'>Our Services</h6>
                        <h2 className='mainhead text-white'>Our Web App Development Services</h2>
                        <p>From idea to implementation, we provide a full range of WordPress services to help your brand grow online.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="webapp-service-txt">
                        <h4>Single Page Applications (SPAs):</h4>
                        <p>Want a website that doesn’t need to load? One that feels like a mobile app, reacts instantly, and keeps users engaged. Built by our web app development company in New York, our SPAs deliver speed, smoothness, and modern user experiences. Development so good even Google uses it!</p>
                        {/* <Link to="/contact-us" className='ny-btn'>Explore More</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webapp-service-img">
                        <img src={service1} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webapp-service-img">
                        <img src={service2} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webapp-service-txt">
                        <h4>Custom Web App Development:</h4>
                        <p>Filled with robust power, top-tier functionalities, and made to perform heavy lifting, our custom web app services are for companies looking to develop complex web apps, CRMs, LMSs, and more. Our team delivers fully custom solutions designed for unique workflows using full-stack web app development in New York.</p>
                        {/* <Link to="/contact-us" className='ny-btn'>Explore More</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webapp-service-txt">
                        <h4>Progressive Web Apps:</h4>
                        <p>Need a website that runs on a browser but looks and works exactly like mobile apps? Built through our web app development agency in Texas, PWAs offer unmatched performance, one which is the same as mobile apps, but can work on a browser too.</p>
                        {/* <Link to="/contact-us" className='ny-btn'> Explore More</Link> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="webapp-service-img">
                        <img src={service3} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebAppServices
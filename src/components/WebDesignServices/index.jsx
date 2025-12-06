import React from 'react'
import service1 from "../../assets/images/services/webdesign/service1.webp";
import service2 from "../../assets/images/services/webdesign/service2.webp";
import service3 from "../../assets/images/services/webdesign/service3.webp";
import service4 from "../../assets/images/services/webdesign/service4.webp";


const WebDesignServices = () => {
  return (
    <section className='webdesign-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webdesign-service-head">
                        <h6 className='shorttop-head text-white'>More of Our Services</h6>
                        <h2 className='mainhead text-white'>Our Creative Skills Your Brand Will Feel</h2>
                        <p>We offer a range of other services that back you up when it comes to design perfection. Some of them include:  </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="webdesign-service-card">
                        <img src={service1} alt="service image" />
                        <h5>Logo Design</h5>
                        <ul>
                            <li>Clean and recognizable marks</li>
                            <li>Designs that reflect brand personality</li>
                            <li>Identity that scales across platforms</li>
                            <li>Built for long-term recall</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdesign-service-card webdesign-downcard">
                        <img src={service2} alt="service image" />
                        <h5>Landing Page Design</h5>
                        <ul>
                            <li>Conversion-centered structure</li>
                            <li>Clear messaging hierarchy </li>
                            <li>Fast and distraction-free layouts</li>
                            <li>Focused on user intent</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdesign-service-card">
                        <img src={service3} alt="service image" />
                        <h5>Product Packaging Design</h5>
                        <ul>
                            <li>Designs that sell on shelves</li>
                            <li>Story-driven visuals</li>
                            <li>High aesthetic appeal</li>
                            <li>Built for brand experience</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="webdesign-service-card webdesign-downcard">
                        <img src={service4} alt="service image" />
                        <h5>Newsletter Design</h5>
                        <ul>
                            <li>Clean scroll-friendly layouts</li>
                            <li>On brand visuals and tone</li>
                            <li>Engaging content structure</li>
                            <li>Focused on retention</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesignServices
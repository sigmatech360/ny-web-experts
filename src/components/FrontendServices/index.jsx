import React from 'react'
import custom from "../../assets/images/services/frontenddevelopment/custom.svg"
import screens from "../../assets/images/services/frontenddevelopment/screens.svg"
import uiux from "../../assets/images/services/frontenddevelopment/uiux.svg"
import javascript from "../../assets/images/services/frontenddevelopment/javascript.svg"
import { Link } from 'react-router-dom'

const FrontendServices = () => {
  return (
    <section className='frontend-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="frontend-services-head">
                        <h6 className='shorttop-head'>Services</h6>
                        <h2 className='mainhead text-white'>Frontend Development is Not the Only Thing We Do</h2>
                        <p>We do frontend, but not only for the website. Below is the list of frontend development we offer for different platforms.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="frontend-service-card">
                        <img src={custom} alt="image" />
                        <h4>CMS Development</h4>
                        <p>Every great website starts with a smart foundation. We build robust, flexible, and secure CMS-based front ends that give you control without complexity, blending sleek design with seamless functionality to make managing your content effortless.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="frontend-service-card">
                        <img src={screens} alt="image" />
                        <h4>Shopify Front-End Development</h4>
                        <p>Your storefront deserves more than templates. Our Shopify front-end development in New York transforms online stores into immersive, high-converting experiences. From custom layouts to optimized checkout flows, we code with conversion in mind.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="frontend-service-card">
                        <img src={uiux} alt="image" />
                        <h4>WordPress Front-End Development</h4>
                        <p>Clean, optimized, and designed to impress, that’s our approach to WordPress front-end design and development in New York. We create lightning-fast, pixel-perfect interfaces that load quickly, rank higher, and deliver results your audience (and Google) will love.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="frontend-service-card">
                        <img src={javascript} alt="image" />
                        <h4>Wix Front-End Development</h4>
                        <p>Simplicity meets sophistication. Our Wix front-end development services elevate drag-and-drop design into high-performance interfaces that look professional, load fast, and work beautifully across all devices.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="frontend-service-btn">
                        <Link to="/contact-us" className='ny-btn'>Start Your Project</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontendServices
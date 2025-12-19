import React from 'react'
import { Link } from 'react-router-dom'
import smmmobimg from "../../assets/images/services/mobappdev/chooseimg.webp";

const SMMDrive = () => {
  return (
    <section className='smm-drive-sec'>
        <div className="container">
            <div className="smm-drive-bg">
            <div className="row">
                <div className="col-lg-7 col-md-6">
                    <div className="smm-drive-txt">
                        <h2 className='mainhead text-white'>Mobile Applications that Encourage Brand Loyalty</h2>
                        <p>Our team builds clear, simple, and powerful apps that help you turn users into loyal customers every day.</p>
                        <Link to="/contact-us" className='ny-btn'>Send us a Message</Link>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="smm-drive-img">
                        <img src={smmmobimg} alt="image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SMMDrive

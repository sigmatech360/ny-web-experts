import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCard = (props) => {
    return (
        <div className={`our-services-card ${props?.variant}`} data-aos="fade-up"
        data-aos-duration="2000">
            <div className="our-services-card-header">
                <img src={props?.image} alt="Our services Image" className='img-fluid' />
            </div>
            <div className="our-services-card-body">
                <h3>{props?.name}</h3>
                <p>{props?.description}</p>
                <Link to={props.link} target='_blank' className='ny-btn'>Get Started</Link>
            </div>
        </div>
    )
}

export default ServicesCard
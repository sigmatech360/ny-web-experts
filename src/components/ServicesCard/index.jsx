import React from 'react'

const ServicesCard = (props) => {
    return (
        <div className={`our-services-card ${props?.variant}`}>
            <div className="our-services-card-header">
                <img src={props?.image} alt="Our services Image" className='img-fluid' />
            </div>
            <div className="our-services-card-body">
                <h3>{props?.name}</h3>
                <p>{props?.description}</p>
                <button className='ny-btn'>Get Started</button>
            </div>
        </div>
    )
}

export default ServicesCard
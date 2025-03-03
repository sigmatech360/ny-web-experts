import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div className="testimonials-item">
            <div className="testimonials-item-img">
                <img src={props?.image} alt="Testimonial Image" />
            </div>
            <div className="testimonials-item-content">
                <h4 className='testimonials-name'>{props?.name}</h4>
                <p className='testimonials-designation'>{props?.designation}</p>
                <p className='testimonials-desc'>{props?.description}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { PiCalendarBlankBold } from 'react-icons/pi'

const BlogCard = (props) => {
  return (
    <div className={`blog-card`}>
            <div className="our-services-card-header">
                <img src={props?.image} alt="Our services Image" className='img-fluid' />
            </div>
            <div className="our-services-card-body">
                <h3>{props?.name}</h3>
                <p>{props?.description}</p>
                <div className='blog-card-meta d-flex gap-2 flex-wrap'>
                    <p><FaRegUserCircle /> admin</p>
                    <p><PiCalendarBlankBold /> January 12, 2025</p>
                </div>
                <button className='ny-btn'>Read More</button>
            </div>
        </div>
  )
}

export default BlogCard
import React from 'react'

const ContentWithIcon = (props) => {
    return (
        <div className={`content-with-icon-item ${props?.variant ? `flex-${props?.variant}` : ''}`}>
            <div className='content-with-icon-img'>
                <img src={props?.icon} alt='' />
            </div>
            <div className='content-with-icon-content'>
                <h5>{props?.name}</h5>
                <p>{props?.description}</p>
            </div>
        </div>
    )
}

export default ContentWithIcon
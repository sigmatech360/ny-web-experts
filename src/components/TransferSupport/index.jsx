import React from 'react'
import { Link } from 'react-router-dom'

const TransferSupport = ({ shortTopHead, mainHead, buttonText, description, descriptiontwo, secClass }) => {
  return (
    <section className={`transfer-support-sec ${secClass}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="transfer-support-txt">
                        <h6 className='shorttop-head text-white'>{shortTopHead}</h6>
                        <h2 className='mainhead text-white'>{mainHead}</h2>
                        <p>{description}</p>
                        {descriptiontwo && <p>{descriptiontwo}</p>}
                        <Link to="/contact-us">{buttonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TransferSupport
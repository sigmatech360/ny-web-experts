import React from 'react'
import herobanner from "../../assets/images/services/domaintransfer/herobanner.webp";
import www from "../../assets/images/services/domaintransfer/www.svg";
import doublenetwork from "../../assets/images/services/domaintransfer/double-network.svg";
import check from "../../assets/images/services/domaintransfer/check.svg";
import arrownetwork from "../../assets/images/services/domaintransfer/arrownetwork.svg";
import { Link } from 'react-router-dom';

const DomainTransferbanner = () => {
  return (
    <section className='domain-transfer-banner'>
          <img
            src={herobanner}
            alt="Services Banner Img"
            className="services-banner-sec-bgImg"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="domain-transfer-txt">
                        <h1 className='mainhead text-white'>Lock in Your Domain Before Someone Else Does</h1>
                        <p>Move your website to a new address without any downtime; focused on helping businesses get up and running with domain migration services in New York!</p>
                        <div className="domain-transfer-boxes">
                            <div className="transfer-icon-box">
                                <img src={www} alt="img" />
                                <h5>Get a Domain</h5>
                            </div>
                            <div className="transfer-icon-box">
                                <img src={doublenetwork} alt="img" />
                                <h5>Start the Transfer</h5>
                            </div>
                            <div className="transfer-icon-box">
                                <img src={check} alt="img" />
                                <h5>Approve the Transfer</h5>
                            </div>
                            <div className="transfer-icon-box">
                                <img src={arrownetwork} alt="img" />
                                <h5>Boom! You’re Live</h5>
                            </div>
                        </div>
                        <div className="tranfer-banne-btn">
                            <Link to="/contact-us" className='ny-btn'>Work With the Best Movers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainTransferbanner
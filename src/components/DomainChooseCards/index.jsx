import React from 'react'
import support from "../../assets/images/services/domainregisteration/support.svg";
import guarrantee from "../../assets/images/services/domainregisteration/guarrantee.svg";
import sercurity from "../../assets/images/services/domainregisteration/control-panel.svg";
  
const DomainChooseCards = () => {
  return (
    <section className='registeration-choose-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="registeration-choose-head">
                        <h6 className='shorttop-head'>Why Choose Us?</h6>
                        <h2 className='mainhead'>Experience Simple Domain Registration and Support</h2>
                        <p>When you choose us for domain registration in New York, you get more than just a name; you get complete support, fast setup, and secure management tools. Our experts guide you through every step to make sure your domain works perfectly for your business.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="registeration-choose-card">
                        <img src={support} alt="img" />
                        <h4>Fast Registration:</h4>
                        <p>Instantly search and register your desired domain name through our streamlined process that ensures quick confirmation and secure ownership without technical complexity.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="registeration-choose-card">
                        <img src={guarrantee} alt="img" />
                        <h4>Trusted Domain Providers: </h4>
                        <p>Partner with verified domain providers in New York offering transparent pricing, easy renewals, and top-tier security to protect your online assets.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="registeration-choose-card">
                        <img src={sercurity} alt="img" />
                        <h4>Full-Time Support:</h4>
                        <p>Get expert help anytime you need it. Our friendly team ensures smooth registration, transfers, and ongoing domain management.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainChooseCards
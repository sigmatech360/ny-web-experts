import React from 'react'
import benefit1 from "../../assets/images/services/backenddevelopment/benefit1.svg";
import benefit2 from "../../assets/images/services/backenddevelopment/benefit2.svg";
import benefit3 from "../../assets/images/services/backenddevelopment/benefit3.svg";
import benefit4 from "../../assets/images/services/backenddevelopment/benefit4.svg";

const BackendBenefit = () => {
  return (
    <section className='backend-benefit-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="backend-benefit-head">
                        <h6 className='shorttop-head'>Our Edge in the Market</h6>
                        <h2 className='mainhead'>Why New York Businesses Trust Us</h2>
                        <p>Our work as backend web developers in New York stands out because we keep things simple and effective, ensuring that each layer of every website we make is powerful and smooth.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="benefit-backend-box">
                        <img src={benefit1} alt="image" />
                        <h4>API Development & Integration</h4>
                        <p>Seamlessly connect your platform with external services, enabling smooth data exchange and reliable integrations.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="benefit-backend-box">
                        <img src={benefit2} alt="image" />
                        <h4>Database Management</h4>
                        <p>Organize, optimize, and secure data, ensuring fast access, reliability, and zero downtime for your business.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="benefit-backend-box">
                        <img src={benefit3} alt="image" />
                        <h4>Server-Side Logic</h4>
                        <p>Powerful backend logic automates processes, handles complex tasks, and ensures fast, accurate website functionality.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="benefit-backend-box">
                        <img src={benefit4} alt="image" />
                        <h4>Authentication & Security</h4>
                        <p>Secure logins, encryption, and access control protect sensitive data while keeping the user experience smooth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackendBenefit
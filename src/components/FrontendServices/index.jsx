import React from 'react'
import custom from "../../assets/images/services/frontenddevelopment/custom.svg"
import screens from "../../assets/images/services/frontenddevelopment/screens.svg"
import uiux from "../../assets/images/services/frontenddevelopment/uiux.svg"
import javascript from "../../assets/images/services/frontenddevelopment/javascript.svg"
import { Link } from 'react-router-dom'

const FrontendServices = () => {
  return (
    <section className='frontend-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="frontend-services-head">
                        <h6 className='shorttop-head'>Our Services</h6>
                        <h2 className='mainhead text-white'>Our Front-End Development Services</h2>
                        <p>From concept to code, we deliver complete front-end development solutions customized for your project needs.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="frontend-service-card">
                        <img src={custom} alt="image" />
                        <h4>Custom Front-End Development</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="frontend-service-card">
                        <img src={screens} alt="image" />
                        <h4>Custom Front-End Development</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="frontend-service-card">
                        <img src={uiux} alt="image" />
                        <h4>Custom Front-End Development</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="frontend-service-card">
                        <img src={javascript} alt="image" />
                        <h4>Custom Front-End Development</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="frontend-service-btn">
                        <Link to="/contact-us" className='ny-btn'>Explore Front-End Services</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontendServices
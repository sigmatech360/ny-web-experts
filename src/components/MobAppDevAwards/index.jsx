import React from 'react'
import award1 from "../../assets/images/services/mobappdev/award1.webp";
import award2 from "../../assets/images/services/mobappdev/award2.webp";
import award3 from "../../assets/images/services/mobappdev/award3.webp";
import award4 from "../../assets/images/services/mobappdev/award4.webp";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const MobAppDevAwards = () => {
  return (
    <section className='mobappdev-awards-sec'>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="mobappdev-awards-head">
                    <h6 className='shorttop-head'>Specialization </h6>
                    <h2 className='mainhead'>What We Do Best in Mobile</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="mobappdev-awards-head">
                    <p>We cover all skills needed to build stable and easy-to-use apps. Our team creates strong designs, smooth user flow, clean code, and fast performance for all platforms.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="mobaward-box">
                    <img src={award1} alt="img" />
                    <h3>User Interface Planning</h3>
                    <div className="mobaward-rating-box">
                        <ul>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStarHalfAlt /></li>
                        </ul>
                        <span>4.8/5.0</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="mobaward-box">
                    <img src={award2} alt="img" />
                    <h3>High Performance Code</h3>
                    <div className="mobaward-rating-box">
                        <ul>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStarHalfAlt /></li>
                        </ul>
                        <span>4.8/5.0</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="mobaward-box">
                    <img src={award3} alt="img" />
                    <h3>Secure Data Handling</h3>
                    <div className="mobaward-rating-box">
                        <ul>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStarHalfAlt /></li>
                        </ul>
                        <span>4.8/5.0</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="mobaward-box">
                    <img src={award4} alt="img" />
                    <h3>App Store Deployment</h3>
                    <div className="mobaward-rating-box">
                        <ul>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStarHalfAlt /></li>
                        </ul>
                        <span>4.8/5.0</span>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </section>
  )
}

export default MobAppDevAwards

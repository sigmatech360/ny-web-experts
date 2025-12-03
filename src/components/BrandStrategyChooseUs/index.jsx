import React from 'react'
import trusted from "../../assets/images/services/brandstrategy/trusted.webp"
import detailapproach from "../../assets/images/services/brandstrategy/detailapproach.svg";
import expertteam from "../../assets/images/services/brandstrategy/expertteam.svg";
import datainformed from "../../assets/images/services/brandstrategy/datainformed.svg";
import bulb from "../../assets/images/services/brandstrategy/bulb.svg";

const BrandStrategyChooseUs = () => {
  return (
    <section className='strategy-choose-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="strategy-choose-head">
                        <h6 className='shorttop-head text-white'>Why Choose Us?</h6>
                        <h2 className='mainhead text-white'>Experience, Creativity, And Strategy That Elevate Brands</h2>
                        <p>A well-thought-out strategy can only be made when it’s backed by the right team, the right approach, and the right solutions. As trusted experts, our brand strategy services in New York cover the following aspects:</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="strategy-client-card">
                        <img src={detailapproach} alt="image" />
                        <h4>Detailed Approach:</h4>
                        <p>We integrate strategy, design, and marketing to ensure every touchpoint strengthens your brand voice and identity effectively.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="strategy-client-card">
                        <img src={expertteam} alt="image" />
                        <h4>Expert Team:</h4>
                        <p>Our creative strategists and designers combine insight with industry experience, delivering strategies that drive results, not just visuals.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="strategy-client-card">
                        <img src={datainformed} alt="image" />
                        <h4>Data-Informed Decisions:</h4>
                        <p>We blend creativity with analytics, ensuring messaging resonates and campaigns perform, giving measurable growth and engagement.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="strategy-client-card">
                        <img src={bulb} alt="image" />
                        <h4>Custom Solutions:</h4>
                        <p>Every brand is unique. We tailor strategies and visuals specifically to your audience, story, and long-term growth goals.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BrandStrategyChooseUs
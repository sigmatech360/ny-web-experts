import React from 'react'
import portfolio1 from "../../assets/images/services/logodesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/logodesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/logodesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/logodesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/logodesign/portfolio5.webp";
import portfolio6 from "../../assets/images/services/logodesign/portfolio6.webp";
import portfolio7 from "../../assets/images/services/logodesign/portfolio7.webp";
import portfolio8 from "../../assets/images/services/logodesign/portfolio8.webp";
import portfolio9 from "../../assets/images/services/logodesign/portfolio9.webp";
import portfolio10 from "../../assets/images/services/logodesign/portfolio10.webp";
import portfolio11 from "../../assets/images/services/logodesign/portfolio11.webp";
import portfolio12 from "../../assets/images/services/logodesign/portfolio12.webp";
import portfolio13 from "../../assets/images/services/logodesign/portfolio13.webp";

const LogoDesignPortfolio = () => {

  const row1Images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];
  const row2Images = [portfolio7, portfolio8, portfolio9, portfolio10, portfolio11, portfolio12, portfolio13];

  return (
    <section className='logodesign-portfolio-sec'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="logodesign-portfolio-head">
              <h6 className='shorttop-head text-white'>Our portfolio</h6>
              <h2 className='mainhead text-white'>Logos That Hit Home</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logodesign-portfolio-head">
              <p>Making premium logo designs in different styles for different industries and preferences.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">

          {/* TOP SLIDER – Moves Right */}
          <div className="col-lg-12">
            <div className="marquee-logodesign marquee-right">
              <div className="marquee-track">
                {row1Images.map((src, i) => <img key={i} src={src} alt="image" />)}
                {row1Images.map((src, i) => <img key={i + "dup"} src={src} alt="image" />)}
              </div>
            </div>
          </div>

          {/* BOTTOM SLIDER – Moves Left */}
          <div className="col-lg-12">
            <div className="marquee-logodesign marquee-left">
              <div className="marquee-track">
                {row2Images.map((src, i) => <img key={i} src={src} alt="image" />)}
                {row2Images.map((src, i) => <img key={i + "dup"} src={src} alt="image" />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LogoDesignPortfolio

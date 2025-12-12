import React from 'react'
import portfolio1 from "../../assets/images/services/webdesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/webdesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/webdesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/webdesign/portfolio4.webp";


const WebDesignPortfolio = () => {

      const handleEnter = (e) => {
    const img = e.currentTarget;
    const scroll = img.scrollHeight - img.parentElement.clientHeight;
    img.style.transform = `translateY(-${scroll}px)`;
    };

    const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    };
    


  return (
    <section className='webdesign-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webdesign-portfolio-head">
                        <h6 className='shorttop-head'>Web Design Portfolio</h6>
                        <h2 className='mainhead'>See Our Creative Work</h2>
                        <p>Check out our collection of modern, bold, and high-performing websites we built especially for brands that want to lead, and guess what? They did. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="webdesign-portfolio-img">
                        <img src={portfolio1} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webdesign-portfolio-img webdesign-downimg">
                        <img src={portfolio2} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webdesign-portfolio-img webdesign-upimage">
                        <img src={portfolio3} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="webdesign-portfolio-img webdesign-portfolio-fourth">
                        <img src={portfolio4}  onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesignPortfolio
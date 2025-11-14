import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/free-mode";
// import { Autoplay } from "swiper/modules";
import portfolio1 from "../../assets/images/services/wordpressdevelopment/portfolio-1.webp"
import portfolio2 from "../../assets/images/services/wordpressdevelopment/portfolio-2.webp"
import portfolio3 from "../../assets/images/services/wordpressdevelopment/portfolio-3.webp"
import portfolio4 from "../../assets/images/services/wordpressdevelopment/portfolio-4.webp"
import portfolio5 from "../../assets/images/services/wordpressdevelopment/portfolio-5.webp"
import portfolio6 from "../../assets/images/services/wordpressdevelopment/portfolio-6.webp"


import "./index.css";

const portfolioimgs1 = [
  {
    image: portfolio1,
  },
  {
    image: portfolio2,
  },
  {
    image: portfolio3,
  },
];


const portfolioimgs2 = [
  {
    image: portfolio4,
  },
  {
    image: portfolio5,
  },
  {
    image: portfolio6,
  },
];

const PortfolioSec = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,

    responsive: [
      {
        settings: {
          slidesToShow: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="service-portfolio-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="portfolio-head">
              <h6
              className="shorttop-head"
                data-aos="fade-right"
                data-aos-offset="50"
              >
                Our Portfolio
              </h6>
              <h2
              className="mainhead"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Recent Wordpress Projects
              </h2>
              <p>We’ve helped businesses across industries bring their brands online through visually stunning and conversion-focused WordPress websites.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-cards mb-4">
              <Slider {...settings}>
                {portfolioimgs1.map((portfolio, index) => (
                  <div className="portfolio-card" key={index}>
                      <div className="portfolio-img">
                        <img src={portfolio.image} alt="image" />
                      </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="portfolio-cards">
              <Slider {...settings} rtl={true}>
                {portfolioimgs2.map((portfolio, index) => (
                   <div className="portfolio-card" key={index}>
                      <div className="portfolio-img">
                        <img src={portfolio.image} alt="image" />
                      </div>
                  </div>  
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSec;

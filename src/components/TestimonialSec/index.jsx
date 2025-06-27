import React from "react";

import TestimonialCard from "../../components/TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { Autoplay, Mousewheel, Keyboard, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonialData } from "../../data";

const TestimonialSec = (props) => {
  return (
    <section className="testimonials-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="sec-head mb-4">
              <p
                className="sec-tag"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.secTag || `Our Testimonials`}
              </p>
              <h2 data-aos="fade-up" data-aos-duration="3000">
                {props.secTitle || `What our clients are saying about us`}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              loop={true}
              direction="horizontal"
              // slidesPerView={3.5}
              spaceBetween={30}
              mousewheel={true}
              keyboard={{ enabled: true }}
              centeredSlides={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              freeMode={true}
              freeModeMomentum={false}
              grabCursor={true}
              speed={3000}
              modules={[Autoplay, FreeMode]}
              breakpoints={{
                320: {
                  // Small screens (mobile)
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  // Tablets
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  // Desktops
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  // Large screens
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;

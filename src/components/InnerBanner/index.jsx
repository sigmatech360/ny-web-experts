import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";

const InnerBanner = (props) => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        textRef.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      ); // Slight overlap for smoother appearance
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="inner-banner-sec clipedShaped-sec"
      // style={{ backgroundImage: `url(${props?.bannerBG})` }}
    >
      <img
        src={props?.bannerBG}
        alt={props?.title}
        className="inner-banner-sec-bgImg"
        fetchPriority="high"
        width={"1920"}
        height={"1080"}
        // width={"1432"}
        // height={"488"}
      />
      <div className="inner-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-banner-content">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                {props?.title}
              </h1>
              {/* <nav ref={textRef}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props?.page}
                  </li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;

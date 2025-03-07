import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";

const InnerBanner = (props) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(sectionRef.current, {
        opacity: 0,
        scale: 0.5,
        rotateX: -20,
        rotateY: 10,
        y: 120,
        filter: "blur(20px)",
        duration: 2.5,
        ease: "power4.out",
        transformOrigin: "center center",
        perspective: 800,
        onStart: () => {
          gsap.to(sectionRef.current, { scale: 1, duration: 1.8, ease: "expo.out" });
        },
        onComplete: () => {
          gsap.to(sectionRef.current, { filter: "blur(0px)", duration: 0.6 });
        }
      })
        .from(headingRef.current, { opacity: 0, y: 50 }, "-=0.5")
        .from(textRef.current, { opacity: 0, y: 30 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="inner-banner-sec clipedShaped-sec"
      style={{ backgroundImage: `url(${props?.bannerBG})` }}
      ref={sectionRef}
    >
      <div className="inner-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-banner-content">
              <h1 ref={headingRef}>{props?.title}</h1>
              <nav ref={textRef}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props?.page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;

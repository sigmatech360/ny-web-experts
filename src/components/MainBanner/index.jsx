import React, { useLayoutEffect, useRef } from "react";
import bnnerimg from "../../assets/images/bnner-img.webp";
import { gsap } from "gsap";

const MainBanner = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(imageRef.current, { opacity: 0, x: 100, duration: 1.2 })
        .from(
          sectionRef.current,
          {
            opacity: 0,
            scale: 0.7,
            rotateX: -15,
            y: 80,
            filter: "blur(10px)",
            duration: 1.8,
            ease: "expo.out",
            transformOrigin: "center center",
          },
          "-=0.6"
        )
        .from(headingRef.current, { opacity: 0, y: 50 }, "-=0.5")
        .from(textRef.current, { opacity: 0, y: 30 }, "-=0.5")
        .from(
          buttonRef.current,
          { opacity: 0, scale: 0.8, duration: 0.6 },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageMove = (e) => {
    const img = imageRef.current;
    const { offsetX, offsetY, clientX, clientY } = e;
    const { left, top, width, height } = img.getBoundingClientRect();

    const mouseX = clientX - left;
    const mouseY = clientY - top;

    const percentX = (mouseX / width - 0.5) * 2;
    const percentY = (mouseY / height - 0.5) * 2;

    gsap.to(img, {
      scaleX: 1 + percentX * 0.2,
      scaleY: 1 + percentY * 0.2,
      skewX: percentX * 10,
      skewY: percentY * 10,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageRef.current, {
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="main-banner clipedShaped-sec bg-gradiant"
      // ref={sectionRef}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-0 mb-3">
            <div className="main-banner-content">
              <h2 ref={headingRef}>Design & Branding Studio in New York</h2>
              <p className="poppins" ref={textRef}>
                At Edgar 360 Images, we specialize in helping real estate agents
                stand out with high-quality visuals that capture every
                property's best features. Our services include professional
                photography, immersive 360° videos, virtual staging, and more.
                Operated by active police officers, we offer a personalized,
                hands-on experience for each client.
              </p>
              <button className="ny-btn" ref={buttonRef}>
                Explore Our Services
              </button>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-0 mb-3">
            <div className="main-banner-img">
              <img
                src={bnnerimg}
                alt="Banner Image"
                className="img-fluid"
                ref={imageRef}
                onMouseMove={handleImageMove}
                onMouseLeave={handleImageLeave}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MouseHoverImg = ({ image, aosProps }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    let tl = gsap.timeline({ paused: true });

    tl.to(image, {
      scale: 1.2, 
      rotateX: 10, 
      rotateY: 10, 
      duration: 0.8,
      ease: "expo.out", 
    });

    container.addEventListener("mouseenter", () => tl.play());
    container.addEventListener("mouseleave", () => {
      tl.reverse();

      gsap.to(image, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "expo.inOut", 
      });
    });

    
    container.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1; 
      const y = ((e.clientY - top) / height) * 2 - 1; 

      gsap.to(image, {
        x: x * 15, 
        y: y * 15, 
        rotateX: y * -10, 
        rotateY: x * 10, 
        duration: 0.4, 
        ease: "power2.out",
      });

    });

    return () => {
      container.removeEventListener("mouseenter", () => tl.play());
      container.removeEventListener("mouseleave", () => tl.reverse());
      container.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="about-us-left-img" ref={containerRef} {...aosProps}>
      <img
        src={image}
        className="img-fluid"
        alt="New York web expert about content"
        ref={imageRef}
      />
    </div>
  );
};

export default MouseHoverImg;

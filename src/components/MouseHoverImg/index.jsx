import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MouseHoverImg = ({ image, aosProps }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    let tl = gsap.timeline({ paused: true });

    // Smooth Cinematic Scale & Rotation on Hover
    tl.to(image, {
      scale: 1.2, // Subtle scaling for a premium feel
      rotateX: 10, // Slight tilt forward
      rotateY: 10, // Slight horizontal tilt
      duration: 0.8,
      ease: "expo.out", // High-end cinematic easing
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
        ease: "expo.inOut", // Smooth reset effect
      });
    });

    // **Cinematic Mouse Move Effect**
    container.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1; // Normalized (-1 to 1)
      const y = ((e.clientY - top) / height) * 2 - 1; // Normalized (-1 to 1)

      gsap.to(image, {
        x: x * 15, // Horizontal movement
        y: y * 15, // Vertical movement
        rotateX: y * -10, // Opposite tilt for a 3D effect
        rotateY: x * 10, // Opposite tilt for a cinematic touch
        duration: 0.4, // Faster reaction time
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
        alt="About Image 2"
        ref={imageRef}
      />
    </div>
  );
};

export default MouseHoverImg;

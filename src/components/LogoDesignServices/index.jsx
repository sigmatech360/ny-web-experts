import React from "react";
import service1 from "../../assets/images/services/logodesign/service1.webp";
import service2 from "../../assets/images/services/logodesign/service2.webp";
import service3 from "../../assets/images/services/logodesign/service3.webp";
import { Link } from "react-router-dom";

const LogoDesignServices = () => {
  return (
    <section className="logodesign-service-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="logodesign-service-head">
              <h6 className="shorttop-head text-white">Our Expertise </h6>
              <h2 className="mainhead text-white">The Visual Styles Clients Love</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logodesign-service-head">
              <p>We offer a wide range of logo design styles to our clients. Our most in-demand logo designs in New York include:</p>
            </div>
          </div>
        </div>
        <div className="row logodesign-serivce-border">
          <div className="col-lg-6">
            <div className="logodesign-service-img">
              <img src={service1} alt="image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logodesign-service-txt">
              <h4>Wordmark Logos</h4>
              <p>This style uses typography to turn your brand name into a visual signature. We customize the lettering to show personality, mood, and tone. Perfect for brands that want a clean, modern identity with instant readability and long term recognition across digital and print spaces.</p>
              {/* <Link to="/contact-us" className="ny-btn">
                Get Service
              </Link> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="logodesign-service-txt">
              <h4>Mascot Logos</h4>
              <p>A mascot logo adds life, character, and fun to your branding. It represents your brand through an illustrated figure, making your identity more memorable and friendly. Ideal for brands that want storytelling, nostalgia, and emotional engagement through expressive and versatile visuals.</p>
              {/* <Link to="/contact-us" className="ny-btn">
                Get Service
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logodesign-service-img">
              <img src={service2} alt="image" />
            </div>
          </div>
        </div>
        <div className="row logodesign-serivce-border">
          <div className="col-lg-6">
            <div className="logodesign-service-img">
              <img src={service3} alt="image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logodesign-service-txt">
              <h4>Combination Mark Logos</h4>
              <p>This merges an icon with your brand name for maximum impact. The symbol boosts recognition while the text builds trust. A combination mark gives you flexibility across platforms, creating a balanced identity that works for packaging, websites, and digital marketing with consistent clarity.</p>
              {/* <Link to="/contact-us" className="ny-btn">
                Get Service
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignServices;

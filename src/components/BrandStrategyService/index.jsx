import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const BrandStrategyService = ({
  miniHead,
  mainHead,
  description,
  buttonText,
  buttonLink,
  faqs = [],
}) => {
  return (
    <section className="brand-strategy-sec">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="brand-strategy-head">
              <h6 className="minihead text-white">{miniHead}</h6>
              <h2 className="mainhead text-white">{mainHead}</h2>
              <p>{description}</p>
              <Link to={buttonLink} className="ny-btn">
                {buttonText}
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="brand-service-list">
              <Accordion defaultActiveKey="0" alwaysOpen>
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={`${index}`} key={index}>
                    <Accordion.Header as="h3">{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStrategyService;
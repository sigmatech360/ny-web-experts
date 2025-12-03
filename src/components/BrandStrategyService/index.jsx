import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const BrandStrategyService = () => {

  const faqs = [
    {
      header: "Brand Voice",
      content:"Helping you maintain a consistent brand voice across platforms",
    },
    {
      header: "Brand Identity Design",
      content:
        "We build your identity from scratch, or give you a new one! ",
    },
    {
      header: "Merchandising",
      content:
        "We create your offline and online personality through thoughtful merchandising. ",
    },
    {
      header: "Brand Positioning",
      content:
        "Increasing your brand credibility and positioning you as the leader in your niche. ",
    },
    {
      header: "Website Design",
      content:
        "Intuitive website designs for your brand that are functional and beautiful! ",
    },
    {
      header: "Social Media Marketing",
      content:
        "Beyond websites, we ensure your digital presence remains flawless on social media too! ",
    },
  ];

  return (
    <section className="brand-strategy-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="brand-strategy-head">
              <h6 className="minihead text-white">360° Branding</h6>
              <h2 className="mainhead text-white">Our Brand Building Services</h2>
              <p>A Brand Strategy is built on a comprehensive plan that covers every detail of marketing and execution. Here’s what we include:</p>
              <Link to="/contact-us" className="ny-btn">Consult A Strategist</Link>
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

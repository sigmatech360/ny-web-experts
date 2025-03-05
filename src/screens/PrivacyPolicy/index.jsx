import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import ContactUsSec from "../../components/ContactUsSec";

const privacyPolicySections = [
  {
    id: 1,
    title: "Terms & Conditions",
    paragraphs: [
      "At NY Web Experts, we hold the privacy of our clients in the highest regard on nywebexperts.com. We treat their information with the same care as our own. While we do gather information from our clients, its purpose is solely to enhance our customer services. We acknowledge our responsibility to maintain and utilize our clients’ information appropriately. We want to assure you that we never rent or sell the information provided by our clients online.",
      "This policy outlines how we collect, use, and safeguard personal information obtained from our clients. It also describes the options available to you regarding the collection and use of your information.",
    ],
  },
  {
    id: 2,
    title: "Collection of Personal Information",
    paragraphs: [
      "We collect details such as the client’s name, email, mailing address, and phone number. These pieces of information are provided by the client during the ordering process or when saving their information with us. Additionally, email addresses and mailing addresses obtained through forms like our Contact Us Form might be used to respond to comments and queries.",
      "We also maintain records of past items that interested our clients and their online purchases.",
    ],
  },
  {
    id: 3,
    title: "Use of Collected Data",
    paragraphs: [
      "The information we gather serves various purposes. It’s used to process client orders, and we send confirmation emails for these orders. Our customer services may contact clients by phone, mailing address, or email for any inquiries related to their orders.",
      "Clients might receive updates about our site and services, including newsletters and promotional information. Moreover, the information about clients’ interests and purchases helps us enhance our website design and improve the overall purchasing experience.",
    ],
  },
  {
    id: 4,
    title: "Newsletter Opt-out",
    paragraphs: ["", ""],
  },
  {
    id: 5,
    title: "Social Media and Widgets",
    paragraphs: ["", ""],
  },
  {
    id: 6,
    title: "Third-Party Sharing",
    paragraphs: ["", ""],
  },
  {
    id: 7,
    title: "Security of Personal Information",
    paragraphs: ["", ""],
  },
  {
    id: 8,
    title: "Access to Registered Accounts",
    paragraphs: ["", ""],
  },
  {
    id: 9,
    title: "Changing & Deleting Accounts",
    paragraphs: ["", ""],
  },
  {
    id: 10,
    title: "Cookies and Clear Gifs",
    paragraphs: ["", ""],
  },
  {
    id: 11,
    title: "Testimonials",
    paragraphs: ["", ""],
  },
  {
    id: 12,
    title: "Links to Other Websites",
    paragraphs: ["", ""],
  },
  {
    id: 13,
    title: "Changes to Privacy Policy",
    paragraphs: ["", ""],
  },
];

const PrivacyPolicy = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Privacy Policy"
        page="Privacy Policy"
      />

      <section className="privacy-policy-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {privacyPolicySections.map((section, index) => (
                <div className="privacy-policy-content" key={index}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactUsSec className="mb-5" />
      <GetStarted />
    </DefaultLayout>
  );
};

export default PrivacyPolicy;

import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import ContactUsSec from "../../components/ContactUsSec";
import { privacyPolicySections } from "../../data";

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
            <div className="col-md-12">
              <div className="privacy-policy-content mb-0">
                <h3>Questions</h3>
                <p>
                  For privacy policy inquiries, contact us at{" "}
                  <a href="tel:+1 (917) 791-7872">+1 (917) 791-7872</a> or{" "}
                  <a href="mailto:support@nywebexperts.com">
                    support@nywebexperts.com
                  </a>
                  .
                </p>
              </div>
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

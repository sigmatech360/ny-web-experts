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
              {/* {privacyPolicySections.map((section, index) => (
                <div className="privacy-policy-content" key={index}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ))} */}
              <div className="privacy-policy-content">
                <p>{`NY Web Experts ("Company," "we," "us," or "our") is committed to safeguarding your privacy. This Privacy Policy outlines the manner in which we collect, use, store, and disclose your personal information when you engage with our website and services. It also describes your rights and options under applicable United States privacy regulations, including those under New York State law.`}</p>
                <h2>Information We Collect</h2>
                <p>
                  We collect both personally identifiable and non-personal
                  information through your interactions with our website:
                </p>

                <h3>Personally Identifiable Information</h3>
                <ul>
                  {[
                    "Full name",
                    "Email address",
                    "Contact number",
                    "Contact number",
                    "Billing and payment information",
                    "Project-related content or materials you voluntarily provide",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Non-Personal Information</h3>
                <ul>
                  {[
                    "IP address",
                    "Browser type and version ",
                    "Device type and operating system",
                    "Referring web pages",
                    "Pages visited, session duration, and behavioral analytics",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies, tags, pixels, and similar technologies to
                  enhance website performance, facilitate navigation, and
                  analyze user behavior. You may manage cookie preferences
                  through your browser settings.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                  Collected information may be utilized for the following
                  purposes:
                </p>
                <ul>
                  {[
                    "Provision and management of our web development services",
                    "Processing of transactions and sending billing-related communications",
                    "Responding to customer inquiries and support requests",
                    "Enhancing user experience through customization",
                    "Sending updates, newsletters, and promotional content (with opt-out options)",
                    "Analyzing website usage for service improvement",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Information Sharing and Disclosure</h2>
                <p>
                  We do not sell your personal information. However, your data
                  may be shared:
                </p>
                <ul>
                  {[
                    "With trusted third-party vendors assisting in business operations under confidentiality obligations",
                    "As required by applicable laws, regulations, or legal proceedings",
                    "To safeguard our legal rights, property, or safety",
                    "In the event of a business transfer, merger, or asset acquisition",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement commercially reasonable administrative,
                  technical, and physical measures to secure your information.
                  While we strive for maximum protection, we cannot guarantee
                  absolute security due to the inherent risks of online
                  transmission.
                </p>

                <h2>Your Rights and Choices</h2>
                <p>You retain the following rights:</p>
                <ul>
                  {[
                    "Access to and correction of your personal information",
                    "Request deletion of your data, subject to legal and contractual obligations",
                    "Opt out of marketing communications at any time",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Children’s Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of
                  13. We do not knowingly collect personal data from children.
                  If we learn that a child under 13 has provided us with
                  personal information, we will take steps to delete such data.
                </p>

                <h2>Updates to This Privacy Policy</h2>
                <p>
                  This Privacy Policy may be updated periodically. Any changes
                  will be reflected on this page along with a revised effective
                  date.
                </p>

                <div className="privacyPolicyLastDiv">
                  <h2>Contact Information</h2>
                  <p>NY Web Experts</p>
                  <p>
                    <span className="fw-bold">Email:</span>{" "}
                    <a href="malto:support@nywebexperts.com">
                      support@nywebexperts.com
                    </a>
                  </p>
                  <p>
                    <span className="fw-bold">Phone:</span>{" "}
                    <a href="tel:(917)7917872">(917)-791-7872</a>
                  </p>
                  <p>
                    <span className="fw-bold">Website:</span>{" "}
                    <a href="https://nywebexperts.com">
                      https://nywebexperts.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
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
            </div> */}
          </div>
        </div>
      </section>

      <ContactUsSec className="mb-5" />
      <GetStarted />
    </DefaultLayout>
  );
};

export default PrivacyPolicy;

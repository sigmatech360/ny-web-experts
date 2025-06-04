import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import ContactUsSec from "../../components/ContactUsSec";
import { termsAndCondition } from "../../data";

const TermsConditions = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Terms & Conditions"
        page="Terms & Conditions"
      />

      <section className="privacy-policy-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* {termsAndCondition?.map((item, index) => (
                <div className="privacy-policy-content" key={index}>
                  {item.title && <h2>{item.title}</h2>}

                  {item.subTite && <h3>{item.subTite}</h3>}

                  {item.paragraphs &&
                    item.paragraphs.map((para, i) => <p key={i}>{para}</p>)}

                  {item.list && (
                    <ul>
                      {item.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {item.paragraphsAfterList &&
                    item.paragraphsAfterList.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                </div>
              ))} */}

              <div className="privacy-policy-content">
                <p>
                  These Terms & Conditions govern your access to and use of the
                  NY Web Experts website and associated services. By accessing
                  or using our website, you confirm that you have read,
                  understood, and agree to be legally bound by these Terms. If
                  you do not agree to these Terms, you must refrain from using
                  the website and services.
                </p>
                <h2>Authorized Use</h2>
                <p>
                  You agree to utilize this website solely for lawful and
                  legitimate purposes. Any misuse, unauthorized access, or
                  interference with our platform may result in the termination
                  of your access and legal recourse.
                </p>

                <h2>Intellectual Property Rights</h2>
                <p>
                  All content available on this website, including, but not
                  limited to, text, graphics, logos, icons, and software, is the
                  exclusive property of NY Web Experts or its content providers
                  and is protected by applicable intellectual property laws. You
                  may not copy, reproduce, modify, or distribute any content
                  without prior written consent.
                </p>

                <h2>User Responsibilities</h2>
                <p>By using our website, you agree not to:</p>
                <ul>
                  {[
                    "Violate any federal, state, or local laws or regulations",
                    "Transmit malicious code, viruses, or disruptive files",
                    "Attempt unauthorized access to our servers or systems",
                    "Interfere with the security or functionality of the website",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Client Content and Intellectual Property</h2>
                <p>
                  Any project-related content or material submitted by clients
                  must be owned by the client or legally authorized for use. NY
                  Web Experts reserves the right to reject any content that
                  violates copyright laws or our internal content policies.
                </p>

                <h2>Payments and Refund Policy</h2>
                <p>
                  All payments for services rendered are subject to the terms
                  specified in the official agreement, proposal, or invoice.
                  Refunds, if applicable, are granted solely at the discretion
                  of NY Web Experts and only in situations where services have
                  not yet been initiated or completed.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  Under no circumstances shall NY Web Experts be liable for any
                  indirect, incidental, consequential, or punitive damages
                  arising from your use or inability to use our website or
                  services, including but not limited to data loss, service
                  interruptions, or unauthorized access
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website may include hyperlinks to external websites. NY
                  Web Experts does not endorse and is not responsible for the
                  content, policies, or practices of third-party sites.
                </p>

                <h2>Data Retention and User Privacy</h2>
                <p>
                  NY Web Experts retains project-related data solely for the
                  duration of the project lifecycle. We do not store personal
                  data once the project is completed. Clients may be contacted
                  in the future solely for service-related follow-ups or to
                  offer extended solutions, without retaining sensitive or
                  personally identifiable information beyond project delivery.
                </p>

                <h2>No Data Storage or Ownership Post-Completion</h2>
                <p>
                  NY Web Experts does not store or retain client personal
                  information once the project has been completed. Clients
                  maintain full ownership of their data throughout and following
                  project delivery. NY Web Experts does not assert any rights or
                  claims over client data or digital assets post-completion.
                </p>

                <h2>Payment Gateway and Third-Party Services</h2>
                <p>
                  Payments for NY Web Experts services are processed through
                  secure third-party payment gateways. We do not store credit
                  card or payment credentials on our servers. All transactions
                  are subject to the terms and privacy policies of the
                  third-party payment providers.
                </p>

                <h2>Modifications to Terms</h2>
                <p>
                  We reserve the right to amend or update these Terms &
                  Conditions at any time without prior notice. Continued use of
                  the website constitutes your acceptance of any such changes.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These Terms & Conditions shall be governed by and construed in
                  accordance with the laws of the State of New York and the
                  United States. Any disputes shall be subject to the exclusive
                  jurisdiction of the courts located within New York.
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
          </div>
        </div>
      </section>

      <ContactUsSec className="mb-5" />
      <GetStarted />
    </DefaultLayout>
  );
};

export default TermsConditions;

import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import ContactUsSec from "../../components/ContactUsSec";
import ReactHelmet from "../../components/ReactHelmet";

const PrivacyPolicy = () => {
  return (
    <>
      <ReactHelmet
        title="NY Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/privacy-policy"
      />
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
              <div className="privacy-policy-content">

                <h2>Privacy Policy</h2>
                <p>At NY Web Experts, we hold the privacy of our clients in the highest regard on nywebexperts.com. We treat their information with the same care as our own. While we do gather information from our clients, its purpose is solely to enhance our customer services. We acknowledge our responsibility to maintain and utilize our clients’ information appropriately. We want to assure you that we never rent or sell the information provided by our clients online.</p>
                <p>This policy outlines how we collect, use, and safeguard personal information obtained from our clients. It also describes the options available to you regarding the collection and use of your information.</p>

                <h3>Collection of Personal Information</h3>
                <p>We collect details such as the client’s name, email, mailing address, and phone number. These pieces of information are provided by the client during the ordering process or when saving their information with us. Additionally, email addresses and mailing addresses obtained through forms like our Contact Us Form might be used to respond to comments and queries.</p>

                <p>We also maintain records of past items that interested our clients and their online purchases.</p>

                <h3>Use of Collected Data</h3>
                <p>The information we gather serves various purposes. It’s used to process client orders, and we send confirmation emails for these orders. Our customer services may contact clients by phone, mailing address, or email for any inquiries related to their orders.</p>
                <p>Clients might receive updates about our site and services, including newsletters and promotional information. Moreover, the information about clients’ interests and purchases helps us enhance our website design and improve the overall purchasing experience.</p>

                <h3>Newsletter Opt-out</h3>
                <p>If you no longer wish to receive our newsletters and promotional communications, you can opt out by following the instructions provided in each communication. Alternatively, you can contact us via email at support@nywebexperts.com or call us at +1 (917) 722-0955</p>

                <h3>Social Media and Widgets</h3>
                <p>Our website includes Social Media Features and Widgets, such as the Facebook Like button. These features may collect your IP address and page visits for proper functionality. Interactions with these features are subject to the privacy policies of the respective companies.</p>

                <h3>Third-Party Sharing</h3>
                <p>We do not share personal information with third parties unless described in this policy. We never sell personal information to third parties. We use trusted companies for services like credit card processing and live customer support chat.</p>

                <h3>Security of Personal Information</h3>
                <p>We prioritize the security of client information. We use Secure Sockets Layer (SSL) Software for encryption during transmission. While we strive for industry-standard security measures, no method of online data transmission is entirely foolproof.</p>

                <h3>Access to Registered Accounts</h3>
                <p>Clients can access their registered accounts by signing in on our homepage. This provides access to previous lists and submitted information. Users can update their information through the “My Account” section.</p>

                <h3>Changing & Deleting Accounts</h3>
                <p>Clients can request account cancellation or personal information deletion by emailing us. This will stop further email communication related to online orders.</p>

                <h3>Cookies and Clear Gifs</h3>
                <p>Cookies, or alphanumeric identifiers, are used to enhance the user experience. Clear gifs help manage site content effectively. We maintain IP address logs for site diagnostics and broad demographic data, without tying it to personally identifiable information.</p>

                <h3>Testimonials</h3>
                <p>With consent, we may post testimonials along with names. Removal requests are honored.</p>

                <h3>Links to Other Websites</h3>
                <p>Linked websites have different privacy practices. Personal information submitted to those sites is governed by their privacy statements.</p>

                <h3>Changes to Privacy Policy</h3>
                <p>We may modify this policy and will communicate changes through various means. Review this policy periodically for updates.</p>

                <p className="fw-bold mb-1">Questions</p>
                <p>For privacy policy inquiries, contact us at +1 (917) 722-0955 or support@nywebexperts.com.</p>
                
                {/* <ul>
                  {[
                    "Fullname",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}

                

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
                    <a href="tel:+19177220955">+1 (917) 722-0955</a>
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
                  <a href="tel:+19177917872">+1 (917) 791-7872</a> or{" "}
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
    </>
  );
};

export default PrivacyPolicy;

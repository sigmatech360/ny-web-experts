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
              {termsAndCondition?.map((item, index) => (
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

export default TermsConditions;

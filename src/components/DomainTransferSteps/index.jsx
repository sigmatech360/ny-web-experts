import React from "react";
import stepone from "../../assets/images/services/domaintransfer/step1.webp";
import steptwo from "../../assets/images/services/domaintransfer/step2.webp";
import stepthree from "../../assets/images/services/domaintransfer/step3.webp";
import stepfour from "../../assets/images/services/domaintransfer/step4.webp";
import { Link } from "react-router-dom";

const DomainTransferSteps = () => {
  return (
    <section className="domain-transfer-steps">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="transfer-step-txt">
              <h6 className="shorttop-head">Manage Your Domain</h6>
              <h2 className="mainhead">Benefits of Domain Transfer</h2>
              <p>
                Switching your domain doesn’t have to be risky, but if you do it
                yourself, you risk losing your data, your backup, and possibly
                even your website. With NY Web Experts, enjoy a smooth domain
                transfer, zero downtime, total security, and complete ownership
                control from start to finish.
              </p>
              <Link to="/about" className="ny-btn">
                Talk to Domain Professionals
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="benefits-transfer-scroll">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="transfer-step">
                    <img src={stepone} alt="image" />
                    <div className="transfer-step-txt">
                      <h4>Zero Downtime:</h4>
                      <p>
                        Keep your site online during the entire transfer
                        process, ensuring uninterrupted business and user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="transfer-step">
                    <div className="transfer-step-txt">
                      <h4>Advanced Security:</h4>
                      <p>
                        Every domain transfer is encrypted and ICANN-verified to
                        prevent data breaches, hijacking, or unauthorized
                        access.
                      </p>
                    </div>
                    <img src={steptwo} alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="transfer-step">
                    <img src={stepthree} alt="image" />
                    <div className="transfer-step-txt">
                      <h4>Complete Ownership Control: </h4>
                      <p>
                        Gain full access to manage, renew, or modify your domain
                        settings at any time, without dependency on third
                        parties.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="transfer-step">
                    <div className="transfer-step-txt">
                      <h4>Fast & Guided Process:</h4>
                      <p>
                        Our experts handle each step, from unlocking to DNS
                        configuration, ensuring a smooth and timely migration.
                      </p>
                    </div>
                    <img src={stepfour} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainTransferSteps;

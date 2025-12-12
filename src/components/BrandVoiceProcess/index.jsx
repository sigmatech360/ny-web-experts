import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrandVoiceProcess = ({ brandvoiceprocesssec, miniHead, mainHead, steps = [] }) => {
  return (
    <section className={brandvoiceprocesssec || 'brandvoice-sec'}>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="voice-process-head">
              <h6 className='shorttop-head'>{miniHead}</h6>
              <h2 className='mainhead'>{mainHead}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="voice-process-card">
                <h4>{step.number}</h4>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
                {step.btntxt && <Link to="/contact-us">{step.btntxt} <FaLongArrowAltRight /></Link>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandVoiceProcess;

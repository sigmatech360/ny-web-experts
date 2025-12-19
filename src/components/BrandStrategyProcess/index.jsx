import React from 'react';

const BrandStrategyProcess = ({
  shortTopHead,
  mainHead,
  description,
  processItems,
}) => {
  return (
    <section className='brand-strategy-process'>
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="strategy-process-head">
              <h6 className='shorttop-head'>{shortTopHead}</h6>
              <h2 className='mainhead'>{mainHead}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {processItems?.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="strategy-process-card">
                <h4>{item.step}</h4>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandStrategyProcess;

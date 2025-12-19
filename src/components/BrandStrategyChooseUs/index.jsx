import React from 'react';

const BrandStrategyChooseUs = ({
  shortTopHead,
  mainHead,
  description,
  secClass,
  chooseItems,
}) => {
  return (
    <section className={secClass || 'strategy-choose-sec'}>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="strategy-choose-head">
              <h6 className='shorttop-head text-white'>{shortTopHead}</h6>
              <h2 className='mainhead text-white'>{mainHead}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {chooseItems?.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="strategy-client-card">
                <img src={item.img} alt="image" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandStrategyChooseUs;

import React from 'react';

const TransferWhyus = ({
  shortTopHead,
  mainHead,
  description,
  stats,
}) => {
  return (
    <section className='transfer-whyus-sec'>
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="transfer-why-txt">
              <h6 className='shorttop-head text-white'>{shortTopHead}</h6>
              <h2 className='mainhead text-white'>{mainHead}</h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {stats?.map((item, index) => (
                <div className="col-lg-6 col-md-6" key={index}>
                  <div className="whyus-box">
                    <h3>{item.value}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransferWhyus;

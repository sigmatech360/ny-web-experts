import React from 'react';

const OurProcess = ({ minihead, mainhead, mainpara, data }) => {
  return (
    <section className='our-process-sec'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="our-process-head">
              <h6 className='shorttop-head'>{minihead}</h6>
              <h2 className='mainhead'>{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-3" key={index}>
              <div className="process-box">
                <h3>{item.number}</h3>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

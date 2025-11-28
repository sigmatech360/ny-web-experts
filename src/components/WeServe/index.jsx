import React from "react";
 
const WeServe = ({ serves, minihead, title, secPara }) => {
  return (
    <section className="weserve-sec">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
            <div className="weservce-head">
                <h6 className="shorttop-head text-white">{minihead}</h6>
                <h2 className="mainhead text-white">{title}</h2>
                <p>{secPara}</p>
            </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {serves?.map((item, idx) => (
          <div
            className="col-lg-2 col-md-6 rounded serve-item"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="50"
            key={idx}
          >
            <img src={item.img} className="img-fluid" alt="image" />
            <p className="mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};
 
export default WeServe;
import React from 'react'

const BrandStrategyExpertise = () => {

  const boxes = [
    {
      num: "01",
      title: "Our Vision:",
      desc: "To empower businesses with memorable brands that inspire trust, loyalty, and lasting impact globally."
    },
    {
      num: "02",
      title: "Our Mission",
      desc: "The mission of our brand strategy services in New York is to build creative brand strategies that connect audiences with purpose, personality, and clarity."
    },
    {
      num: "01",
      title: "Our Vision:",
      desc: "To empower businesses with memorable brands that inspire trust, loyalty, and lasting impact globally."
    },
    {
      num: "02",
      title: "Our Mission",
      desc: "The mission of our brand strategy services in New York is to build creative brand strategies that connect audiences with purpose, personality, and clarity."
    }
  ];

  // Duplicate array for infinite loop
  const scrollingData = [...boxes, ...boxes];

  return (
    <section className='brand-srategy-expertise'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="strategy-expertise-head">
              <h6 className='shorttop-head text-white'>Our Expertise</h6>
              <h2 className='mainhead text-white'>The Strategy Behind Successful Brands</h2>
              <p>A brand strategy made by experts builds the foundation your business grows on. It shapes how people see you, remember you, and choose you among endless options. With a clear brand strategy, you step into industry leadership and create long-term value in your audience’s mind. This makes every marketing effort stronger, smarter, and more profitable.</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {scrollingData.map((item, index) => (
                  <div className="strategy-expertise-box" key={index}>
                    <h4>{item.num}</h4>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BrandStrategyExpertise

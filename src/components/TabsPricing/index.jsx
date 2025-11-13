import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PricePlanCard from "../PricePlanCard";
import FormModal from "../FormModal";

const TabsPricing = ({ minihead, mainhead, secPara, tabsData = [] }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="tabs-pricing-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="tabs-pricing-head text-center">
              {minihead && <h6>{minihead}</h6>}
              {mainhead && <h2>{mainhead}</h2>}
              {secPara && <p>{secPara}</p>}
            </div>
          </div>
        </div>

        {/* Dynamic Tabs */}
        <div className="row">
          <div className="col-lg-12">
            <div className="dynamic-pricing-tabs">
              <Tabs>
                <TabList className="react-tabs__tab-list nav nav-tabs">
                  {tabsData.map((tab, index) => (
                    <Tab key={index}>{tab.title}</Tab>
                  ))}
                </TabList>

                {tabsData.map((tab, tabIndex) => (
                  <TabPanel key={tabIndex}>
                    <div className="pricing-cards row">
                      {tab.packages?.map((pkg, pkgIndex) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={pkgIndex}>
                          <PricePlanCard
                            variant="gray"
                            name={pkg.name}
                            price={pkg.price}
                            description={pkg.description}
                            list={pkg.list}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default TabsPricing;

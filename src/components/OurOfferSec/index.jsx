import PurpleBGSec from "../PurpleBGSec";
import { TbChecks } from "react-icons/tb";

const OurOfferSec = (props) => {
  return (
    <PurpleBGSec
      secClass="services__info-sec"
      tag={props.secTag}
      title={props.secTitle}
      secDescription={props.secDescription}
    >
      {props.listdata.map((item, index) => (
        <div className="col-lg-4 col-md-6 mb-md-5 mb-4" key={index}>
          <div className={`content-with-icon-item flex-row`}>
            <div className="content-with-icon-icon">
              <TbChecks />
            </div>
            <div className="content-with-icon-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </PurpleBGSec>
  );
};

export default OurOfferSec;

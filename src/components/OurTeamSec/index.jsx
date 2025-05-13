
import PurpleBGSec from "../PurpleBGSec";
import { teamData } from "../../data";
import TeamCard from "../TeamCard";

const OurTeamSec = (props) => {
  return (
    <PurpleBGSec tag={props.secTag || `Our Team`} title={props.secTitle || `Meet Out Team`}>
      {teamData.map((item, index) => (
        <div
          className="col-md-4 mb-md-0 mb-4"
          data-aos="fade-up"
          data-aos-duration="2000"
          key={index}
        >
          <TeamCard
            image={item?.image}
            name={item?.name}
            designation={item?.designation}
          />
        </div>
      ))}
    </PurpleBGSec>
  );
};

export default OurTeamSec;

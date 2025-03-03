import React from "react";
import PurpleBGSec from "../PurpleBGSec";
import { teamData } from "../../data";
import TeamCard from "../TeamCard";

const OurTeamSec = () => {
  return (
    <PurpleBGSec tag="Our Team" title="Meet Out Team">
      {teamData.map((item, index) => (
        <div className="col-md-4 mb-md-0 mb-4" key={index}>
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

import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";

const TeamCard = (props) => {
  return (
    <div className={`team-card`}>
      <div className="team-card-header">
        <img src={props?.image} alt={props?.name} className="img-fluid" />
      </div>
      <div className="team-card-body">
        <h3>{props?.name}</h3>
        <p>{props?.designation}</p>
        <div className="header_social-icons">
          <a
            className="header_social-icon"
            href="javascript:;"
            rel="noopener noreferrer"
            title="Follow Facebook"
            aria-label="Facebook"
          >
            <CiFacebook />
          </a>
          <a
            className="header_social-icon"
            href="javascript:;"
            rel="noopener noreferrer"
            title="Follow Whatsapp"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            className="header_social-icon"
            href="javascript:;"
            rel="noopener noreferrer"
            title="Follow Instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="header_social-icon"
            href="javascript:;"
            rel="noopener noreferrer"
            title="Follow Pinterest"
            aria-label="Pinterest"
          >
            <RiPinterestLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

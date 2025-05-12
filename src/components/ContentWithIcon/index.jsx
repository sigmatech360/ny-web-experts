import React from "react";

const ContentWithIcon = (props) => {
  return (
    <div
      className={`content-with-icon-item ${
        props?.variant ? `flex-${props?.variant}` : ""
      }`}
    >
      <div className="content-with-icon-img">
        {props?.icon && <img src={props?.icon} alt="Content Icon" />}
        {props.iconText && <p>{props.iconText}</p>}
      </div>
      <div className="content-with-icon-content">
        <h5>{props?.name}</h5>
        <p>{props?.description}</p>
      </div>
    </div>
  );
};

export default ContentWithIcon;

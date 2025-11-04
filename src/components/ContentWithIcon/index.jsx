import React from "react";

const ContentWithIcon = (props) => {
  return (
    <div
      className={`content-with-icon-item ${
        props?.variant ? `flex-${props?.variant}` : ""
      }`}
    >
      <div className="content-with-icon-img">
        {props?.icon && <img src={props?.icon} alt={"icon"} />}
        {props.iconText && <p>{props.iconText}</p>}
      </div>
      <div className="content-with-icon-content">
        <h4>{props?.name}</h4>
        <p>{props?.description}</p>
      </div>
    </div>
  );
};

export default ContentWithIcon;

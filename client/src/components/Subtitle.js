import React from "react";

const Subtitle = ({title}) => {
  return (
    <div className="subtitle">
      <span>{title}</span>
      <div className="bottom-line"></div>
    </div>
  );
};

export default Subtitle;

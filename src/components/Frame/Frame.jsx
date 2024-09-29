/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ className, text = "Monitor" }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper">{text}</div>
      <div className="text-wrapper">Device Setup</div>
      <div className="text-wrapper">Data Report</div>
      <div className="text-wrapper">Interaction</div>
      <div className="text-wrapper">About Us</div>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
};

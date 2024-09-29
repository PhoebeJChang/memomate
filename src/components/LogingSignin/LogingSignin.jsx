/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogingSignin = ({ property1, className, SINGInClassName, overlapGroupClassName }) => {
  return (
    <div className={`LOGING-SIGNIN ${property1} ${className}`}>
      <div className={`overlap-group-wrapper ${SINGInClassName}`}>
        <div className={`overlap-group-2 ${overlapGroupClassName}`}>
          {property1 === "SING-IN" && <div className="sign-in">SIGN IN</div>}

          {property1 === "LOG-IN" && <>LOG IN</>}
        </div>
      </div>
    </div>
  );
};

LogingSignin.propTypes = {
  property1: PropTypes.oneOf(["SING-IN", "LOG-IN"]),
};

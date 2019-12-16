import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-container">
      <div className="text-element">
        <p>
          Your request has been send, we will send confirmation mail shortly.
        </p>
        <Link to="/" className="success__btn btn">
          Back to the home
        </Link>
      </div>
    </div>
  );
};

export default Success;

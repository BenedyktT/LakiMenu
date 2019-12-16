import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <section className="location section">
      <div className="location__bg"></div>
      <div className="bg--overlay"></div>
      <h1 className="section__headline">Visit Gígur Restaurant</h1>
      <Link
        data-aos="zoom-in"
        to="/location"
        className="section__btn btn location__btn"
      >
        {" "}
        Location
      </Link>
    </section>
  );
};

export default Location;

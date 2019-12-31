import React from "react";
import { Link } from "react-router-dom";

const Cocktails = () => {
  return (
    <section className="cocktail section">
      <div className="bar__bg"></div>
      <div className="bg--overlay"></div>
      <h1 className="section__headline">Bar</h1>
      <Link
        data-aos="zoom-in"
        to="/bar"
        className="section__btn btn location__btn"
      >
        {" "}
        Drink Menu
      </Link>
    </section>
  );
};

export default Cocktails;

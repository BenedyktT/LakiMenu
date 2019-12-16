import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <Fragment>
      <section className="section menu">
        <div className="section__bg menu__bg"></div>
        <div className="bg--overlay"></div>
        <div className="menu__text">
          <h1 className="section__headline">See our Menu</h1>
          <Link
            data-aos="zoom-in"
            to="/menu"
            className="section__btn btn menu__btn"
          >
            Menu
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Menu;

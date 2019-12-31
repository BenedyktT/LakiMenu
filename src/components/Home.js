import React, { Fragment, useContext } from "react";
import { ReactComponent as Arrow } from "../images/logos/svg/arrow.svg";
import About from "./mainPage/About";
import Testimonials from "./mainPage/Testimonials";
import Location from "./mainPage/Location";
import Menu from "./mainPage/Menu";
import Gallery from "./mainPage/Gallery";
import { HashLink } from "react-router-hash-link";
import { ModalContext } from "../context";
import Cocktails from "./mainPage/Cocktails";

const Home = () => {
  const [state] = useContext(ModalContext);
  const { modalIsOpen } = state;

  return (
    <Fragment>
      <header className="header">
        <div className="header-bg"></div>
        {!modalIsOpen && (
          <div id="to-about" className="arrow">
            <HashLink to="/#to-about">
              <Arrow />
            </HashLink>
          </div>
        )}
      </header>
      <main>
        <About />
        <Menu />
        <Location />
        <Testimonials />
        <Gallery />
        <Cocktails />
      </main>
    </Fragment>
  );
};

export default Home;

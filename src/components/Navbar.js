import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logos/svg/logo.svg";
import { ReactComponent as Fb } from "../images/logos/svg/fb.svg";
import { ReactComponent as Insta } from "../images/logos/svg/insta.svg";
import { ReactComponent as Ta } from "../images/logos/svg/ta.svg";
import Logotype from "../images/logotype.png";
import Logoname from "../images/logoname.png";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../helper/scrollTrack";

const Navbar = () => {
  const [isHamburgerClicked, toggleHamburgerClicked] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  return (
    <header>
      <nav className={hideOnScroll ? "nav" : "nav nav__scroll"}>
        <a href="/" className="brand">
          <img className="logotype" src={Logotype} alt="restaurant logo" />
          <img className="logoname" src={Logoname} />
        </a>
        <ul className="sociallinks">
          <li>
            <a href="https://www.hotellaki.is/" target="_blank">
              <Logo />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hotellaki.is/" target="_blank">
              <Fb />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hotel.laki/?hl=en"
              target="_blank"
            >
              <Insta />
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g315850-d18894108-Reviews-Gigur_Restaurant-Kirkjubaejarklaustur_South_Region.html"
              target="_blank"
            >
              <Ta style={{ width: "20px" }} />
            </a>
          </li>
        </ul>
        <div className="items-right">
          <Link to="/reserve" className="cta btn">
            Reservation
          </Link>
          <label className="toggle-nav__label" htmlFor="nav__checkbox">
            <div
              className={
                isHamburgerClicked
                  ? "hamburger-container active"
                  : "hamburger-container"
              }
            >
              <div className="hamburger"></div>
            </div>
            <input
              onChange={() => toggleHamburgerClicked(!isHamburgerClicked)}
              type="checkbox"
              name=""
              id="nav__checkbox"
            />
          </label>
        </div>
        <div
          className={
            isHamburgerClicked ? "toggle-nav toggle-nav__active" : "toggle-nav"
          }
        >
          <ul className="toggle-nav__elements">
            <li className="toggle-nav__element reservation--index">
              <Link
                className="nav__reserve"
                to="/reserve"
                className="btn btn--nav"
              >
                Reserve
              </Link>
            </li>
            <li className="toggle-nav__element about-el">
              <a href="#to-about">about</a>
            </li>
            <li className="toggle-nav__element">
              <a href="./about.html">location</a>
            </li>
            <li className="toggle-nav__element">
              <a href="./menu.html">menu</a>
            </li>
            <li className="toggle-nav__element gallery-el">
              <button
                className="reset-button uppercase"
                onClick={() => {
                  window.location.hash = "to-gallery";
                  toggleHamburgerClicked(false);
                }}
              >
                GALLERY
              </button>
            </li>
            <li className="toggle-nav__element">
              <a href="./cocktails.html">cocktails</a>
            </li>
            <ul className="toggle-nav__social-links">
              <li>
                <a href="https://www.hotellaki.is/" target="_blank">
                  <Logo />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hotellaki.is/"
                  target="_blank"
                >
                  <Fb />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hotel.laki/?hl=en"
                  target="_blank"
                >
                  <Insta />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g315850-d18894108-Reviews-Gigur_Restaurant-Kirkjubaejarklaustur_South_Region.html"
                  target="_blank"
                >
                  <Ta />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

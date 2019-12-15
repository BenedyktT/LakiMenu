import React, { Fragment } from "react";
import { ReactComponent as Arrow } from "../images/logos/svg/arrow.svg";
import About from "./mainPage/About";
import Testimonials from "./mainPage/Testimonials";
import Location from "./mainPage/Location";
import Menu from "./mainPage/Menu";
import Gallery from "./mainPage/Gallery";

const Home = () => {
	return (
		<Fragment>
			<header className="header">
				<div className="header-bg"></div>
				<div id="to-about" className="arrow">
					<Arrow />
				</div>
			</header>
			<main>
				<About />
				<Menu />
				<Location />
				<Testimonials />
				<Gallery />
			</main>
		</Fragment>
	);
};

export default Home;

import React, { Fragment, useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../images/logos/svg/arrow.svg";
import About from "./mainPage/About";
import Testimonials from "./mainPage/Testimonials";
import Location from "./mainPage/Location";
import Menu from "./mainPage/Menu";
import Gallery from "./mainPage/Gallery";
import { HashLink } from "react-router-hash-link";
import Cocktails from "./mainPage/Cocktails";
import hero from "../images/heroVideo.mp4";
import heroSmall from "../images/heroVideoSmallest.mp4";
import { withGetScreen } from "react-getscreen";
import { InView, useInView } from "react-intersection-observer";

const Home = ({ isMobile }) => {
	const [shouldVideoPlay, setShouldVideoPlay] = useState(true);
	let source = isMobile() ? heroSmall : hero;
	return (
		<Fragment>
			<header className="header">
				<InView
					threshold={0.1}
					as="div"
					onChange={(inView, entry) =>
						inView ? setShouldVideoPlay(true) : setShouldVideoPlay(false)
					}
					className="header-bg"
				>
					<video
						className="videoTag"
						autoPlay
						loop={shouldVideoPlay}
						muted
						height="100%"
					>
						<source src={source} type="video/mp4" />
					</video>
				</InView>

				{
					<div id="to-about" className="arrow">
						<HashLink to="/#to-about">
							<Arrow />
						</HashLink>
					</div>
				}
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

export default withGetScreen(Home);

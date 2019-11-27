import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

export default class Gallery extends React.Component {
	state = {};
	importAll(r) {
		return r.keys().map(r);
	}

	render() {
		const images = this.importAll(
			require.context("../images/gallery", false, /\.(png|jpe?g|svg)$/)
		);
		const slider = (
			<LazyLoad height={200} offset={100}>
				{" "}
				<Carousel
					emulateTouch={true}
					centerMode={false}
					swipeScrollTolerance={30}
					useKeyboardArrows={true}
					dynamicHeight={true}
				>
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image}
								alt={`restaurant gallery image ${index}`}
								style={{}}
							/>
						</div>
					))}
				</Carousel>
			</LazyLoad>
		);

		return <div className="gallery-wrapper">{slider}</div>;
	}
}

import React from "react";

const Location = () => {
	return (
		<section className="location section">
			<div className="location__bg"></div>
			<div className="bg--overlay"></div>
			<h1 className="section__headline">Visit Gígur Restaurant</h1>
			<button
				data-aos="zoom-in"
				onClick={() => console.log("click")}
				className="section__btn btn location__btn"
			>
				{" "}
				Location
			</button>
		</section>
	);
};

export default Location;

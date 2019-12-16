import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="about">
			<div className="about__chef">
				<h1>Our mission</h1>
				<p>A little about us</p>
			</div>
			<div className="about__art" data-aos="zoom-in">
				Welcome to Gígur Restaurant. We hope that you will enjoy the food and
				the service. We have all been doing our best to prepare your arrival and
				we strive to meet your expectations. We take pride in offering you
				products from our local farmers. At Hotel Laki, dining options are
				designed with you in mind. Start the day with a hearty breakfast or
				nutritious light bite; savor innovative dishes prepared with only the
				freshest ingredient
			</div>
			<Link to="/reserve" className="about__button cta btn">
				Book a table
			</Link>
		</section>
	);
};

export default About;

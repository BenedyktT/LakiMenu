import React from "react";

const Bar = () => {
	return (
		<section className="section bar">
			<div id="bar__bg"></div>
			<div className="bar__text">
				<h2 className="section__headline">Gígur Bar</h2>
				<button
					data-aos="zoom-in"
					onclick="window.location.href='./cocktails.html'"
					className="section__btn btn cocktails__btn"
				>
					Cocktails
				</button>
			</div>

			<article className="bar__article">
				After a long, long day full of activities you can just sit down in
				comfortable chairs at bar area and take a rest. If you would also like
				to taste our local (strongers) specials, our bartenders are ready to
				serve you amazing cocktails and drinks baised also on typical Icelandic
				alcohols. Try our bests based on quality alcohols from Iceland and all
				around the world.
			</article>
		</section>
	);
};

export default Bar;

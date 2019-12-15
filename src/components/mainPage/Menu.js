import React, { Fragment } from "react";

const Menu = () => {
	return (
		<Fragment>
			<section className="section menu">
				<div className="section__bg menu__bg"></div>
				<div className="bg--overlay"></div>
				<div className="menu__text">
					<h1 className="section__headline">See our Menu</h1>
					<button
						data-aos="zoom-in"
						onClick={() => console.log("click")}
						className="section__btn btn menu__btn"
					>
						Menu
					</button>
				</div>
			</section>
		</Fragment>
	);
};

export default Menu;

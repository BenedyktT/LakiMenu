import React from "react";

export default function MenuContent(props) {
	return (
		<div>
			<div className={`menu-section ${props.course}`}>
				<h1>{props.course}</h1>
				<ul className="menu-section__items">
					<hr className="jola" />
					{props.dishes.map(dish => (
						<li key={dish.name} className="menu-section__item container">
							<p className="dish-name">{dish.name}</p>
							{dish.description && (
								<p className="dish-description">{dish.description}</p>
							)}
							<span className="dish-price">{dish.price}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

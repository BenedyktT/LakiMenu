import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { InView, useInView } from "react-intersection-observer";
import classnames from "classnames";

const Menu = () => {
	const [activeSection, setActiveSection] = useState({
		starters: false,
		mainDishes: false,
		desserts: false,
		group: false
	});
	return (
		<main className="margin-top-8">
			{/* <aside className="side-navbar">
				<ul className="side-navbar__items">
					<li
						className={classnames("side-navbar__item", {
							active: activeSection.starters
						})}
					>
						<HashLink to="#starters">
							<div>starters</div>
						</HashLink>
					</li>
					<li
						className={classnames("side-navbar__item", {
							active: activeSection.mainDishes
						})}
					>
						<HashLink to="#main-dishes">
							<div>main dishes</div>
						</HashLink>
					</li>
					<li
						className={classnames("side-navbar__item", {
							active: activeSection.desserts
						})}
					>
						<HashLink to="#desserts">
							<div>desserts</div>
						</HashLink>
					</li>
					<li
						className={classnames("side-navbar__item", {
							active: activeSection.group
						})}
					>
						<HashLink to="#group-menu">
							<div>group menu</div>
						</HashLink>
					</li>
				</ul>
			</aside> */}
			<InView
				threshold={0.15}
				onChange={(inView, entry) =>
					inView
						? setActiveSection({ ...activeSection, starters: true })
						: setActiveSection({ ...activeSection, starters: false })
				}
				as="section"
				id="starters"
				className="starters menu-section"
			>
				<div className="headline">
					<div className="headline__bg starters__bg">
						<div className="bg--overlay"></div>
					</div>
					<div className="headline__text">
						<h2>Buffet</h2>
					</div>
				</div>
				<div className="menu__list menu--short">
					<article className="buffet">
						<p>
							We are offering a buffet filled by best traditional Icelandic
							dishes with a modern touch. Important parts of Icelandic cuisine
							are lamb, dairy, and fish, hence our menu often includes arctic
							char, cod and lamb shank. We have wide range of vegetarian and
							gluten free options as well.
						</p>
						<ul>
							<li>Adults – 7500 ISK</li>
							<li>Children 6-12 years old – 3750 ISK</li>
							<li>Children &lt; 6 years old – free entrance</li>
						</ul>
						<p>
							The buffet varies day to day – please contact us for more details
						</p>
					</article>
				</div>
			</InView>
			<InView
				threshold={0.15}
				as="section"
				onChange={(inView, entry) =>
					inView
						? setActiveSection({ ...activeSection, mainDishes: true })
						: setActiveSection({ ...activeSection, mainDishes: false })
				}
				id="main-dishes"
				className="main-dishes menu-section"
			>
				<div className="headline">
					<div className="headline__bg main-dishes__bg">
						<div className="bg--overlay"></div>
					</div>
					<div className="headline__text">
						{" "}
						<h2>Breakfast</h2>
					</div>
				</div>
				<div className="menu__list menu--short">
					<article className="buffet">
						<p>
							Starting your day the right way is essential if you want to enjoy
							Iceland. In Hotel Laki you can sample fresh pastries, sip from a
							wide variety of drinks and taste our special dishes. Our breakfast
							is prepared to charge you up before a day full of amazing
							experiences.
						</p>
						<ul>
							<li>Adults – 2400 ISK</li>
						</ul>
						<p>Breakfast is served between 7 a.m. and 10 a.m.</p>
					</article>
				</div>
			</InView>
			{/* 
			<InView
				threshold={0.15}
				as="section"
				onChange={(inView, entry) =>
					inView
						? setActiveSection({ ...activeSection, desserts: true })
						: setActiveSection({ ...activeSection, desserts: false })
				}
				id="desserts"
				className="desserts menu-section"
			>
				<div className="headline">
					<div className="headline__bg desserts__bg">
						<div className="bg--overlay"></div>
					</div>
					<div className="headline__text">
						{" "}
						<h2>Desserts</h2>
					</div>
				</div>
				<div className="menu__list menu--short">
					<ul className="menu">
						<li>
							<p className="menu--item">Vanilla skyr</p>
							<p className="menu--describtion">
								with berry sauce, crumble and berries.
							</p>
							<p className="menu--price">1400kr</p>
							<hr />
						</li>
						<li>
							<p className="menu--item">Warm chocolate brownie</p>
							<p className="menu--describtion">
								With vanilla ice cream and berry sauce.
							</p>
							<p className="menu--price">1500kr</p>
							<hr />
						</li>
						<li>
							<p className="menu--item">Ice cream trio from Sudurfoss</p>
							<p className="menu--describtion">
								With chocolate sauce and berries.
							</p>
							<p className="menu--price">1200kr</p>
							<hr />
						</li>
					</ul>
				</div>
			</InView>
			<InView
				threshold={0.15}
				as="section"
				onChange={(inView, entry) =>
					inView
						? setActiveSection({ ...activeSection, group: true })
						: setActiveSection({ ...activeSection, group: false })
				}
				id="group-menu"
				className="group menu-section"
			>
				<div className="headline">
					<div className="headline__bg group__bg">
						<div className="bg--overlay"></div>
					</div>
					<div className="headline__text">
						{" "}
						<h2>Group Menu</h2>
					</div>
				</div>
				<div className="menu__list">
					<ul className="menu__items">
						<li className="menu__item group__menu">
							<h2 className="menu__item-headline">Menu 1</h2>
							<ul className="menu__item-content">
								<li>
									<p>
										Tomato – paprika soup with basil pesto and parmigiano cheese{" "}
									</p>
								</li>
								<li>
									<p>
										Roasted lamb with swede puree, root vegetables and lamb –
										berry demi glace
									</p>
								</li>
								<li>
									<p>Local ice cream variation </p>
								</li>
							</ul>
							<hr />
						</li>
						<li className="menu__item group__menu">
							<h2 className="menu__item-headline">Menu 2</h2>
							<ul className="menu__item-content">
								<li>
									<p>Cauliflower-broccoli cream soup </p>
								</li>
								<li>
									<p>
										Local arctic char with parsnip puree, grilled vegetables and
										lemongrass sauce{" "}
									</p>
								</li>
								<li>
									<p>Chocolate cake with wiped cream </p>
								</li>
							</ul>
							<hr />
						</li>
						<li className="menu__item group__menu">
							<h2 className="menu__item-headline">Menu 3</h2>
							<ul className="menu__item-content">
								<li>
									<p>Wild mushroom cream soup with parmigiano cheese </p>
								</li>
								<li>
									<p>
										Grilled chicken breast with baked potatoes, sun dried
										tomatoes and creamy rosemary sauce{" "}
									</p>
								</li>
								<li>
									<p>Skyr cake with raspberry sauce </p>
								</li>
							</ul>
							<hr />
						</li>
					</ul>
				</div>
			</InView> */}
		</main>
	);
};

export default Menu;

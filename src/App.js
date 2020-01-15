import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import { Provider } from "./context";
import Success from "./components/Success";
import Menu from "./components/Menu";
import Location from "./components/Location";
import ScrollToTop from "react-router-scroll-top";
import Cocktails from "./components/Cocktails";
import Presentation from "./components/Presentation";

const App = () => {
	return (
		<Provider>
			<Router>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/reserve" component={Reserve} />
						<Route exact path="/success" component={Success} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/location" component={Location} />
						<Route exact path="/bar" component={Cocktails} />
						<Route
							exact
							path="/presentation"
							render={() => (
								<Presentation
									width="100%"
									height="100%"
									style={{ border: "none" }}
									src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FI2epWd97HhYMH92Ud3dKaD%2FLakiPresentation2019%3Fscaling%3Dscale-down-width%26node-id%3D22%253A2"
								/>
							)}
						/>
					</Switch>
					<Footer />
				</ScrollToTop>
			</Router>
		</Provider>
	);
};

export default App;

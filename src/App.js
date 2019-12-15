import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/reserve" component={Reserve} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;

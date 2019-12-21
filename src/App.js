import React, { useState } from "react";
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
import Modal from "react-modal";
import BuffetAd from "./images/buffet-ad.png";
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		zIndex: "1000"
	}
};
Modal.setAppElement("#app");

const App = () => {
	let subtitle;
	const [modalIsOpen, setModalOpen] = useState(true);
	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<Provider>
			<Router>
				<Navbar />
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<button className="btn-modal" onClick={closeModal}>
						x
					</button>
					<div className="modal-content">
						<div className="modal-bg">
							<img src={BuffetAd} alt="" />
						</div>
					</div>
				</Modal>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/reserve" component={Reserve} />
					<Route exact path="/success" component={Success} />
					<Route exact path="/menu" component={Menu} />
					<Route exact path="/location" component={Location} />
				</Switch>
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;

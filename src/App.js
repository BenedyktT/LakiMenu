import React, { useState, useContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import { Provider, ModalContext, modalReducer, initialState } from "./context";
import Success from "./components/Success";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Modal from "react-modal";
import BuffetAd from "./images/buffet-ad.png";
Modal.defaultStyles.overlay.backgroundColor = "#8176768e";
Modal.defaultStyles.overlay.zIndex = "5";
const customStyles = {
	content: {
		zIndex: "8",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		padding: 0,
		backgroundColor: "#8176768e",
		border: "none"
	}
};
Modal.setAppElement("#app");

const App = () => {
	const useModalState = useReducer(modalReducer, initialState);
	const [state, dispatch] = useModalState;

	const { modalIsOpen } = state;
	const openModal = () => {
		dispatch({ type: "SET_MODAL_OPEN" });
	};
	const closeModal = () => {
		dispatch({ type: "SET_MODAL_CLOSE" });
	};

	return (
		<Provider value={useModalState}>
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

					<div className="modal-bg">
						<img className="buffet-img" src={BuffetAd} alt="" />
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

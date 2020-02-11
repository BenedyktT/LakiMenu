import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import { Provider, modalReducer, initialState } from "./context";
import Success from "./components/Success";
import Menu from "./components/Menu";
import Location from "./components/Location";
import ScrollToTop from "react-router-scroll-top";
import Cocktails from "./components/Cocktails";
import Presentation from "./components/Presentation";
import Modal from "react-modal";
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
		<Provider>
			<Router>
				<ScrollToTop>
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

						<div style={{ textAlign: "center" }} className="modal-bg ">
							<h1>Dear Guests</h1>
							<hr />
							<p>On 12.02.2020 Gigur Restaurant will be closed</p>
							<br />
							<p>We will be back on 13.02.2020</p>
						</div>
					</Modal>

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

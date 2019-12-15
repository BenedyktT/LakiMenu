import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

const App = () => {
	return (
		<div style={{ zIndex: "100" }}>
			<Navbar />
		</div>
	);
};

export default App;

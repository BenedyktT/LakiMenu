import React from "react";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Reserve from "./components/Reserve";
import { Provider } from "./context";
import Success from "./components/Success";
import Menu from "./components/Menu";
import Location from "./components/Location";

const App = () => {
  return (
    <Provider>
      <Router>
        <Navbar />
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

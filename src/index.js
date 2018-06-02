import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-particles-js";
import particlesConfig from "./configs";
import Sections from "./containers/sections";
import registerServiceWorker from "./registerServiceWorker";
import Nav from "./containers/nav/nav";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Particles params={particlesConfig} className="particles" />
      <Nav />
      <Sections />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

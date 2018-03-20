import React from "react";
import { render } from "react-dom";
import Particles from "./Particles";
import "./index.css";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const App = () => (
  <div style={styles.root}>
    <Particles />
  </div>
);

render(<App />, document.getElementById("root"));

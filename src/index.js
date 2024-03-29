import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ClusteredContext } from "./Context/ClustredContext/ClustredContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ClusteredContext>
        <App />
      </ClusteredContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

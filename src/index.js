import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "mdbootstrap/css/mdb.min.css";
import "mdbootstrap/js/mdb.min.js";
import "./index.css";
import "jquery/dist/jquery.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <App styles={{ border: "1px solid red" }} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

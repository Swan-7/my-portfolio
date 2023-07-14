import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToastContainer transition={Slide}/>
  </BrowserRouter>,
  document.getElementById("root")
);

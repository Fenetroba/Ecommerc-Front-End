import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./secondSrc/reportWebVitals";
import './index.css'
import Context from "./Component/context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);

reportWebVitals();

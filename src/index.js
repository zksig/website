import React from "react";
import ReactDOM from "react-dom/client";
import mixpanel from "mixpanel-browser";
import App from "./App";
import "./index.css";

mixpanel.init("651203480f5ef4a1159840dd20c9d95b");
mixpanel.track("Sign up");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

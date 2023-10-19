import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
const root = document.getElementById("root");
if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    _jsx(React.StrictMode, {
      children: _jsx(HashRouter, { children: _jsx(App, {}) }),
    })
  );
}

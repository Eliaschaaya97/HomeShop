import React from "react";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

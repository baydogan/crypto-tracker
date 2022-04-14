import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/tailwind.css";
import { SearchProvider } from "./contexts/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/tailwind.css";
import { CryptoListProvider } from "./contexts/CryptoListContext";
import { OptionsProvider } from "./contexts/OptionsContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <FavoritesProvider>
        <CryptoListProvider>
          <OptionsProvider>
            <App />
          </OptionsProvider>
        </CryptoListProvider>
      </FavoritesProvider>

  </React.StrictMode>
);

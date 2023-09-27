import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Auth0ProviderWithNavigate } from "./Auth0ProviderWithNavigate";
import './i18n';
import './styles/main.css';

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
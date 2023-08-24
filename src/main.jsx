import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContextProvider from "./context/GlobalContextProvider.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#272a44">
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </SkeletonTheme>
);

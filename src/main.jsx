import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./Contexts/ContextProvider";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
  </React.StrictMode>
);

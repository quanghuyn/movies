import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./Contexts/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

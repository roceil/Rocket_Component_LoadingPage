import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Index from "./pages/Index";
import "./index.css";
import App from "./App";

const userQuery = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={userQuery}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

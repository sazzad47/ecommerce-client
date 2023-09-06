import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "react-notifications/lib/notifications.css";
import "rc-dropdown/assets/index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

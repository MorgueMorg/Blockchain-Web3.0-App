import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);

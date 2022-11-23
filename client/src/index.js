import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { CartContextProvider } from "./context/cart/CartContext";

ReactDOM.render(
  <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

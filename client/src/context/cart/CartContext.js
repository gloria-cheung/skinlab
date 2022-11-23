import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const INITIAL_STATE = {
  cart: null,
  cartFetching: false,
  cartError: false,
};

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
  const [state, cartDispatch] = useReducer(CartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartFetching: state.cartFetching,
        cartError: state.cartError,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

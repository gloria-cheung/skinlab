const CartReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_CART_START":
      return {
        cart: null,
        cartFetching: true,
        cartError: false,
      };
    case "CREATE_CART_SUCCESS":
      return {
        cart: action.payload,
        cartFetching: false,
        cartError: false,
      };
    case "CREATE_CART_FAILURE":
      return {
        cart: null,
        cartFetching: false,
        cartError: action.payload,
      };
    case "ADD_TO_CART_START":
      return {
        cart: state.cart,
        cartFetching: true,
        cartError: false,
      };
    case "ADD_TO_CART_SUCCESS":
      state.cart.cart_items.push(action.payload);
      state.cart.cart.total +=
        action.payload.quantity * action.payload.product.price;
      // ensures formated to 2 dec places
      state.cart.cart.total = Math.round(state.cart.cart.total * 100) / 100;

      return {
        cart: state.cart,
        cartFetching: false,
        cartError: false,
      };
    case "ADD_TO_CART_FAILURE":
      return {
        cart: state.cart,
        cartFetching: false,
        cartError: action.payload,
      };
    case "UPDATE_CART_START":
      return {
        cart: state.cart,
        cartFetching: true,
        cartError: false,
      };
    case "UPDATE_CART_SUCCESS":
      for (let i = 0; i < state.cart.cart_items.length; i++) {
        if (state.cart.cart_items[i].id === action.payload.id) {
          if (state.cart.cart_items[i].quantity > action.payload.quantity) {
            state.cart.cart.total -= action.payload.price;
          } else {
            state.cart.cart.total += action.payload.price;
          }
          state.cart.cart_items[i].quantity = action.payload.quantity;
        }
      }
      // ensures formated to 2 dec places
      state.cart.cart.total = Math.round(state.cart.cart.total * 100) / 100;

      return {
        cart: state.cart,
        cartFetching: false,
        cartError: false,
      };
    case "UPDATE_CART_FAILURE":
      return {
        cart: state.cart,
        cartFetching: false,
        cartError: action.payload,
      };

    case "DELETE_FROM_CART_START":
      return {
        cart: state.cart,
        cartFetching: true,
        cartError: false,
      };
    case "DELETE_FROM_CART_SUCCESS":
      state.cart.cart_items = state.cart.cart_items.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart.cart.total -= action.payload.price;
      // ensures formated to 2 dec places
      state.cart.cart.total = Math.round(state.cart.cart.total * 100) / 100;

      return {
        cart: state.cart,
        cartFetching: false,
        cartError: false,
      };
    case "DELETE_FROM_CART_FAILURE":
      return {
        cart: state.cart,
        cartFetching: false,
        cartError: action.payload,
      };

    case "DELETE_CART_SUCCESS":
      return {
        cart: null,
        cartFetching: false,
        cartError: false,
      };

    default:
      return state;
  }
};

export default CartReducer;

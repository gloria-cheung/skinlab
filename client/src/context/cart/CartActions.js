export const CreateCartStart = () => {
  return { type: "CREATE_CART_START" };
};

export const CreateCartSuccess = (cart) => {
  return { type: "CREATE_CART_SUCCESS", payload: cart };
};

export const CreateCartFailure = (error) => {
  return { type: "CREATE_CART_FAILURE", payload: error };
};

export const AddToCartStart = () => {
  return { type: "ADD_TO_CART_START" };
};

export const AddToCartSuccess = (item) => {
  return { type: "ADD_TO_CART_SUCCESS", payload: item };
};

export const AddToCartFailure = (error) => {
  return { type: "ADD_TO_CART_FAILURE", payload: error };
};

export const UpdateCartStart = () => {
  return { type: "UPDATE_CART_START" };
};

export const UpdateCartSuccess = () => {
  return { type: "UPDATE_CART_SUCCESS" };
};

export const UpdateCartFailure = () => {
  return { type: "UPDATE_CART_FAILURE" };
};

export const DeleteFromCartStart = () => {
  return { type: "DELETE_FROM_CART_START" };
};

export const DeleteFromCartSuccess = () => {
  return { type: "DELETE_FROM_CART_SUCCESS" };
};

export const DeleteFromCartFailure = () => {
  return { type: "DELETE_FROM_CART_FAILURE" };
};

export const DeleteCartSuccess = () => {
  return { type: "DELETE_CART_SUCCESS" };
};

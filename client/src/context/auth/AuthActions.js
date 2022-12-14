export const LoginStart = (userCredentials) => {
  return { type: "LOGIN_START" };
};

export const LoginSuccess = (user) => {
  return { type: "LOGIN_SUCCESS", payload: user };
};

export const LoginFailure = (error) => {
  return { type: "LOGIN_FAILURE", payload: error };
};

export const RegisterStart = (userCredentials) => {
  return { type: "REGISTER_START" };
};

export const RegisterSuccess = (user) => {
  return { type: "REGISTER_SUCCESS", payload: user };
};

export const RegisterFailure = (error) => {
  return { type: "REGISTER_FAILURE", payload: error };
};

export const LogoutSuccess = () => {
  return { type: "LOGOUT_SUCCESS" };
};

export const LogoutFailure = (error) => {
  return { type: "LOGOUT_FAILURE", payload: error };
};

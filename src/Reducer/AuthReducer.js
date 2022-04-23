export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, user: { ...state.user, name: action.payload } };
    case "USERNAME":
      return { ...state, user: { ...state.user, username: action.payload } };
    case "EMAIL":
      return { ...state, user: { ...state.user, email: action.payload } };
    case "PASSWORD":
      return { ...state, user: { ...state.user, password: action.payload } };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        user: { ...state.user, confirmPassword: action.payload },
      };
    case "TOKEN":
      return { ...state, token: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

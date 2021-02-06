const initialState = {
  token: localStorage.getItem("auth-token"),
  authorizing: false,
  error: true,
};

export function authorization(state = initialState, action) {
  switch (action.type) {
    case "auth/started":
      return {
        ...state,
        authorizing: true,
        error: false,
      };

    case "auth/succeed":
      return {
        ...state,
        authorizing: false,
        token: action.payload.token,
      };

    case "auth/failed":
      return {
        ...state,
        authorizing: false,
        error: true,
      };

    case "auth/logout":
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
}

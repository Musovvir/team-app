export const initialState = {
  loading: false,
  users: [],
};

export function users(state = initialState, action) {
  switch (action.type) {
    case "load/users/start":
      return {
        ...state,
        loading: true,
      };

    case "load/users/success":
      return {
        ...state,
        loading: false,
        users: action.payload.login,
      };

    default:
      return state;
  }
}

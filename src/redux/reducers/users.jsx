export const initialState = {
  loading: false,
  users: [],
};

export function posts(state = initialState, action) {
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
        users: action.payload,
      };

    default:
      return state;
  }
}

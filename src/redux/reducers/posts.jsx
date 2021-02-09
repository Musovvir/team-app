export const initialState = {
  loading: false,
  opened: false,
  posts: [],
};

export function posts(state = initialState, action) {
  switch (action.type) {
    case "load/posts/start":
      return {
        ...state,
        loading: true,
      };

    case "load/posts/success":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case "toggle/modal":
      return {
        ...state,
        opened: !state.opened,
      };

    default:
      return state;
  }
}

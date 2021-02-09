export const initialState = {
  loading: false,
  posts: [],
  opened: true,
  title: "",
  text: "",
  deleting: false,
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

    case "get/title":
      return {
        ...state,
        title: action.payload,
      };

    case "get/text":
      return {
        ...state,
        text: action.payload,
      };

    case "send/posts/start":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case "send/posts/success":
      return {
        ...state,
        posts: state.posts.map((post) => {
          return {
            ...post,
          };
        }),
      };

    case "delete/post/start":
      return {
        ...state,
        deleting: true,
      };

    case "delete/post/success":
      return {
        ...state,
        deleting: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
}

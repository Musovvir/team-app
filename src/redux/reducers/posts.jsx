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

    case "clear/input":
      return {
        ...state,
        title: "",
        text: "",
      };

    case "send/posts/start":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case "send/posts/success":
      return {
        ...state,
        //fixme нет смысла
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

//Actions

export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "load/posts/start" });

    fetch("/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/posts/success",
          payload: json,
        });
      });
  };
}

export function toggleModal() {
  return { type: "toggle/modal" };
}

export function getTitle(title) {
  return { type: "get/title", payload: title };
}

export function getText(text) {
  return { type: "get/text", payload: text };
}

export function sendPost() {
  return (dispatch, getState) => {
    const { title, text } = getState().posts;
    const { profile } = getState().authorization;

    dispatch({
      type: "send/posts/start",
      payload: { title, text, date: new Date(), userId: profile.id },
    });

    fetch("/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        text,
        date: new Date(),
        userId: profile.id,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "send/posts/success",
        });
      });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch({ type: "delete/post/start" });

    fetch(`/posts/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "delete/post/success",
          payload: id,
        });
      });
  };
}

export function clearInput() {
  return { type: "clear/input" };
}

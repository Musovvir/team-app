export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "load/posts/start" });

    fetch("https://localhost:3010/posts")
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

import { scrollPostDown } from "../../utils/ScrollPosts";

export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "load/posts/start" });

    fetch("http://localhost:3010/posts")
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

export function getImage(image) {
  return { type: "get/image", payload: image };
}

export function sendPost(title, text, image) {
  return (dispatch) => {
    dispatch({
      type: "send/posts/start",
      payload: { title, text, image },
    });

    fetch("http://localhost:3010/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        text,
        image
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "send/posts/success",
        });
        scrollPostDown();
      });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch({ type: "delete/post/start" });

    fetch(`http://localhost:3010/posts/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "delete/post/success",
          payload: id,
        });
      });
  };
}


export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "load/posts/start" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/posts/success",
          payload: json,
        });
      });
  };
}

export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "load/users/start" });

    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/users/success",
          payload: json
        });
      });
  };
}

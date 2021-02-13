export const loginStart = (login, password) => (dispatch) => {
  dispatch({ type: "auth/started" });

  fetch("http://localhost:3010/users")
    .then((response) => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.5) {
        dispatch({
          type: "auth/failed",
          payload: json,
        });
      } else {
        localStorage.setItem("auth-token", json[0].token);

        dispatch({
          type: "auth/succeed",
          payload: json,
        });
      }
    });
};

export const logoutStart = () => {
  localStorage.removeItem("auth-token");

  return {
    type: "auth/logout",
  };
};

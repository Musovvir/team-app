export const loginStart = (login, password) => {
  return (dispatch) => {
    dispatch({ type: "auth/started" });

    fetch("http://localhost:3000/login")
      .then((response) => response.json())
      .then((json) => {
        const random = Math.random();

        if (random < 0.5) {
          dispatch({
            type: "auth/failed",
            payload: json,
          });
        } else {
          dispatch({
            type: "auth/succeed",
            payload: json,
          });
        }
      });
  };
};

export const logoutStart = () => {
  localStorage.removeItem("auth-token");

  return {
    type: "auth/logout",
  };
};

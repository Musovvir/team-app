const initialState = {
  token: localStorage.getItem("auth-token"),
  authorizing: localStorage.getItem("authorizing") || false,
  profile: JSON.parse(localStorage.getItem("profile")) || {},
  checked: null,
  error: false,
};

export function authorization(state = initialState, action) {
  switch (action.type) {
    case "authorization/success":
      return {
        ...state,
        authorizing: true,
        profile: action.payload,
        error: false,
      };

    case "authorization/error":
      return {
        ...state,
        authorizing: false,
        error: true,
      };

    case "auth/succeed":
      return {
        ...state,
        authorizing: false,
        token: action.payload[0].token,
      };

    case "auth/logout":
      return {
        ...state,
        authorizing: false,
        profile: {},
      };

    case "toggle/check":
      return {
        ...state,
        checked: !state.checked,
      };

    default:
      return state;
  }
}

//Actions

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
          payload: json[0],
        });
      }
    });
};

export const logoutStart = () => {
  localStorage.removeItem("authorizing");
  localStorage.removeItem("profile");

  return {
    type: "auth/logout",
  };
};

export const authorizationStart = (login, password) => (dispatch) => {
  dispatch({ type: "" });

  fetch(`/authorization/login=${login}/password=${password}`)
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem("authorizing", true);
      localStorage.setItem("profile", JSON.stringify(json));

      dispatch({
        type: "authorization/success",
        payload: json,
      });
    })
    .catch(() => dispatch({ type: "authorization/error" }));
};

export const toggleCheck = () => {
  return (dispatch) => {
    dispatch({ type: "toggle/check" });
  };
};

/** State **/

const initialState = {
  token: localStorage.getItem("auth-token"),
  authorizing: localStorage.getItem("authorizing") || false,
  profile: JSON.parse(localStorage.getItem("profile")) || {},
  checked: null,
  error: false,
};

/** Reducer **/

export default function authorization(state = initialState, action) {
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

/** Thunks **/

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

export const logoutStart = () => {
  localStorage.removeItem("authorizing");
  localStorage.removeItem("profile");

  return {
    type: "auth/logout",
  };
};


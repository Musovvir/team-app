export const initialState = {
  loading: false,
  users: [],
  nickname: "",
  email: "",
  password: "",
};

export function users(state = initialState, action) {
  switch (action.type) {
    case "load/users/start":
      return {
        ...state,
        loading: true,
      };

    case "load/users/success":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "get/login":
      return {
        ...state,
        nickname: action.payload,
      };

    case "get/email":
      return {
        ...state,
        email: action.payload,
      };

    case "get/password":
      return {
        ...state,
        password: action.payload,
      };

    case "send/users/start":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "send/users/success":
      return {
        ...state,
        users: state.users.map((user) => {
          return {
            ...user,
          };
        }),
      };

    default:
      return state;
  }
}

//Actions

export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "load/users/start" });

    fetch("/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/users/success",
          payload: json,
        });
      });
  };
}

export function getLogin(nickname) {
  return { type: "get/login", payload: nickname };
}

export function getEmail(email) {
  return { type: "get/email", payload: email };
}

export function getPassword(password) {
  return { type: "get/password", payload: password };
}

export function sendUsers() {
  return (dispatch, getState) => {
    const { nickname, email, password } = getState().users;

    dispatch({
      type: "send/users/start",
      payload: { nickname, email, password },
    });

    fetch("/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "send/users/success",
        });
      });
  };
}

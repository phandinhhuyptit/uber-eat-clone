let defaultState = {
  user: null,
};

let authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default authReducer;

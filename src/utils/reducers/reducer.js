const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY_TO_SEARCH':
      return {
        ...state,
        queryToSearch: action.queryToSearch,
      };

    case 'SWITCH_THEME':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        userData: action.userData,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };

    default:
      return state;
  }
};

export default reducer;

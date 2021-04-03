const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY_TO_SEARCH':
      return {
        ...state,
        queryToSearch: action.queryToSearch,
      };

    default:
      return state;
  }
};

export default reducer;

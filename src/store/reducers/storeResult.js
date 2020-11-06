const intialState = { results: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "DeleteStoredResult":
      const deletedResultArray = state.results.filter(
        (res) => res.id !== action.deletedResult
      );
      return {
        ...state,
        results: deletedResultArray
      };
  }

  return state;
};

export default reducer;

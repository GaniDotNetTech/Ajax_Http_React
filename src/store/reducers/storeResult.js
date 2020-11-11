const intialState = { results: [] };
const storeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "StoredResult":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: action.result })
      };
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

export default storeReducer;

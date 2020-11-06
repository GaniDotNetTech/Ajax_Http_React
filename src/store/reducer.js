const intialState = { counter: 0, results: [] };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "Decrement":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "Add":
      return {
        ...state,
        counter: state.counter + action.val
      };
    case "Subtract":
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "StoredResult":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter })
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

export default reducer;
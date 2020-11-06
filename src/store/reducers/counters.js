const intialState = { counter: 0 };
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
  }

  return state;
};

export default reducer;

const intialState = { counter: 0 };
const reducer = (state = intialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1
    };
  }
  return state;
};

export default reducer;

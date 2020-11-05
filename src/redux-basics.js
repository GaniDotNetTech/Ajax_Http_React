const reduxBase = require("redux");
//creating a central store
const createStoreBase = reduxBase.createStore;

const intialState = { counter: 0 };

//Creating reducer and changing the state and passing to store
const rootReduxer = (state = intialState, action) => {
  if (action.type === "INC_Counter") {
    return {
      ...state,
      Counter: state.counter + 1
    };
  }
  if (action.type === "ADD_Counter") {
    return {
      ...state,
      Counter: state.counter + action.type
    };
  }
  return state;
};
//Store Creation using reducer getting the updated state
const storeBase = createStoreBase(rootReduxer);
console.log(storeBase.getState());
//subscriptions
storeBase.subscribe(() => {
  console.log("Subscriptions", storeBase.getState());
});

//Action dispatching type is important while disptaching the action,we can add properties as per
storeBase.dispatch({ type: "INC_Counter" });
storeBase.dispatch({ type: "ADD_Counter", value: 10 });
console.log(storeBase.getState());

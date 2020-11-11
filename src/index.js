import React from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import counterReducer from "./store/reducers/counters";
import resultReducer from "./store/reducers/storeResult";
//import registerServiceWorker from "./registerServiceWorker";
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});
const store = createStore(rootReducer);
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
// axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();

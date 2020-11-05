import React from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
//import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);
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

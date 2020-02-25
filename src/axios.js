import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
//instance.defautls.headers.Common["Auth"] = "Auth";
instance.interceptors.request.use(req => {
  console.log("axios instance" + req);
  return req;
});

export default instance;

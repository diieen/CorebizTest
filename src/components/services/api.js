import axios from "axios";

const productsAPI = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
});

export default productsAPI;
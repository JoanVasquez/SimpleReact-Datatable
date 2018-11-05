import axios from "axios";

export default class Service {
  constructor() {
    this.url = "https://jsonplaceholder.typicode.com/todos";
  }

  async list() {
    try {
      let result = await axios.get(this.url);
      return result.data;
    } catch (ex) {
      throw ex.response.data;
    }
  }
}

import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000/",
    });
  }

  login(body) {
    return this.apiClient.post("/auth/login", body);
  }

}

const apiClient = new ApiClient();
export default apiClient;
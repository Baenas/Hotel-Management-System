import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000/" ,
    });
  }

  login(body) {
    return this.apiClient.post("/auth/login", body);
  }
/* 
  logout() {
    return this.apiClient.get("/logout");
  }

  whoami() {
    return this.apiClient.get("/whoami");
  }

  getProtected() {
    return this.apiClient.get("/protected"); 
  }*/
}

const apiClient = new ApiClient();
export default apiClient;
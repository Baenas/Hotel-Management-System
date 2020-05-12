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
  guestAll() {
    return this.apiClient.get("/guest");
  }
  oneGuest(id) {
    return this.apiClient.get(`/guest/${id}`);
  }
  roomsAll() {
    return this.apiClient.get(`/rooms`);
  }
  oneRoom(id) {
    return this.apiClient.get(`/rooms/${id}`);
  }
  oneMoreRoom(body) {
    return this.apiClient.post("/rooms", body);
  }
  updateRoom(id, body) {
    return this.apiClient.put(`/rooms/${id}`, body);
  }




}

const apiClient = new ApiClient();
export default apiClient;
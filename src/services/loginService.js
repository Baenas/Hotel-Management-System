import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_API_URL

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
  oneMoreGuest(body) {
    return this.apiClient.post("/guest", body);
  }
  updateGuest(id, body) {
    return this.apiClient.put(`/guest/${id}`, body);
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
  updateRoomInd(id, body) {
    return this.apiClient.patch(`/rooms/${id}`, body);
  }
  checking(body) {
    return this.apiClient.post('/checking', body);
  }
  getChecking(id) {
    return this.apiClient.get(`/checking/${id}`);
  }
  allChecking() {
    return this.apiClient.get(`/checking`);
  }



}

const apiClient = new ApiClient();
export default apiClient;
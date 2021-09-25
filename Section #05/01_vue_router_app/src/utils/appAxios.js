import axios from "axios";
// axios ile istek atarken her seferinde uzun link girmek yerine appAxios oluşturuyoruz.
export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    tokenX: "myToken",
    "Content-Type": "application/json"
  }
});
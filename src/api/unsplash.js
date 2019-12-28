import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 158a3f20240c4c94fdc50995a3468c789bd1613f262471fb92648db58c4ef222"
  }
});
import axios from "axios";
export const API_URL = "https://dogsapi.origamid.dev/json";
const apiDogs = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export default apiDogs;

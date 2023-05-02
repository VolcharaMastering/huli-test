import { URL_CONFIG } from "./constants.js";


const checkResponse = (res) => {
  if (res.ok) {
    console.log("OK!");
    return res.json();
  }
  return Promise.reject(`Bug detected! ${res.status}: ${res.statusText}`);
}

const authorize = (data) => {
  return fetch(URL_CONFIG.url + "signin", {
    headers: URL_CONFIG.headers,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(checkResponse);
}

const authByToken = (token) => {
  return fetch(URL_CONFIG.url + "signin", {
    method: "GET",
    headers: {
      ...URL_CONFIG.headers,
    Authorization: `Bearer ${token}`},
  })
    .then(checkResponse);
}
const getCalls = (data) => {
  return fetch(URL_CONFIG.url + "charts", {
    method: "GET",
    headers: URL_CONFIG.headers,
    body: data,
  })
    .then(checkResponse);
}
export { authorize, authByToken, getCalls };

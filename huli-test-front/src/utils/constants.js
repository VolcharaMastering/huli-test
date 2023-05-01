const token = localStorage.getItem("jwt");

const URL_CONFIG = {
  url: "http://localhost:3013/",
  headers: {
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};
export { URL_CONFIG };

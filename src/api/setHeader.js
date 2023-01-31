import api from ".";

export const setHeader = (token) => {
  api.defaults.headers.common["Authorization"] = token;
};

export const clearHeader = () => {
  delete api.defaults.headers.common["Authorization"];
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

const getItemAsString = (key: string) => {
  return localStorage.getItem(key);
};

const setItemAsString = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

const stringDeserializer = (value: string) => {
  return value;
};

export default {
  getItemAsString,
  setItemAsString,
  removeItem,
  stringDeserializer,
};

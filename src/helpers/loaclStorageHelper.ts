export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
  return true;
};

export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key);
};
export const removeLocalStorageItem = (key: string) => {
  return localStorage.removeItem(key);
};

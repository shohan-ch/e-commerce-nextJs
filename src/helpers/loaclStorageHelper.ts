export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
  return true;
};

export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

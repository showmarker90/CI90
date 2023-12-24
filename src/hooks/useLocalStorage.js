function useLocalStorage(key) {
  const saveItem = (value) => {
    localStorage.setItem(key, value);
  };

  const getItem = () => {
    const localValue = localStorage.getItem(key);

    return localValue;
  };

  return { saveItem, getItem };
}

export default useLocalStorage;

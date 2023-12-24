import { useState } from "react";

function useBoolean(defaultValue) {
  const [result, setResult] = useState(!!defaultValue);
  const setTrue = () => setResult(true);
  const setFalse = () => setResult(false);
  const setToggle = () => setResult(!result);
  const setValue = (value) => setResult(value);

  return { result, setFalse, setTrue, setToggle, setValue };
}

export default useBoolean;

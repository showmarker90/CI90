import { useState } from "react";

function useCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue ?? 0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //    maintain
  const mutiple = (n) => {
    setCount(count * n);
  };

  const divide = (n) => {
    setCount(count / n);
  };

  //return [count, increment, decrement, mutiple, divide];
  return { count, increment, decrement, mutiple, divide };
}

export default useCounter;

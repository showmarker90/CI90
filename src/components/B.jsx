import { Button } from "antd";
import React, { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";
import useLocalStorage from "../hooks/useLocalStorage";

const B = () => {
  const [count, setCount] = useState(0);

  const { getItem, saveItem } = useLocalStorage("count");

  const increment = () => {
    const newCount = count + 1;
    saveItem(newCount);
    setCount(newCount);
  };
  const decrement = () => {
    const newCount = count - 1;
    saveItem(newCount);
    setCount(newCount);
  };

  useEffect(() => {
    const localCount = getItem();
    if (!!localCount) {
      setCount(+localCount);
    }
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(count)}</h1>
      <Button onClick={increment} type="primary">
        +
      </Button>
      <Button onClick={decrement} type="primary" danger>
        -
      </Button>
    </div>
  );
};

export default B;

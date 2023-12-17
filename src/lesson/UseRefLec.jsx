import { Button } from "antd";
import React, { useRef, useState } from "react";

const UseRefLec = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  //countNormal is reset
  // let countNormal = 0;
  const onClick = () => {
    countRef.current++;
    // setCount(count + 1);

    console.log("countRef :", countRef.current);
  };
  return (
    <div>
      <h1>{countRef.current}</h1>

      <Button onClick={onClick}>Click me</Button>
    </div>
  );
};

export default UseRefLec;

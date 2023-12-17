import { Input } from "antd";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const UseCallbaclLec = () => {
  const [val, setVal] = useState("");

  //2s
  //ghi nhớ sau 1 lần re-render
  //callstack : về nhà
  const doingVeryHeavy = useCallback(() => {
    console.log("doing very heavy", JSON.stringify(val));
  }, [val]);

  doingVeryHeavy();

  //Warn : chưa dc tối ưu
  useEffect(() => {
    console.log("effect running");
  }, [doingVeryHeavy]);

  return (
    <div>
      {" "}
      <h1>{val}</h1>
      <Input value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export default UseCallbaclLec;

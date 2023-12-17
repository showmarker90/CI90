import { Input } from "antd";
import React, { useState } from "react";
import Something from "../components/Something";

const MemoLec = () => {
  const [val, setVal] = useState("");

  const user = {
    firstName: "elon",
    lastName: "musk",
  };

  const address = "HY";
  return (
    <div>
      <h1>{val}</h1>
      <Input value={val} onChange={(e) => setVal(e.target.value)} />
      <Something user={user} />
    </div>
  );
};

export default MemoLec;

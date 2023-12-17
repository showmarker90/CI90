import { Input } from "antd";
import React, { useEffect, useMemo, useState } from "react";

const UseMemoLec = () => {
  const [val, setVal] = useState("");

  //tạo mới mỗi lần re-render
  //ghi nhớ
  const user = useMemo(() => {
    return {
      firstName: "elon",
      lastName: "musk",
      school: val,
    };
  }, [val]);

  console.log(user);

  useEffect(() => {
    console.log("effect running");
  }, [user]);

  return (
    <div>
      {" "}
      <Input value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export default UseMemoLec;

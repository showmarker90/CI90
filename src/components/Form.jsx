import React, { useState } from "react";

const Form = ({ handleAddTodo }) => {
  const [val, setVal] = useState("");

  const onClick = () => {
    handleAddTodo(val);
    setVal("");
  };

  return (
    <div>
      {" "}
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default Form;

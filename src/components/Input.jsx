import React from "react";

const Input = ({ label, id, value, onChangeInput, inputKey }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChangeInput(e, inputKey)}
      />
    </div>
  );
};

export default Input;

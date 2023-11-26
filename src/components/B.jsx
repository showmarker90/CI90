import React from "react";

const B = ({ value }) => {
  return (
    <div id="B">
      <h1>B</h1>
      <button onClick={() => alert(`Welcome ${value}`)}>Click</button>
    </div>
  );
};

export default B;

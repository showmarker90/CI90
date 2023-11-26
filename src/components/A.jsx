import React, { useState } from "react";

const A = ({ value, setValue }) => {
  return (
    <div id="A">
      <h1>A</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default A;

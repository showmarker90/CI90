import React, { useState } from "react";

const ConditionalRendering = () => {
  const [turnOn, setTurnOn] = useState(true);

  //   const renderItem = () => {
  //     if (turnOn) {
  //       return <h1>Turn on</h1>;
  //     } else {
  //       return <h1>Turn off</h1>;
  //     }
  //   };
  return (
    <div>
      {/* {turnOn ? <h1>Turn on</h1> : <h1>Turn off</h1>} */}
      {turnOn && <h1>Turn on</h1>}
      <button onClick={() => setTurnOn(!turnOn)}>Turn on</button>
    </div>
  );
};

export default ConditionalRendering;

// import React, { createContext, useState } from "react";
// import Grand from "./components/Grand";
// import { Input } from "antd";

// const user = {
//   firstName: "Elon",
//   lastName: "Musk",
// };

// export const AppContext = createContext(null);

// const App = () => {
//   const [val, setVal] = useState("");
//   return (
//     <>
//       <Input
//         type="primary"
//         placeholder="Enter search"
//         value={val}
//         onChange={(e) => setVal(e.target.value)}
//       />
//       <AppContext.Provider
//         value={{
//           user,
//           val,
//         }}
//       >
//         App
//         <Grand />
//       </AppContext.Provider>
//     </>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;

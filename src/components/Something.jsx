import React, { memo } from "react";

//memo -> memoized

const Something = ({ user }) => {
  console.log("re-render");
  return <div>Something : {JSON.stringify(user)}</div>;
};

export default memo(Something);

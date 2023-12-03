import React, { useEffect } from "react";
//mounting -> sinh ra
// updating
// unmounting -> remove khỏi DOM

const Counter = () => {
  useEffect(() => {
    const userScroll = () => {
      console.log("user is scrolling!!");
    };
    window.addEventListener("scroll", userScroll);

    return () => {
      window.removeEventListener("scroll", userScroll);
    };
  }, []);
  return <div>Counter</div>;
};

export default Counter;

import React from "react";

const Text = ({
  color = "violet",
  fontSize = "20px",
  text,
  children,
  ...rest
}) => {
  //   console.log(rest);

  console.log(children);
  return (
    <p
      style={{
        color,
        fontSize,
        ...rest,
      }}
    >
      {text}
      {children}
    </p>
  );
};

export default Text;

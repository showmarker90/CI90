import React from "react";

function genClass(type) {
  switch (type) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "white":
      return "white";
    default:
      return "primary";
  }
}

function genStyle(type, color) {
  switch (type) {
    case "primary":
      return {
        backgroundColor: color,
      };
    case "secondary":
      return {
        color: color,
        borderColor: color,
      };
  }
}

const Button = ({ type, color }) => {
  return (
    <button
      className={
        type === "primary"
          ? "primary"
          : type === "secondary"
          ? "secondary"
          : "white"
      }
      style={{ ...genStyle(type, color) }}
    >
      Button
    </button>
  );
};

export default Button;

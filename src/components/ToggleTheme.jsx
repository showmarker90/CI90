import React, { useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from "../Theme";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="toggleTheme" onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline color="black" size={30} />
      ) : (
        <FiSun color="white" size={30} />
      )}
    </div>
  );
};

export default ToggleTheme;

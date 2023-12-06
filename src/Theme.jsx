import { Typography } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import ToggleTheme from "./components/ToggleTheme";

export const ThemeContext = createContext(null);

const Theme = () => {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="theme" id={theme === "light" ? "light" : "dark"}>
        <ToggleTheme />
        <FaReact size={100} color="#149eca" />
        <p id="title">React</p>
        <p id="desc">The library for web and native user interfaces</p>
      </div>
    </ThemeContext.Provider>
  );
};

export default Theme;

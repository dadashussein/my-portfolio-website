import React from "react";
import { useEffect } from "react";
import "./switcher.css";
import useLocalStorage from "use-local-storage";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("light");

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="toggle">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={toogleTheme}
      />
      <label htmlFor="checkbox" className="label">
        <i className="uil uil-moon"></i>
        <i className="uil uil-sun"></i>
        <div className="ball" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;

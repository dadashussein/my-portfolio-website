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
        class="checkbox"
        id="checkbox"
        onClick={toogleTheme}
      />
      <label for="checkbox" class="label">
        <i class="uil uil-moon"></i>
        <i class="uil uil-sun"></i>
        <div class="ball" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;

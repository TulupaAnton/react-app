import React, { useContext } from "react";
import { ThemeContext } from "../../../Contents";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeChangeHandler = ({ target: { value } }) => {
    setTheme(value);
  };

  return (
    <select value={theme} onChange={themeChangeHandler}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="gold">Gold</option>
    </select>
  );
}

export default ThemeSwitcher;

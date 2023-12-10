// -App
//  -UserPage
//    -Header
//      -ThemeSwitcher
//    -main

import { useState } from "react";
import classNames from "classnames";
import { ThemeContext } from "./Contents";
import UserPage from "./pages/UserPage";
import styles from "./App.module.css";
// light,dark,gold
function App() {
  const [theme, setTheme] = useState("dark");

  const containerClassNames = classNames(styles.pageContainer, {
    [styles.light]: theme === "light",
    [styles.dark]: theme === "dark",
    [styles.gold]: theme === "gold",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={containerClassNames}>
        <UserPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

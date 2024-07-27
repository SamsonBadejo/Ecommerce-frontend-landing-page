import React, { useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement; // access to html

  // set theme to localStorage and html element

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  }, [theme, element]);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Add the function to toggle the theme here
        src={LightButton}
        alt="light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />

      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Add the function to toggle the theme here
        src={DarkButton}
        alt="dark mode"
        className={`w-12 cursor-pointer `}
      />
    </div>
  );
};

export default DarkMode;

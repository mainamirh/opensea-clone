import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/carousel.css";
import "../styles/top-collections.css";
import "../styles/trending.css";
import "../styles/categories.css";
import "../styles/footer.css";
import "../styles/toggle-button.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector(".toggle-button input");
    const darkModeStorage = localStorage.getItem("darkMode");
    if (darkModeStorage) {
      toggleButton.checked = true;
    } else {
      toggleButton.checked = false;
    }
  }, []);

  const enableDarkMode = (body) => {
    if (!body.classList.contains("body-light")) {
      body.classList.add("body-dark");
      localStorage.setItem("darkMode", true);
      return;
    }
    body.classList.replace("body-light", "body-dark");
    localStorage.setItem("darkMode", true);
  };

  const disableDarkMode = (body) => {
    if (!body.classList.contains("body-dark")) {
      body.classList.add("body-light");
      localStorage.setItem("darkMode", false);
      return;
    }
    body.classList.replace("body-dark", "body-light");
    localStorage.setItem("darkMode", false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      enableDarkMode(body);
    } else {
      disableDarkMode(body);
    }
  }, [darkMode]);

  return (
    <Component
      darkMode={darkMode}
      setDarkMode={() => setDarkMode(!darkMode)}
      {...pageProps}
    />
  );
}

export default MyApp;

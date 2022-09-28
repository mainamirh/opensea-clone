import { useState, useEffect, useRef } from "react";

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
  const initialRender = useRef(true);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("darkMode");
    const darkModeState = JSON.parse(data);
    if (darkModeState !== null) setDarkMode(darkModeState);
  }, []);

  useEffect(() => {
    // Prevent first render to avoid conflict between two useEffects.
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const body = document.querySelector("html");
    if (darkMode) {
      enableDarkMode(body);
    } else {
      disableDarkMode(body);
    }

    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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

  return (
    <Component
      darkMode={darkMode}
      setDarkMode={() => setDarkMode(!darkMode)}
      {...pageProps}
    />
  );
}

export default MyApp;

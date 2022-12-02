import { useState, useEffect } from "react";
import Script from "next/script";

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
  const [darkMode, setDarkMode] = useState(undefined);

  useEffect(() => {
    const data = window.localStorage.getItem("darkMode");
    const darkModeState = JSON.parse(data);
    darkModeState !== null ? setDarkMode(darkModeState) : setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    const html = document.querySelector("html");

    if (html.classList.contains("body-light")) {
      html.classList.replace("body-light", "body-dark");
      localStorage.setItem("darkMode", JSON.stringify(true));

      setDarkMode(true);
    } else if (html.classList.contains("body-dark")) {
      html.classList.replace("body-dark", "body-light");
      localStorage.setItem("darkMode", JSON.stringify(false));

      setDarkMode(false);
    }
  };

  return (
    <>
      <Script src="/setTheme.js" strategy="beforeInteractive" />

      <Component darkMode={darkMode} setDarkMode={toggleTheme} {...pageProps} />
    </>
  );
}

export default MyApp;

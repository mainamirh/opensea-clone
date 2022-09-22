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
    console.log(darkMode);
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

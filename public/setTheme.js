(function initTheme() {
  // Get theme mode from localStorage. Default theme is light mode.
  const data = localStorage.getItem("darkMode");
  const darkModeState = JSON.parse(data);

  if (darkModeState !== null) {
    const theme = darkModeState ? "body-dark" : "body-light";
    document.querySelector("html").classList.add(theme);
  } else {
    localStorage.setItem("darkMode", JSON.stringify(false));
    document.querySelector("html").classList.add("body-light");
  }
})();

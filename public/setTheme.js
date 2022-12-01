(function () {
  // Add dynamic-header class
  // const header = document.querySelector(".header");
  // const searchBar = document.querySelector(".middle-section");
  // header.classList.add("dynamic-header");
  // searchBar.classList.add("middle-section-dynamic");

  // Get theme mode from localStorage. Default theme is light mode.
  const data = window.localStorage.getItem("darkMode");
  const darkModeState = JSON.parse(data);

  if (darkModeState !== null) {
    const theme = darkModeState ? "body-dark" : "body-light";
    const html = document.querySelector("html");
    html.classList.add(theme);
  } else {
    window.localStorage.setItem("darkMode", JSON.stringify(false));
    const html = document.querySelector("html");
    html.classList.add("body-light");
  }
})();

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("darkMode");
}

function setDarkMode() {
  if (localStorage.getItem("darkScreen") === null) {
    localStorage.setItem("darkScreen", toggleDarkMode());
  } else {
    localStorage.clear();
    toggleDarkMode();
  }
}

function checkDarkMode() {
  if ("darkScreen" in localStorage) {
    toggleDarkMode();
  }
}

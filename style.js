const form = document.querySelector(".form").themeSwitch;
const formArray = Array.from(form);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

formArray.map((item) => {
  if (item.id == currentTheme) {
    item.checked = true;
  }
  item.addEventListener("change", switchTheme, false);
});

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", e.target.id);
    localStorage.setItem("theme", e.target.id);
  }
}

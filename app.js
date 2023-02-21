const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");
const input = document.querySelector("#user");
const btn = document.querySelector(".btn");
const flitTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#141D2F";
  } else {
  }
  title.classList.toggle("dark");
  themeText.classList.toggle("dark");
};
moon.addEventListener("click", () => flitTheme("dark"));
btn.addEventListener("click", (e) => {
  e.preventDefault();
});

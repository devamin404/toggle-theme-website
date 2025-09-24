const body = document.body;
const logo = document.querySelector(".logo img");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleText = toggleBtn.querySelector("span");
const toggleIcon = toggleBtn.querySelector("img");
const content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {

  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  logo.src = isDark
    ? "portfolio-img/logo-white.png"
    : "portfolio-img/logo.png";
  toggleText.textContent = isDark ? "Light" : "Dark";
  toggleIcon.src = isDark
    ? "portfolio-img/sun.png"
    : "portfolio-img/moon.png";
});



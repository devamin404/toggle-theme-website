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
    ? "portfolio-dark-img/images/logo-white.png"
    : "portfolio-dark-img/images/logo.png";
  toggleText.textContent = isDark ? "Dark" : "Light";
  toggleIcon.src = isDark
    ? "portfolio-dark-img/images/moon.png"
    : "portfolio-dark-img/images/sun.png";
});



"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");

// Задание 1. Обновление ширины окна браузера
function updateWidth() {
  widthText.textContent = window.innerWidth;
}
updateWidth();
window.addEventListener("resize", updateWidth);

// Задание 2. Отслеживание прокрутки страницы
function updateScroll() {
  scrollText.textContent = Math.round(window.scrollY);
}
updateScroll();
window.addEventListener("scroll", updateScroll);

// Задание 3. Отслеживание активности окна браузера
window.addEventListener("focus", () => {
  focusStatus.textContent = "Окно активно";
});
window.addEventListener("blur", () => {
  focusStatus.textContent = "Окно неактивно";
});
focusStatus.textContent = document.hasFocus()
  ? "Окно активно"
  : "Окно неактивно";

// Задание 4. Запрос имени пользователя
nameButton.addEventListener("click", () => {
  const answer = window.prompt("Как вас зовут?");
  if (answer !== null && answer.trim() !== "") {
    greeting.textContent = "Привет, " + answer.trim() + "!";
  }
});
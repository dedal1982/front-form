// Получаем все секции
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

// Функция для прокрутки к следующей секции
function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });
}

// Обработчик события прокрутки
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // Прокрутка вниз
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    }
  } else {
    // Прокрутка вверх
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  }
});

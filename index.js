const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    }
  } else {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  }
});

//переключение пшеницы
const softWrapper = document.querySelector(".soft__wrapper");
const solidWrapper = document.querySelector(".solid__wrapper");
const softBottom = document.querySelector(".soft__bottom-left");
const solidBottom = document.querySelector(".solid__bottom-left");

if (softBottom) {
  softBottom.addEventListener("click", () => {
    softWrapper.classList.remove("active");
    solidWrapper.classList.add("active");
  });
}

if (solidBottom) {
  solidBottom.addEventListener("click", () => {
    solidWrapper.classList.remove("active");
    softWrapper.classList.add("active");
  });
}

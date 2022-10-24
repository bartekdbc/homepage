console.log("Hej, miłego dnia dla wszystkich, którzy tu zajrzą!");

let header__buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let header__themeNameElement = document.querySelector(".js-themeName");
let section__buttonContactElement = document.querySelector(".js-buttonContact");
let section__contactElement = document.querySelector(".js-contact");

header__buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("body--darkTheme");

  header__themeNameElement.innerText = bodyElement.classList.contains("body--darkTheme")
    ? "Jasny"
    : "Ciemny";
});

section__buttonContactElement.addEventListener("click", () => {
  section__contactElement.classList.toggle("section__contact--hide");
  section__buttonContactElement.innerText =
    section__contactElement.classList.contains("section__contact--hide")
      ? "Pokaż kontakt"
      : "Ukryj kontakt";
});

{
  const welcome = () => {
    console.log("Hej, miłego dnia dla wszystkich, którzy tu zajrzą!");
  };

  const toggleBackground = () => {
    const bodyElement = document.querySelector(".js-body");
    const header__themeNameElement = document.querySelector(".js-themeName");

    bodyElement.classList.toggle("body--darkTheme");
    header__themeNameElement.innerText = bodyElement.classList.contains(
      "body--darkTheme"
    )
      ? "Jasny"
      : "Ciemny";
  };

  const showDetails = () => {
    const section__contactElement = document.querySelector(".js-contact");
    const section__buttonContactElement =
      document.querySelector(".js-buttonContact");

    section__contactElement.classList.toggle("section__contact--hide");
    section__buttonContactElement.innerText =
      section__contactElement.classList.contains("section__contact--hide")
        ? "Pokaż kontakt"
        : "Ukryj kontakt";
  };

  const init = () => {
    const header__buttonElement = document.querySelector(".js-button");
    const section__buttonContactElement =
      document.querySelector(".js-buttonContact");

    header__buttonElement.addEventListener("click", toggleBackground);
    section__buttonContactElement.addEventListener("click", showDetails);

    welcome();
  };

  init();
}

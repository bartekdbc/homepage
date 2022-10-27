{
  const welcome = () => {
    console.log("Hej, miłego dnia dla wszystkich, którzy tu zajrzą!");
  };

  const toggleBackground = () => {
    const bodyElement = document.querySelector(".js-body");
    const headerthemeNameElement = document.querySelector(".js-themeName");

    bodyElement.classList.toggle("body--darkTheme");
    headerthemeNameElement.innerText = bodyElement.classList.contains(
      "body--darkTheme"
    )
      ? "Jasny"
      : "Ciemny";
  };

  const showDetails = () => {
    const sectioncontactElement = document.querySelector(".js-contact");
    const sectionbuttonContactElement =
      document.querySelector(".js-buttonContact");

    sectioncontactElement.classList.toggle("section__contact--hide");
    sectionbuttonContactElement.innerText =
      sectioncontactElement.classList.contains("section__contact--hide")
        ? "Pokaż kontakt"
        : "Ukryj kontakt";
  };

  const init = () => {
    const headerbuttonElement = document.querySelector(".js-button");
    const sectionbuttonContactElement =
      document.querySelector(".js-buttonContact");

    headerbuttonElement.addEventListener("click", toggleBackground);
    sectionbuttonContactElement.addEventListener("click", showDetails);

    welcome();
  };

  init();
}

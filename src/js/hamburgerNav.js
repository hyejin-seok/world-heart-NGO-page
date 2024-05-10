function hamburgerNavClickHandler() {
  const hamburgerNavLinks = document.querySelectorAll(".hamburger-nav-link");

  hamburgerNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("close-btn-hamburger").click();
    });
  });
}

export default hamburgerNavClickHandler;

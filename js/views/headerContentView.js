class HeaderContentView {
  // DOM elements
  navbar = document.getElementById("nav");
  header = document.querySelector(".header");

  // As the navigation bar has position:fixed which will get it out of the normal flow of the page, I had to dynamically set a padding top for the main content of the header element so the navigation bar will not overwrite it
  setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const navbarSizes = this.navbar.getBoundingClientRect();

        this.header.style.paddingTop = `${navbarSizes.height}px`;
        this.header.style.paddingBottom = `${navbarSizes.height}px`;
      });
    });
  }
}

export default new HeaderContentView();

class HeaderContentView {
  navbar = document.getElementById("nav");
  header = document.getElementById("header");

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

class SideNavbarView {
  navbar = document.getElementById("nav");
  sideNavbar = document.querySelector(".sidebar-navigation");
  hamburgerBtn = document.getElementById("hamburger-btn");

  getSize() {
    const size = this.navbar.getBoundingClientRect().height;
    return size;
  }

  setDynamicMargin() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        this.sideNavbar.style.marginTop = `${this.getSize()}px`;
      });
    });
  }

  displaySideNavbar() {
    this.hamburgerBtn.addEventListener("click", () => {
      this.sideNavbar.classList.toggle("sidebar-navigation-visible");

      if (window.scrollY === 0) {
        if (this.navbar.classList.contains("navigation-highlight")) {
          this.navbar.classList.remove("navigation-highlight");
        } else {
          this.navbar.classList.add("navigation-highlight");
        }
      }
    });
  }
}

export default new SideNavbarView();

class SideNavbarView {
  navbar = document.getElementById("nav");
  sideNavbar = document.querySelector(".sidebar-navigation");
  hamburgerBtn = document.getElementById("hamburger-btn");
  overlay = document.querySelector(".overlay");

  setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const navbarSize = this.navbar.getBoundingClientRect();
        this.sideNavbar.style.marginTop = `${navbarSize.height}px`;
      });
    });
  }

  toggleSideNavbar() {
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) {
        this.sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }

      if (e.target.classList.contains("overlay") && window.scrollY === 0) {
        this.navbar.classList.remove("navigation-highlight");
        this.sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }
    });

    this.hamburgerBtn.addEventListener("click", () => {
      this.sideNavbar.classList.toggle("sidebar-navigation-visible");
      this.overlay.classList.toggle("overlay-visible");

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

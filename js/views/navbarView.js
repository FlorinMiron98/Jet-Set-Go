class NavbarView {
  sideNavbar = document.querySelector(".sidebar-navigation");
  navbar = document.getElementById("nav");

  setDynamicStyling() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.navbar.classList.add("navigation-highlight");
      }
      if (
        window.scrollY === 0 &&
        !this.sideNavbar.classList.contains("sidebar-navigation-visible")
      ) {
        this.navbar.classList.remove("navigation-highlight");
      }
      if (
        window.scrollY === 0 &&
        this.sideNavbar.classList.contains("sidebar-navigation-visible")
      )
        return;
    });
  }
}

export default new NavbarView();

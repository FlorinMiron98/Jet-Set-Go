class NavbarView {
  // DOM elements
  sideNavbar = document.querySelector(".sidebar-navigation");
  navbar = document.getElementById("nav");

  // Set the background styling for the navbar when the scrollY property is 1px or bigger or depending on the styling of the side navigation bar
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
